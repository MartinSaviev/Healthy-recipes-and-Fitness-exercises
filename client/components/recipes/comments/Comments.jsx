import { useParams } from "react-router-dom";
import styles from "./Comments.module.css";

export default function Comments() {
    let {userId} = useParams();
    
  return (
    <article className={styles.method}>
      <h4>Начин на приготване</h4>
      <p>{userId}</p>
    </article>
  );
}
