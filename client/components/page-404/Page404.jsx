import page404 from "./page404.jpg";
import style from "./Page.404.module.css"


export default function Page404() {
  return (
    <article className={style.page404}>
      <div className={style.media}>
      <img src={page404} alt="" />

      </div>
      <h1 className={style.h1}>
        Не можахме да намерим страницата, която търсихте. Може да е била
        преместена или просто не съществува.
      </h1>
    </article>
  );
}
