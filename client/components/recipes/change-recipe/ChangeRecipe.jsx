import { useState } from "react";
import styles from "./ChangeRecipe.module.css";
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

  function changeHandler(ev) {
    ev.target.name;
    setRecipe((oldValues) => ({
      ...oldValues,
      [ev.target.name]:ev.target.value
    }));
  }
  
  console.log(recipe);
  return (
    <body className={styles.body}>
      <section className={styles.wrapper}>
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
      </section>
    </body>
  );
}
