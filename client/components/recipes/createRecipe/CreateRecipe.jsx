import style from './CreateRecipe.module.css'; // Adjust the import according to your actual stylesheet

export default function CreateRecipe (){

  return (
    <>
    <section className={style.backgroundImg}>
    <div className={style.formContainer}>
      <h2 className={style.h2}>Добави нова рецепта</h2>
      { <p className={style.error}></p>}
      { <p className={style.success}></p>}
      <form  className={style.recipeForm}>
        <div className={style.formGroup}>
          <label>Име:</label>
          <input type="text" name="name"   required />
        </div>
        <div className={style.formGroup}>
          <label>Изображение (URL):</label>
          <input type="text" name="img"   required />
        </div>  
        <div className={style.formGroup}>
          <label>Съставки (разделени със запетая):</label>
          <textarea  name="ingredients"   required />
        </div>
        <div className={style.formGroup}>
          <label>Стъпки (разделени с точка):</label>
          <textarea name="steps"   required />
        </div>
        <button type="submit" className={style.submitButton}>Добави рецепта</button>
      </form>
    </div>
    </section>
    </>
  );
}