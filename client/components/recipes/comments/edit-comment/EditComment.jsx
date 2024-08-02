import styles from './EditComment.module.css'
export default function EditComment(){

 
    return (
        <div className={styles.body}>
          <div className={styles.wrapper}>
            <div className={styles.title}>Промени Коментар</div>
            <form className={styles.form} >
              <div className={styles.field}>
                <textarea
                  type="text"
                  name="note"
                 
                  required
                />
                <label>Коментар</label>
              </div>
              <div className={styles["submit-btn-container"]}>
                <input
                  type="submit"
                  className={styles["submit-btn"]}
                  value="Промени"
                />
              </div>
            </form>
          </div>
        </div>
      );
}