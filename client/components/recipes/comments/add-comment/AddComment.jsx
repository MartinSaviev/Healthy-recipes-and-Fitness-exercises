import styles from "./AddComment.module.css";

export default function AddComment() {
  return (
    <section className={styles.body}>
      <article className={styles.wrapper}>
        <div className={styles.title}>Добави Коментар</div>
        <form
          onSubmit={(e) => {
            e.preventDefault;
          }}
          className={styles.form}
        >
          <div className={styles.field}>
            <textarea name="steps" />
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
