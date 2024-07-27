import { Link, useNavigate, useParams } from "react-router-dom";

import style from "./DeleteRecipe.module.css";

import * as requester from "../../../src/api/requester";

const ulr = 'recipes/recipes/';

export default function DeleteRecipe() {
  let { userId } = useParams();
  let navigate = useNavigate();

  async function deleteRecipeHandler() {
    const response = await requester.del(`${ulr}/${userId}`);
    
    if (response) {
        navigate('/recipes')
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
