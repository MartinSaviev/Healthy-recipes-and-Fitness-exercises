import { useContext} from "react";
import { Link, useParams } from "react-router-dom";

import { UserContext } from "../../../src/context/AuthContext";
import { useRequest } from "../custom Hook/allRecipesGetRequest";

import style from "./Recipes.module.css";
import Ingredients from "./Ingredients";
import Method from "./Method";

export default function Recipes() {

  const userData = useContext(UserContext);
  let { userId } = useParams();
  const recipe = useRequest(userId)

  return (
    <>
      {recipe !== 0 ? (
        <section className={style["all-recipes"]}>
          <aside className={style.aside}>
            {userData.accessToken ? (
              <Link to="/createRecipe">
                <button className={style.addRecipe}>Добави нова рецепта</button>
              </Link>
            ) : null}
          </aside>
          <hr className={style.hr} />

          {
            <section key={recipe._id} className={style.recipes}>
              <header className={style["recipe-title"]}>
                <h3>{recipe.name}</h3>
              </header>

              <article className={style["media-ingredients"]}>
                <div className={style["media-images"]}>
                  <h4 className={style.user}>{recipe.user}</h4>
                  <img className={style.images} src={recipe.img} alt="" />

                  <section className={style.buttons}>
                    {userData.email === recipe.user && (
                      <>
                        <Link to={`/changeRecipe/${recipe._id}`}>
                          <button className={style.edit}>Промени</button>
                        </Link>
                        <Link to={`/deleteRecipe/${recipe._id}`}>
                          <button className={style.delete}>Изтрий</button>
                        </Link>
                      </>
                    )}

                    <Link to={`/comments/${recipe._id}`}>
                      <button className={style["show-recipe"]}>
                        Коментари
                      </button>
                    </Link>
                  </section>
                </div>

                <Ingredients id={userId} />
              </article>

              <Method id={userId} />
            </section>
          }

          <hr className={style.hr} />
          <aside className={style.aside}>
            {userData.accessToken ? (
              <Link to="/createRecipe">
                <button className={style.addRecipe}>Добави нова рецепта</button>
              </Link>
            ) : null}
          </aside>
        </section>
      ) : (
        <h3 className={style.noRecipes}>Възникнал е проблем със сървъра!</h3>
      )}
    </>
  );
}
