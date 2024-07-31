import { urls } from "../../../public/allUrls/urls";
import { Link, useNavigate, useParams } from "react-router-dom";

import *as requester from "../../../src/api/requester";

import style from "./DeleteVideo.module.css";

export default function DeleteVideo() {
  let { userId } = useParams();
  let navigate = useNavigate();

  async function deleteVideoHandler() {
    const response = await requester.del(`${urls.videos}/${userId}`);
    console.log(response);
    console.log(userId);
    if (response) {
        navigate('/video')
    }
  }

  return (
    <article className={style.deleteModal}>
      <h2>Изтриване на Видео!</h2>
      <div className={style.buttons}>
        <Link>
          <button className={style.deleteButton} onClick={deleteVideoHandler}>
            Изтрий
          </button>
        </Link>
        <Link to="/video">
          <button className={style.cancelButton}>Отказ</button>
        </Link>
      </div>
    </article>
  );
}
