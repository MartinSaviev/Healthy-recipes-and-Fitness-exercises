import { useEffect, useState } from "react";
import style from "./Recipes.module.css";

import requester from "../../../src/api/requester";

// eslint-disable-next-line react/prop-types
export default function Ingredients({ id }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await requester("GET", `${id}/ingredients`);

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
