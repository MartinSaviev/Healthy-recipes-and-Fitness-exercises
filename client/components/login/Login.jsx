import styles from './Login.module.css';

export default function Login() {
  return (
    <body className={styles.body}>
      <section className={styles.wrapper}>
        <div className={styles.title}>Влез</div>
        <form className={styles.form}>
          <div className={styles.field}>
            <input type="text" name="username" required />
            <label>Потребителско име</label>
          </div>
          <div className={styles.field}>
            <input type="password" name="password" required />
            <label>Парола</label>
          </div>
          <div className={styles.content}></div>
          <div className={styles.field}>
            <input type="submit" value="Влез" />
          </div>
        </form>
      </section>
    </body>
  );
}
