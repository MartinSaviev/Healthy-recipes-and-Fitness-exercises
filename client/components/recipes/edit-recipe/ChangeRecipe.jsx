import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../src/context/AuthContext";

import * as recipeRequest from "../../../src/api/recipeRequest";
import * as requester from "../../../src/api/requester";

import styles from "./ChangeRecipe.module.css";
import { urls } from "../../../public/allUrls/urls";

export default function CreateRecipe() {

  const userData = useContext(UserContext);
  let navigate = useNavigate();
  let { userId } = useParams();

  const [values, setValues] = useState({
    name: "",
    img: "",
    user: userData.email,
    ingredients: "",
    steps: "",
  });

  async function sendRecipes(ev) {
    ev.preventDefault();
    await recipeRequest.put(userId, values);
    navigate("/Recipes");
    
  }

  useEffect(() => {
    (async () => {
      const data = await requester.get(`${urls.recipes}/${userId}`);
      setValues({
        ...data,
        ingredients: data.ingredients.join(", "), 
      });
    })();
  }, [userId,values]);

  function changeHandler(ev) {
    ev.target.name;
    setValues((oldValues) => ({
      ...oldValues,
      [ev.target.name]: ev.target.value,
    }));
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
                required />
              <label>Изображение (URL)</label>
            </div>
            <div className={styles.field}>
              <textarea 
                name="ingredients" 
                onChange={changeHandler} 
                value={values.ingredients}
                required />
              <label>Съставки (разделени със запетая)</label>
            </div>
            <div className={styles.field}>
              <textarea 
                name="steps" 
                onChange={changeHandler} 
                value={values.steps}
                required />
              <label>Стъпки</label>
            </div>
            <div className={styles.field}>
              <input 
                onClick={sendRecipes} 
                type="submit" 
                value="Промени" />
            </div>
          </form>
        </article>
      </section>
    </>
  );
}
