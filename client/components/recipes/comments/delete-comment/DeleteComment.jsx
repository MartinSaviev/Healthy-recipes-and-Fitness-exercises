import { Link, useNavigate, useParams } from "react-router-dom";

import { urls } from "../../../../public/allUrls/urls";
import * as requester from "../../../../src/api/requester";

import style from "./DeleteComment.module.css";

export default function DeleteComment() {
  const { recipeCommentsId, commentId } = useParams(); 
  const navigate = useNavigate();
  async function deleteCommentHandler() {
    const result = await requester.del(
      `${urls.recipes}/${recipeCommentsId}/commentary/${commentId}`
    );
    navigate(`/Comments/${recipeCommentsId}`);
    console.log(result);
  }

  return (
    <article className={style.deleteModal}>
      <h2>Изтриване на Коментар!</h2>
      <div className={style.buttons}>
        
        <button className={style.deleteButton} onClick={deleteCommentHandler}>
          Изтрий
        </button>

        <Link to={`/Comments/${recipeCommentsId}`}>
          <button className={style.cancelButton}>Отказ</button>
        </Link>
      </div>
    </article>
  );
}
