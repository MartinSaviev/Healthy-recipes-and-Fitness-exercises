import style from "./AllRecipes.module.css";
import { useEffect, useState } from "react";
import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";
import { Link } from "react-router-dom";

export default function AllRecipes() {
  const [recipes, getRecipes] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await requester.get(urls.recipes);
      getRecipes(Object.values(data));
    })();
  }, []);
  console.log(getRecipes);
  return (
    <>
      <h2 className={style.title}>Всички Рецепти</h2>
      <section className={style.recipes}>
        {recipes.map((recipe) => (
          <div key={recipe._id} className={style.media}>
            <Link to={`Recipes/${recipe._id}`}><img className={style.img} src={recipe.img} alt="img" /></Link>
          </div>
        ))}
      </section>
    </>
  );
}
