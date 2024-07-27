import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";

import styles from "./Comments.module.css";

export default function Comments() {
  const [comments, getComments] = useState([]);

  let { userId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await requester.get(`${urls.recipes}/${userId}/commentary`);
      getComments(Object.values(data));
     
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section className={styles.background}>
      <aside className={styles.aside}>
        <Link to={`/AddComment/${userId}`}>
          <button className={styles.addComment}>Добави коментар</button>
        </Link>
      </aside>
      {comments.map((c) => (
        <article key={c._id} className={styles.method}>
          <h5 className={styles.user}>{c.user}</h5>
          <h4>{c.note}</h4>
          <button className={styles.delete}>Delete</button>
        </article>
      ))}
    </section>
  );
}
