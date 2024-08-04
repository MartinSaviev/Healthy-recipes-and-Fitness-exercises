
import style from "./Recipes.module.css";

import { useRequest } from "../custom Hook/allRecipesGetRequest";

// eslint-disable-next-line react/prop-types
export default function Ingredients({ id }) {

 const ingredients = Object.values(useRequest(id,'ingredients'));
  
  return (
    <article className={style.ingredients}>
      <h4>Продукти</h4>

      <ol key={id}>
        {ingredients.map((ing, i) => (
          <li key={i}>{ing}</li>
        ))}
      </ol>
    </article>
  );
}
