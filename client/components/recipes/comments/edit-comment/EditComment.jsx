import { useEffect } from "react";
import styles from "./EditComment.module.css";

import { useNavigate, useParams } from "react-router-dom";
import * as requester from "../../../../src/api/requester";
import { urls } from "../../../../public/allUrls/urls";
import { useForm } from "../../Hooks/useForm";
export default function EditComment() {
  const { recipeCommentsId, commentId } = useParams();

  const initialFormValues = {
    user: "",
    note: "",
    _id: "",
  }

  const {values,setValues,changeHandler} = useForm(initialFormValues);
  const navigate = useNavigate();
  
  useEffect(() => {
    (async () => {
      const commentFromServer = await requester.get(
        `${urls.recipes}/${recipeCommentsId}/commentary/${commentId}`
      );
      setValues(commentFromServer);
    })();
  }, [commentId, recipeCommentsId,setValues]);

  async function sendComment(ev,method) {
    ev.preventDefault();
    if (method === "post") {
      await requester.put(
        `${urls.recipes}/${recipeCommentsId}/commentary/${commentId}`,
        values
      );
    }

    navigate(`/Comments/${recipeCommentsId}`);
  }

  return (
    <div className={styles.body}>
      <div className={styles.wrapper}>
        <div className={styles.title}>Промени Коментар</div>
        <form
          className={styles.form}
          onSubmit={(ev) => {
            ev.preventDefault();
          }}
        >
          <div className={styles.field}>
            <textarea
              type="text"
              name="note"
              onChange={changeHandler}
              value={values.note}
              required
            />
            <label>Коментар</label>
          </div>
          <div className={styles["submit-btn-container"]}>
            <input
              type="submit"
              onClick={(ev) => sendComment(ev,"post")}
              className={styles.submitBtn}
              value="Промени"
            />
            <input
              type="button"
              onClick={(ev) => sendComment(ev,"back")}
              className={styles.backBtn}
              value="Отказ"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
