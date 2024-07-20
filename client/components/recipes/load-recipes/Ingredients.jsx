import { useEffect, useState } from "react";
import style from "./Recipes.module.css";

const url = "http://localhost:3030/jsonstore/recipes";

// eslint-disable-next-line react/prop-types
export default function Ingredients({id}) {
   console.log(id);

    const [ingredients, setIngredients] = useState([]);
    
    useEffect(() => {
        (async () => {
      const response = await fetch(`${url}/recipes/${id}/ingredients`);
      const data = await response.json();
      setIngredients(data);
      console.log(data);
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
