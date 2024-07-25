import style from "./DeleteRecipe.module.css";
import { Link, useNavigate, useParams } from "react-router-dom";

const ulr = "http://localhost:3030/jsonstore/recipes/recipes/";
export default function DeleteRecipe() {
  let { userId } = useParams();
  let navigate = useNavigate();

  async function deleteRecipeHandler() {
    const response = await fetch(ulr + userId, {
      method: "DELETE",
    });
    if (response.ok) {
        navigate('/recipes')
    }
    console.log(response);
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
