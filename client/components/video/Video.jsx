import { useState, useEffect } from "react";
import style from "./Video.module.css";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

import * as requester from "../../src/api/requester";

const ulr = 'videos'

export default function Video() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const allVideos = await requester.get(ulr);
      setVideos(Object.values(allVideos));
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
        {videos.map((video) => (
          <div key={video._id} className={style.reactPlayer}>
            <h3>{video.header}</h3>
            <ReactPlayer url={video.videoUrl} controls />
          </div>
        ))}
      </section>
      <aside className={style.aside}>
        <Link to="/CreateNewVideo">
          <button className={style.addVideo}>Добави новo видео</button>
        </Link>
      </aside>
    </section>
  );
}
