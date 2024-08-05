import { useRequest } from "../Hooks/allRecipesGetRequest";
import { Link } from "react-router-dom";

import style from "./AllRecipes.module.css";
export default function AllRecipes() {
 
  const recipes = Object.values(useRequest());
 
  return (
    <>
      <h2 className={style.title}>Всички Рецепти</h2>
      <section className={style.recipes}>
        {recipes.map((recipe) => (
          <div key={recipe._id} className={style.media}>
            <Link to={`recipes/${recipe._id}`}><img className={style.img} src={recipe.img} alt="img" /></Link>
          </div>
        ))}
      </section>
    </>
  );
}
