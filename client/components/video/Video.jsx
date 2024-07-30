import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import * as requester from "../../src/api/requester";
import { urls } from "../../public/allUrls/urls";
import { UserContext } from "../../src/context/AuthContext";

import style from "./Video.module.css";
import ReactPlayer from "react-player";

export default function Video() {
  const [videos, setVideos] = useState([]);
  const userData = useContext(UserContext);

  useEffect(() => {
    (async () => {
      const allVideos = await requester.get(urls.videos);
      setVideos(Object.values(allVideos));
    })();
  }, []);

  return (
    <section className={style.background}>
      <aside className={style.aside}>
        {userData.accessToken ? (
          <Link to="/CreateNewVideo">
            <button className={style.addVideo}>Добави новo видео</button>
          </Link>
        ) : null}
      </aside>

      <section className={style.video}>
        {videos.map((video) => (
          <article key={video._id} className={style.article}>
            <div className={style.reactPlayer}>
              <h3>{video.header}</h3>
              <ReactPlayer url={video.videoUrl} controls />
            </div>
            <div className={style.editAndDelete}>
              <h1 className={style.mail}>{video.user}</h1>

              {userData.email === video.user ? (
                <div className={style.flex}>
                  <Link to={`/EditVideo/${video._id}`}>
                    <button className={style.edit}>edit</button>
                  </Link>
                  <Link to={`/DeleteVideo/${video._id}`}>
                    <button className={style.delete}>delete</button>
                  </Link>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </section>
      <aside className={style.aside}>
        {userData.accessToken ? (
          <Link to="/CreateNewVideo">
            <button className={style.addVideo}>Добави новo видео</button>
          </Link>
        ) : null}
      </aside>
    </section>
  );
}
