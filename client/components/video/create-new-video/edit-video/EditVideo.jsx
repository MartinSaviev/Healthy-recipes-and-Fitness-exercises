import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import backgroundVideo from "../backgroundVideo.mp4";

import styles from "./EditVideo.module.css";
import * as requester from "../../../../src/api/requester";
import { urls } from "../../../../public/allUrls/urls";
import { UserContext } from "../../../../src/context/AuthContext";

export default function EditVideo() {

  const userData = useContext(UserContext);

  let { userId } = useParams();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    header: "",
    user:userData.email,
    videoUrl: "",
    "_id":userId,
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
        console.log(response);
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
      <video
        className={styles.video}
        src={backgroundVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
      ></video>
      <div className={styles.wrapper}>
        <div className={styles.title}>Промени Видео</div>
        <form className={styles.form} onSubmit={editHandler}>
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
              value="Промени"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
}
