
import style from "./Recipes.module.css";
import { useRequest } from "../custom Hook/allRecipesGetRequest.js";

// eslint-disable-next-line react/prop-types
export default function Method({ id }) {
 
  const method = Object.values(useRequest(id,'steps'))

  return (
    <article className={style.method}>
      <h4>Начин на приготване</h4>

      <p>{method}</p>
    </article>
  );
}
