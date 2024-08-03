import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";

import { UserContext } from "../../../../src/context/AuthContext";
import * as requester from "../../../../src/api/requester";
import { urls } from "../../../../public/allUrls/urls";

import styles from "./AddComment.module.css";

export default function AddComment() {
  const contextData = useContext(UserContext);
  const [values, setValues] = useState({ note: "", user: contextData.email });
  const { userId } = useParams();

  let navigate = useNavigate();

  function changeValuesHandler(ev) {
    setValues((prevValues) => ({
      ...prevValues,
      [ev.target.name]: ev.target.value,
    }));
  }
  console.log(values);
  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      const response = await requester.post(
        `${urls.recipes}/${userId}/commentary`,
        values
      );
      console.log(response);
      navigate(`/Comments/${userId}`);
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
            <textarea name="note" onChange={changeValuesHandler} required />
            <label>добави коментар</label>
          </div>
          <div className={styles.field}>
            <input type="submit" value="Добави" />
            <Link to={`/Comments/${userId}`}><input className={styles.backButton } type="button" value="Отказ" /></Link>
          </div>
        </form>
      </article>
    </section>
  );
}
