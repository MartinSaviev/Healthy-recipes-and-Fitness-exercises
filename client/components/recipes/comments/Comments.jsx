import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";

import styles from "./Comments.module.css";
import { UserContext } from "../../../src/context/AuthContext";

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [deleteId, setDeleteId] = useState(false);

  let navigate = useNavigate();
  const { userId } = useParams();

  async function deleteHandler(ev, recipeId, id) {
    ev.preventDefault();

    let result = await requester.del(
      `${urls.recipes}/${recipeId}/commentary/${id}`
    );
    console.log(result);
    navigate(`/Comments/${recipeId}`);
    setDeleteId(id);
  }

  useEffect(() => {
    (async () => {
      const data = await requester.get(`${urls.recipes}/${userId}/commentary`);
      setComments(Object.values(data));
    })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteId]);

  const contextData = useContext(UserContext);

  console.log(comments);
  return (
    <section className={styles.background}>
      <aside className={styles.aside}>
        <Link to={`/AddComment/${userId}`}>
          {contextData.accessToken ? <button className={styles.addComment}>Добави коментар</button> :null}
        </Link>
      </aside>
      {comments.map((comment) => (
        <article key={comment._id} className={styles.method}>
          <h5 className={styles.user}>{comment.user}</h5>
          <h4>{comment.note}</h4>
          
          {contextData.email === comment.user ? (
            <button
              onClick={(ev) => deleteHandler(ev, userId, comment._id)}
              className={styles.delete}
            >
              Delete
            </button>
          ) : null}
        </article>
      ))}
    </section>
  );
}