import { useState } from "react";
import styles from "./CreateRecipe.module.css";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3030/jsonstore/recipes/recipes";

export default function CreateRecipe() {
  let navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    img: "",
    ingredients: "",
    steps: "",
    videoUrl: "",
  });

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...values,
      ingredients: values.ingredients.split(","),
      steps: values.steps,
    }),
  };

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
      const response = await fetch(url, requestOptions);
      const data = await response.json();
      console.log(data);
      navigate("/Recipes");
    } catch (err) {
      alert(err.message);
    }
  }

  function changeValuesHandler(ev) {
    
    setValues((prevRecipe) => ({
      ...prevRecipe,
      [ev.target.name]: ev.target.value,
    }));
  }

  return (
    <div className={styles.body}>
      <section className={styles.wrapper}>
        <div className={styles.title}>Добави нова рецепта</div>
        <form onSubmit={sendRecipes} className={styles.form}>
          <div className={styles.field}>
            <input type="text" name="name" onChange={changeValuesHandler} required />
            <label>Име</label>
          </div>
          <div className={styles.field}>
            <input type="text" name="img" onChange={changeValuesHandler} required />
            <label>Изображение (URL)</label>
          </div>
          <div className={styles.field}>
            <textarea
              name="ingredients"
              onChange={changeValuesHandler}
              required
            />
            <label>Съставки (разделени със запетая)</label>
          </div>
          <div className={styles.field}>
            <textarea name="steps" onChange={changeValuesHandler} required />
            <label>Стъпки</label>
          </div>
          <div className={styles.field}>
            <input type="submit" value="Добави рецепта" />
          </div>
        </form>
      </section>
    </div>
  );
}
