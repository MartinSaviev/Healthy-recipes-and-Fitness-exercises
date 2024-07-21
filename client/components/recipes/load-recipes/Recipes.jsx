import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import style from "./Recipes.module.css";
import Ingredients from "./Ingredients";
import Method from "./Method";
const url = "http://localhost:3030/jsonstore/recipes";

export default function Recipes() {
  const [recipes, getRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${url}/recipes`);
      const data = await response.json();
      getRecipes(Object.values(data));
      console.log(Object.values(data));
    })();
  }, []);

  return (
    <section className={style["all-recipes"]}>
      <aside className={style.aside}>
        <Link to="/CreateRecipe">
          <button className={style.addRecipe}>Добави нова рецепта</button>
        </Link>
      </aside>
      <hr className={style.hr} />

      {recipes.map((recipe) => (
        <section key={recipe._id} className={style.recipes}>
          <header className={style["recipe-title"]}>
            <h3>{recipe.name}</h3>
          </header>

          <article className={style["media-ingredients"]}>
            <div className={style["media-images"]}>
              <img className={style.images} src={recipe.img} alt="" />

              <section className={style.buttons}>
                <button className={style.like}>Харесай</button>
                <button className={style.edit}>Промени</button>
                <button className={style.delete}>Изтрий</button>
                <button className={style["show-recipe"]}>Покажи Рецепта</button>
              </section>
            </div>

            <Ingredients id={recipe._id} />
          </article>

          <Method id={recipe._id} />
        </section>
      ))}

      <aside className={style.aside}>
        <Link to="/CreateRecipe">
          <button className={style.addRecipe}>Добави нова рецепта</button>
        </Link>
      </aside>
      <hr className={style.hr} />
    </section>
  );
}
