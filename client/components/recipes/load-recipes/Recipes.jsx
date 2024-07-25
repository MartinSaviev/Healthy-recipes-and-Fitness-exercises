import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import style from "./Recipes.module.css";
import Ingredients from "./Ingredients";
import Method from "./Method";

import requester from "../../../src/api/requester";

export default function Recipes() {
  const [recipes, getRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await requester("GET", "", "");

      getRecipes(Object.values(data));
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
                <Link>
                  <button className={style.like}>Харесай</button>
                </Link>
                <Link to={`/ChangeRecipe/${recipe._id}`}>
                  <button className={style.edit}>Промени</button>
                </Link>
                <Link to={`/DeleteRecipe/${recipe._id}`}>
                  <button className={style.delete}>Изтрий</button>
                </Link>
                <Link to={`/Comments/${recipe._id}`}>
                  <button className={style["show-recipe"]}>Коментари</button>
                </Link>
              </section>
            </div>

            <Ingredients id={recipe._id} />
          </article>

          <Method id={recipe._id} />
        </section>
      ))}

      <hr className={style.hr} />
      <aside className={style.aside}>
        <Link to="/CreateRecipe">
          <button className={style.addRecipe}>Добави нова рецепта</button>
        </Link>
      </aside>
    </section>
  );
}
