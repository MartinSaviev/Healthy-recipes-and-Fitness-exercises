import styles from './CreateRecipe.module.css';

export default function CreateRecipe() {
  return (
    <body className={styles.body}>
      <section className={styles.wrapper}>
        <div className={styles.title}>Добави нова рецепта</div>
        <form className={styles.form}>
          <div className={styles.field}>
            <input type="text" name="name" required />
            <label>Име</label>
          </div>
          <div className={styles.field}>
            <input type="text" name="img" required />
            <label>Изображение (URL)</label>
          </div>
          <div className={styles.field}>
            <textarea name="ingredients" required />
            <label>Съставки (разделени със запетая)</label>
          </div>
          <div className={styles.field}>
            <textarea name="steps" required />
            <label>Стъпки (разделени с точка)</label>
          </div>
          <div className={styles.field}>
            <input type="submit" value="Добави рецепта" />
          </div>
        </form>
      </section>
    </body>
  );
}
