import { useState, useEffect } from "react";
import style from "./Video.module.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const url = "http://localhost:3030/jsonstore/videos";

export default function Video() {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const allVideos = await response.json();
        setVideos(Object.values(allVideos));
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  return (
    <section className={style.background}>
      <aside className={style.aside}>
        <Link to="/CreateNewVideo">
          <button className={style.addVideo}>Добави новo видео</button>
        </Link>
      </aside>

      <section className={style.video}>
        {error ? (
          <div className={style.error}>Error: {error}</div>
        ) : (
          videos.map((video) => (
            <div key={video._id} className={style.reactPlayer}>
              <h3>{video.header}</h3>
              <ReactPlayer url={video.videoUrl} controls />
            </div>
          ))
        )}
      </section>
      <aside className={style.aside}>
        <Link to="/CreateNewVideo">
          <button className={style.addVideo}>Добави новo видео</button>
        </Link>
      </aside>
    </section>
  );
}
