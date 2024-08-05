import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";

import { UserContext } from "../../../../src/context/AuthContext";
import * as requester from "../../../../src/api/requester";
import { urls } from "../../../../public/allUrls/urls";
import { useForm } from "../../Hooks/useForm";

import styles from "./AddComment.module.css";

export default function AddComment() {
  const navigate = useNavigate();

  const { userId } = useParams();
  const contextData = useContext(UserContext);

  const initialFormValues = {
    note: "",
    user: contextData.email,
  };
  const { values, changeHandler } = useForm(initialFormValues);

  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      const response = await requester.post(
        `${urls.recipes}/${userId}/commentary`,
        values
      );
      console.log(response);
      navigate(`/comments/${userId}`);
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  }

  return (
    <section className={styles.body}>
      <article className={styles.wrapper}>
        <div className={styles.title}>Добави Коментар</div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <textarea name="note" onChange={changeHandler} required />
            <label>добави коментар</label>
          </div>
          <div className={styles.field}>
            <input type="submit" value="Добави" />
            <Link to={`/comments/${userId}`}>
              <input
                className={styles.backButton}
                type="button"
                value="Отказ"
              />
            </Link>
          </div>
        </form>
      </article>
    </section>
  );
}
