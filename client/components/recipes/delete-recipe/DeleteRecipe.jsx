import { Link, useNavigate, useParams } from "react-router-dom";

import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";

import style from "./DeleteRecipe.module.css";

export default function DeleteRecipe() {
  let { userId } = useParams();
  let navigate = useNavigate();
  console.log(userId);
  async function deleteRecipeHandler() {
    const response = await requester.del(`${urls.recipes}/${userId}`);

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
