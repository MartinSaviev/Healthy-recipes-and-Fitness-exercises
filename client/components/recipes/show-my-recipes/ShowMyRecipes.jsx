import { useContext, useEffect, useState } from "react";
import style from "./ShowMyRecipes.module.css";
import * as requester from "../../../src/api/requester";
import { urls } from "../../../public/allUrls/urls";
import { Link } from "react-router-dom";
import { UserContext } from "../../../src/context/AuthContext";

export default function ShowMyRecipes() {
  const userData = useContext(UserContext);
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    (async () => {
      const data = await requester.get(urls.recipes);
      setRecipes(Object.values(data));
    })();
  }, []);
  
  const userRecipes = recipes.filter(recipe => recipe.user === userData.email);

  return (
    <section className={style.backgroundColor}>
      <h2 className={style.title}>Моите Рецепти</h2>
      <section className={style.recipes}>
        {userRecipes.length > 0 ? (
          userRecipes.map((recipe) => (
            <div key={recipe._id} className={style.media}>
              <Link to={`Recipes/${recipe._id}`}>
                <img className={style.img} src={recipe.img} alt="img" />
              </Link>
            </div>
          ))
        ) : (
          <h3>Нямате още качени рецепти</h3>
        )}
      </section>
      </section>
  );
}
