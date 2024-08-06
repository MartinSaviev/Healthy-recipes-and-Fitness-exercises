import { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../src/context/AuthContext";

import * as recipeRequest from "../../../src/api/recipeRequest";
import * as requester from "../../../src/api/requester";

import { urls } from "../../../public/allUrls/urls";
import { useForm } from "../../formHook/useForm";

import styles from "./ChangeRecipe.module.css";

export default function CreateRecipe() {

  const userData = useContext(UserContext);
  let navigate = useNavigate();
  let { userId } = useParams();

  const initialFormValues = {
    name: "",
    img: "",
    user: userData.email,
    ingredients: "",
    steps: "",
  };

  const { values, changeHandler, setValues } = useForm(initialFormValues);

  useEffect(() => {
    (async () => {
      const data = await requester.get(`${urls.recipes}/${userId}`);
      
      setValues({
        ...data,
        ingredients: data.ingredients.join(", "),
      });
    })();
  }, [userId,setValues]);

  async function sendRecipes(ev) {
    ev.preventDefault();
    await recipeRequest.put(userId, values);
    navigate(`/allRecipes/recipes/${userId}`);
  }

  return (
    <>
      <section className={styles.body}>
        <article className={styles.wrapper}>
          <div className={styles.title}>Промени рецепта</div>
          <form
            onSubmit={(e) => {
              e.preventDefault;
            }}
            className={styles.form}
          >
            <div className={styles.field}>
              <input
                type="text"
                name="name"
                onChange={changeHandler}
                value={values.name}
                required
              />
              <label>Име</label>
            </div>
            <div className={styles.field}>
              <input
                type="text"
                name="img"
                onChange={changeHandler}
                value={values.img}
                required
              />
              <label>Изображение (URL)</label>
            </div>
            <div className={`${styles.field} ${styles.fontSizeTextarea}`}>
              <textarea
                name="ingredients"
                onChange={changeHandler}
                value={values.ingredients}
                required
              />
              <label>Съставки (разделени със запетая)</label>
            </div>
            <div className={`${styles.field} ${styles.fontSizeTextarea}`}>
              <textarea
                name="steps"
                onChange={changeHandler}
                value={values.steps}
                required
              />
              <label>Стъпки</label>
            </div>
            <div className={styles.field}>
              <input onClick={sendRecipes} type="submit" value="Промени" />
              <Link to={`/allRecipes/recipes/${userId}`}>
                <input type="button" value="Отказ" />
              </Link>
            </div>
          </form>
        </article>
      </section>
    </>
  );
}
