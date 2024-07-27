import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as recipeRequest  from "../../../src/api/recipeRequest";

import styles from "./ChangeRecipe.module.css";

export default function CreateRecipe() {
  let navigate = useNavigate();
  let {userId} = useParams();

  const [values, setValues] = useState({
    name: "",
    img: "",
    ingredients: "",
    steps: "",
  });

 
  async function sendRecipes(ev) {
    ev.preventDefault();

    await recipeRequest.put(userId,values)

    navigate("/Recipes");
  }

  function changeHandler(ev) {
    ev.target.name;
    setValues((oldValues) => ({
      ...oldValues,
      [ev.target.name]:ev.target.value
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
            <input type="text" name="name" onChange={changeHandler} />
            <label>Име</label>
          </div>
          <div className={styles.field}>
            <input type="text" name="img" onChange={changeHandler} />
            <label>Изображение (URL)</label>
          </div>
          <div className={styles.field}>
            <textarea name="ingredients" onChange={changeHandler} />
            <label>Съставки (разделени със запетая)</label>
          </div>
          <div className={styles.field}>
            <textarea name="steps" onChange={changeHandler} />
            <label>Стъпки</label>
          </div>
          <div className={styles.field}>
            <input onClick={sendRecipes} type="submit" value="Промени" />
          </div>
        </form>
      </article>
    </section>
    </>
  );
}
