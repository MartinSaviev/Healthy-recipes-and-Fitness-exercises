import { useState } from "react";
import styles from "./CreateRecipe.module.css";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:3030/jsonstore/recipes/recipes";

export default function CreateRecipe() {
  let navigate = useNavigate();

  const [recipe, setRecipe] = useState({
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
      ...recipe,
      ingredients: recipe.ingredients.split(","),
      steps: recipe.steps,
    }),
  };

  async function sendRecipes(ev) {
    ev.preventDefault();
    try {
      if (
        !recipe.name ||
        !recipe.img ||
        !recipe.ingredients ||
        !recipe.steps ||
        !recipe.img.startsWith("https://")
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

  function nameHandler(ev) {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      name: ev.target.value,
    }));
  }

  function imgHandler(ev) {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      img: ev.target.value,
    }));
  }

  function addIngredientHandler(ev) {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      ingredients: ev.target.value,
    }));
  }

  function addStep(ev) {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      steps: ev.target.value,
    }));
  }

  return (
    <div className={styles.body}>
      <section className={styles.wrapper}>
        <div className={styles.title}>Добави нова рецепта</div>
        <form onSubmit={sendRecipes} className={styles.form}>
          <div className={styles.field}>
            <input type="text" name="name" onChange={nameHandler} required />
            <label>Име</label>
          </div>
          <div className={styles.field}>
            <input type="text" name="img" onChange={imgHandler} required />
            <label>Изображение (URL)</label>
          </div>
          <div className={styles.field}>
            <textarea
              name="ingredients"
              onChange={addIngredientHandler}
              required
            />
            <label>Съставки (разделени със запетая)</label>
          </div>
          <div className={styles.field}>
            <textarea name="steps" onChange={addStep} required />
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
