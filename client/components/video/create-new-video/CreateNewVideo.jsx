import { useState } from "react";
import styles from "./CreateNewVideo.module.css";
import backgroundVideo from "./backgroundVideo.mp4";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3030/jsonstore/videos";

export default function CreateNewVideo() {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    header: "",
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
    if (!values.header || !values.videoUrl || !values.videoUrl.startsWith("https://" || "http://")) {
      alert("Моля, попълнете всички полета коректно.");
      return;
    }
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data);
      navigate("../Video");
    } catch (err) {
      setError("Моля, попълнете всички полета и уверете се, че URL адресът на видеото започва с 'https://' или 'http://'.");
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
        <div className={styles.title}>Добави ново видео</div>
        <form className={styles.form} onSubmit={postHandler}>
          <div className={styles.field}>
            <input
              type="text"
              name="name"
              value={values.header}
              onChange={changeNameHandler}
            />
            <label>Име</label>
          </div>
          <div className={styles.field}>
            <input
              type="text"
              name="img"
              value={values.videoUrl}
              onChange={changeUrlHandler}
            />
            <label>Изображение (URL)</label>
          </div>
          {error && <div className={styles.error}>{error}</div>}
          <div className={styles["submit-btn-container"]}>
            <input
              type="submit"
              className={styles["submit-btn"]}
              value="Добави"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
