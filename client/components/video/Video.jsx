import { useState, useEffect } from "react";

import style from "./Video.module.css";
import ReactPlayer from "react-player";
const url = "http://localhost:3030/jsonstore/videos";

export default function Video() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const allVideos = await response.json();

      setVideos(Object.values(allVideos));
    })();
  }, []);
  return (
    <>
      <aside className={style.aside}>
        <button className={style.addVideo}>Добави новo видео</button>
      </aside>

      <section className={style.video}>
        {videos.map((video) => (
          <div key={video._id} className={style.reactPlayer}>
            <h3>{video.header}</h3>
            <ReactPlayer url={video.videoUrl} controls />
          </div>
        ))}
      </section>
    </>
  );
}
