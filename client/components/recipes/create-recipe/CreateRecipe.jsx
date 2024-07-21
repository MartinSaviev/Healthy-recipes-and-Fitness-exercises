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
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data);
    navigate("/Recipes");
  }

  function nameHandler(ev) {
    setRecipe((prevName) => ({
      ...prevName,
      name: ev.target.value,
    }));
  }

  function imgHandler(ev) {
    setRecipe((prevImg) => ({
      ...prevImg,
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

  console.log(recipe);
  return (
    <body className={styles.body}>
      <section className={styles.wrapper}>
        <div className={styles.title}>Добави нова рецепта</div>
        <form
          onSubmit={(e) => {
            e.preventDefault;
          }}
          className={styles.form}
        >
          <div className={styles.field}>
            <input type="text" name="name" onChange={nameHandler} />
            <label>Име</label>
          </div>
          <div className={styles.field}>
            <input type="text" name="img" onChange={imgHandler} />
            <label>Изображение (URL)</label>
          </div>
          <div className={styles.field}>
            <textarea name="ingredients" onChange={addIngredientHandler} />
            <label>Съставки (разделени със запетая)</label>
          </div>
          <div className={styles.field}>
            <textarea name="steps" onChange={addStep} />
            <label>Стъпки</label>
          </div>
          <div className={styles.field}>
            <input onClick={sendRecipes} type="submit" value="Добави рецепта" />
          </div>
        </form>
      </section>
    </body>
  );
}
