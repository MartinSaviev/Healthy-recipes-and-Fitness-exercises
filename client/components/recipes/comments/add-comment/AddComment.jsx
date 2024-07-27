import styles from "./AddComment.module.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import * as  requester from "../../../../src/api/requester";

export default function AddComment() {
  const [values, setValues] = useState({ note: "" });
  const { userId } = useParams();
  
  let navigate = useNavigate();

  function changeValuesHandler(ev) {
    setValues((prevValues) => ({
      ...prevValues,
      [ev.target.name]: ev.target.value,
    }));
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      const response = await requester.post(`recipes/recipes/${userId}/commentary`, values);
      console.log(response);
      navigate(`/Comments/${userId}`)
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
            <textarea name="note" onChange={changeValuesHandler} />
            <label>добави коментар</label>
          </div>
          <div className={styles.field}>
            <input type="submit" value="Добави" />
          </div>
        </form>
      </article>
    </section>
  );
}
