import { useContext } from "react";
import styles from "./CreateRecipe.module.css";
import { Link, useNavigate } from "react-router-dom";

import * as recipeRequest from "../../../src/api/recipeRequest";
import { UserContext } from "../../../src/context/AuthContext";
import { useForm } from "../../formHook/useForm";

export default function CreateRecipe() {
  let navigate = useNavigate();

  const userData = useContext(UserContext);

  const initialFormValues = {
    name: "",
    img: "",
    user: userData.email,
    ingredients: "",
    steps: "",
  }
  
  const {values,changeHandler} = useForm(initialFormValues);

  async function sendRecipes(ev) {
    ev.preventDefault();
    try {
      if (
        !values.name ||
        !values.img ||
        !values.ingredients ||
        !values.steps ||
        !values.img.startsWith("https://")
      ) {
        throw new Error(
          "Моля, попълнете всички полета и уверете се, че URL адресът на видеото започва с 'https://' или 'http://'."
        );
      }
      await recipeRequest.post("", values);
      
      navigate("/allRecipes");
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <div className={styles.container}>
      <section className={styles.wrapper}>
        <div className={styles.title}>Добави нова рецепта</div>
        <form onSubmit={sendRecipes} className={styles.form}>
          <div className={styles.field}>
            <input
              type="text"
              name="name"
              onChange={changeHandler}
              required
            />
            <label>Име</label>
          </div>
          <div className={styles.field}>
            <input
              type="text"
              name="img"
              onChange={changeHandler}
              required
            />
            <label>Изображение (URL)</label>
          </div>
          <div className={`${styles.field} ${styles.fontSizeTextarea}`}>
            <textarea
              name="ingredients"
              onChange={changeHandler}
              required
            />
            <label>Съставки (разделени със запетая)</label>
          </div>
          <div className={`${styles.field} ${styles.fontSizeTextarea}`}>
            <textarea name="steps" onChange={changeHandler} required />
            <label>Стъпки</label>
          </div>
          <div className={styles.field}>
            <input type="submit" value="Добави рецепта" />
            <Link to ={'/AllRecipes'}>
              <input type="button" value="Отказ" />
            </Link>
          </div>
        </form>
      </section>
    </div>
  );
}
