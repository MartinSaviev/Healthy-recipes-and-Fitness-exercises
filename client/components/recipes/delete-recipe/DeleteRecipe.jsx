import style from "./DeleteRecipe.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";

import requester from "../../../src/api/requester";

export default function DeleteRecipe() {
  let { userId } = useParams();
  let navigate = useNavigate();

  async function deleteRecipeHandler() {
    let response = await requester("DELETE", userId, "");
    
    
    console.log(response);
    if (response) {
      navigate("/recipes");
    }
  }

  return (
    <article className={style.deleteModal}>
      <h2>Изтриване на рецепта!</h2>
      <div className={style.buttons}>
        <Link>
          <button className={style.deleteButton} onClick={deleteRecipeHandler}>
            Изтрий
          </button>
        </Link>
        <Link to="/recipes">
          <button className={style.cancelButton}>Отказ</button>
        </Link>
      </div>
    </article>
  );
}
