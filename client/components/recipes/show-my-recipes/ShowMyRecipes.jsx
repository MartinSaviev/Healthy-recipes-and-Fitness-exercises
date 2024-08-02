import { useContext, useEffect, useState } from "react";
import style from "./ShowMyRecipes.module.css";
import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";
import { Link } from "react-router-dom";
import { UserContext } from "../../../src/context/AuthContext";

export default function ShowMyRecipes() {
  const userData = useContext(UserContext);
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
      <h2 className={style.title}>Моите Рецепти</h2>
      <section className={style.recipes}>
        {recipes.map((recipe) =>
          recipe.user === userData.email ? (
            <div key={recipe._id} className={style.media}>
              <Link to={`Recipes/${recipe._id}`}>
                <img className={style.img} src={recipe.img} alt="img" />
              </Link>
            </div>
          ):null
        )}
      </section>
    </>
  );
}
