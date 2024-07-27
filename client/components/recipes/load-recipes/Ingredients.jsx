import { useEffect, useState } from "react";
import style from "./Recipes.module.css";

import * as requester from "../../../src/api/requester";

const ulr = 'recipes/recipes'

// eslint-disable-next-line react/prop-types
export default function Ingredients({ id }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await requester.get(`${ulr}/${id}/ingredients`);

      setIngredients(data);
    })();
  }, [id]);

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
