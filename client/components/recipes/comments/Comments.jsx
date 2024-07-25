import { Link, useParams } from "react-router-dom";
import styles from "./Comments.module.css";
import { useEffect, useState } from "react";

import requester from "../../../src/api/requester";

export default function Comments() {
  const [comments, getComments] = useState([]);

  let { userId } = useParams();

  useEffect(() => {
    (async () => {

      const data = await requester('GET',`${userId}/comments`)
      getComments(data);
    })();
  }, [userId]);

  return (
    <>
    <aside className={styles.aside}>
        <Link to="/AddComment">
          <button className={styles.addComment}>Добави коментар</button>
        </Link>
      </aside>
      {comments.map((comment,index) => (
        <article key={index} className={styles.method}>
          <h4>{comment}</h4>
        </article>
      ))}
    </>
  );
}
