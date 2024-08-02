import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../src/context/AuthContext";

import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";

import styles from "./CreateNewVideo.module.css";



export default function CreateNewVideo() {
  const userData = useContext(UserContext);

  let navigate = useNavigate();
  const [values, setValues] = useState({
    header: "",
    user:userData.email,
    videoUrl: "",
  });
  const [error, setError] = useState("");

  function changeNameHandler(ev) {
    setValues((prevValues) => ({
      ...prevValues,
      header: ev.target.value,
    }));
  }

  function changeUrlHandler(ev) {
    setValues((prevValues) => ({
      ...prevValues,
      videoUrl: ev.target.value,
    }));
  }

  async function postHandler(event) {
    event.preventDefault();
    
    if (
      !values.header ||
      (!values.videoUrl.startsWith("https://") && !values.videoUrl.startsWith("http://"))
    ) {
      setError("Моля, попълнете всички полета и уверете се, че URL адресът на видеото започва с 'https://' или 'http://'.");
      return;
    }

    try {
      const addVideoFormServer = await requester.post(urls.videos, values);

      if (!addVideoFormServer) {
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
        <div className={styles.title}>Добави ново видео</div>
        <form className={styles.form} onSubmit={postHandler}>
          <div className={styles.field}>
            <input
              type="text"
              name="name"
              value={values.header}
              onChange={changeNameHandler}
              required
            />
            <label>Име</label>
          </div>
          <div className={styles.field}>
            <input
              type="text"
              name="img"
              value={values.videoUrl}
              onChange={changeUrlHandler}
              required
            />
            <label>Видео (URL)</label>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles["submit-btn-container"]}>
            <input
              type="submit"
              className={styles["submit-btn"]}
              value="Добави"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}
