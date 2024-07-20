import { useState, useEffect } from "react";
import style from "./Video.module.css";

const url = "http://localhost:3030/jsonstore/videos";

export default function Video() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(url);
      const allVideos = await response.json();
      setVideos(Object.values(allVideos));
      console.log(videos);
    })();
  }, []);

  return (
    <>
      <section className={style.video}>
        {videos.map((video) => (
          <div key={video._id}>
            <h3>{video.header}</h3>
            <iframe
              className={style.iframe}
              src={video.videoUrl}
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </section>
    </>
  );
}
