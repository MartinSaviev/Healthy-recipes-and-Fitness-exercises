import styles from "./Register.module.css";

export default function Register() {
  return (
    <body className={styles.body}>
      <section className={styles.wrapper}>
        <div className={styles.title}>Регистрация</div>
        <form className={styles.register}>
          <div className={styles.field}>
            <input type="text" required />
            <label>Електронна поща</label>
          </div>
          <div className={styles.field}>
            <input type="password" required />
            <label>Парола</label>
          </div>
          <div className={styles.field}>
            <input type="password" required />
            <label>Повтори парола</label>
          </div>
          <div className={styles.content}>
          </div>
          <div className={styles.field}>
            <input type="submit" value="Регистрация" />
          </div>
        </form>
      </section>
    </body>
  );
}
