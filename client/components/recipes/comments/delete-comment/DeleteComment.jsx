import { Link, useParams } from 'react-router-dom';

import style from './DeleteComment.module.css'
export default function DeleteComment(){

    const userId = useParams();
     function deleteCommentHandler() {
        
    }

    return (
        <article className={style.deleteModal}>
          <h2>Изтриване на Коментар!</h2>
          <div className={style.buttons}>
            <Link>
              <button className={style.deleteButton} onClick={deleteCommentHandler}>
                Изтрий
              </button>
            </Link>
            <Link to={`Comments/${userId}`}>
              <button className={style.cancelButton}>Отказ</button>
            </Link>
          </div>
        </article>
      );
}