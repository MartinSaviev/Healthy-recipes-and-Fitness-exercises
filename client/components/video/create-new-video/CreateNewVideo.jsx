import styles from "./CreateNewVideo.module.css";
import backgroundVideo from "./backgroundVideo.mp4";

export default function CreateNewVideo() {
  return (
    <div className={styles.body}>
      <video className={styles.video} src={backgroundVideo} type="video/mp4" autoPlay loop muted></video>
      <div className={styles.wrapper}>
        <div className={styles.title}>Create New Video</div>
        <form className={styles.form}>
          <div className={styles.field}>
            <input type="text" name="name" required />
            <label>Име</label>
          </div>
          <div className={styles.field}>
            <input type="text" name="img" required />
            <label>Изображение (URL)</label>
          </div>
          <div className={styles['submit-btn-container']}>
            <input type="submit" className={styles['submit-btn']} value="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
