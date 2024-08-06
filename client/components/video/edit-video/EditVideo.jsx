import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";

import styles from "./EditVideo.module.css";
import { useForm } from "../../formHook/useForm";

export default function EditVideo() {
  
  let { userId } = useParams();
  const navigate = useNavigate();

  const initialFormValues = {
    header: "",
    user: "",
    videoUrl: "",
    _id: userId,
  }

  const {values,setValues, changeHandler}= useForm(initialFormValues); 
 
  const [error, setError] = useState("");


  useEffect(() => {
    (async () => {
      const data = await requester.get(`${urls.videos}/${userId}`);
    
      setValues((prevValues) => ({
        ...prevValues,
        header: data.header || "",
        videoUrl: data.videoUrl || "",
        user:data.user || "",
      }));
    })();
  }, [userId,setValues]);

  async function editHandler(event) {
    event.preventDefault();

    if (
      !values.header ||
      (!values.videoUrl.startsWith("https://") && !values.videoUrl.startsWith("http://"))
    ) {
      setError("Моля, попълнете всички полета и уверете се, че URL адресът на видеото започва с 'https://' или 'http://'.");
      return;
    }
    try {
      const response = await requester.put(`${urls.videos}/${userId}`, values);
      if (!response) {
        throw new Error("Network response was not ok");
      }

      navigate("../Video");
    } catch (err) {
      setError("Възникна грешка при добавянето на видеото. Моля, опитайте отново.");
      console.error("Error adding video:", err);
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Промени Видео</div>
        <form className={styles.form} onSubmit={editHandler}>
          <div className={styles.field}>
            <input
              type="text"
              name="header"
              value={values.header}
              onChange={changeHandler}
              required
            />
            <label>Име</label>
          </div>
          <div className={styles.field}>
            <input
              type="text"
              name="videoUrl"
              value={values.videoUrl}
              onChange={changeHandler}
              required
            />
            <label>Видео (URL)</label>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles["submit-btn-container"]}>
            <input
              type="submit"
              className={styles["submit-btn"]}
              value="Промени"
            />
            <Link to='/video'>
            <input
              type="button"
              className={styles["cancel-btn"]}
              value="Отказ"
            />
            </Link>

          </div>
        </form>
      </div>
    </div>
  );
}