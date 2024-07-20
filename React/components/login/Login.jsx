import styles from "./Login.module.css";

export default function Login() {
  return (
    <body className={styles.body}>
      <section className={styles.wrapper}>
        <div className={styles.title}>Влез</div>
        <form className={styles.login}>
          <div className={styles.field}>
            <input type={styles.text} required="" />
            <label>Потребителско име</label>
          </div>
          <div className={styles.field}>
            <input type={styles.password} required="" />
            <label>Парола</label>
          </div>
          <div className={styles.content}>
          </div>
          <div className={styles.field}>
            <input type="submit" defaultValue="Login" />
          </div>
        </form>
      </section>
    </body>
  );
}
