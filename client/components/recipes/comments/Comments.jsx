import { Link, useParams } from "react-router-dom";
import styles from "./Comments.module.css";
import { useEffect, useState } from "react";

import * as requester from "../../../src/api/requester";

const ulr = 'recipes/recipes'

export default function Comments() {
  const [comments, getComments] = useState([]);

  let { userId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await requester.get(`${ulr}/${userId}/commentary`);
      getComments(Object.values(data));
     
    })();
  }, [userId]);

  console.log(comments);
  return (
    <section className={styles.background}>
      <aside className={styles.aside}>
        <Link to={`/AddComment/${userId}`}>
          <button className={styles.addComment}>Добави коментар</button>
        </Link>
      </aside>
      {comments.map((c) => (
        <article key={c._id} className={styles.method}>
          <h4>{c.note}</h4>
        </article>
      ))}
    </section>
  );
}
