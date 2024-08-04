import { useEffect, useState } from "react";

import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";

import style from "./Recipes.module.css";

// eslint-disable-next-line react/prop-types
export default function Ingredients({ id }) {
  const [ingredients, setIngredients] = useState([]);
  
  useEffect(() => {
    (async () => {
      const data = await requester.get(`${urls.recipes}/${id}/ingredients`);

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
