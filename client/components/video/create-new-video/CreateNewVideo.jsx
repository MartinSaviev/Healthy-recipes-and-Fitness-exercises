import { useState } from "react";

import styles from "./CreateNewVideo.module.css";
import backgroundVideo from "./backgroundVideo.mp4";
import {useNavigate } from "react-router-dom";

const url = "http://localhost:3030/jsonstore/videos";

export default function CreateNewVideo() {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    header: "",
    videoUrl: "",
  });

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

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  };
  
  async function postHandler(event) {
    event.preventDefault();
     ///try catch ?
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);
    navigate("../Video");
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
        <div className={styles.title}>Create New Video</div>
        <form
          onSubmit={(e) => {
            e.preventDefault;
          }}
          className={styles.form}
        >
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
          <div className={styles["submit-btn-container"]}>
            <input
              type="submit"
              className={styles["submit-btn"]}
              value="Submit"
              onClick={postHandler}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
