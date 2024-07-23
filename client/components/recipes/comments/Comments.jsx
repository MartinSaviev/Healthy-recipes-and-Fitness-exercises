import { useParams } from "react-router-dom";
import styles from "./Comments.module.css";
import { useEffect, useState } from "react";
const url = "http://localhost:3030/jsonstore/recipes/recipes/";

export default function Comments() {
  const [comments, getComments] = useState([]);

  let { userId } = useParams();

  useEffect(() => {
    console.log(userId);
    (async () => {
      const response = await fetch(`${url}${userId}/comments`);
      const data = await response.json();
      getComments(data);
    })();
  }, []);

  console.log(comments);
  return (
    <>
      {comments.map((comment) => (
        <article key={userId} className={styles.method}>
          <h4>{comment}</h4>
        </article>
      ))}
    </>
  );
}
