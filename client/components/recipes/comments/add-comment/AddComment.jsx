import styles from "./AddComment.module.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import requester from "../../../../src/api/requester";

export default function AddComment() {
  const [values, setValues] = useState({ note: "" });
  const { userId } = useParams();

  function changeValuesHandler(ev) {
    setValues((prevValues) => ({
      ...prevValues,
      [ev.target.name]: ev.target.value,
    }));
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      const response = await requester("POST", `${userId}/commentary`, values);
      console.log(response);
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
