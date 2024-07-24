import page404 from "./page404.jpg";
import style from "./Page.404.module.css";
import { Link } from "react-router-dom";

export default function Page404() {
  return (
    <>
      <article className={style.page404}>
        <section className={style.flex}>
        <div className={style.media}>
          <img src={page404} alt="" />
        </div>
        <h1 className={style.h1}>
          Не можахме да намерим страницата, която търсихте. Може да е била
          преместена или просто не съществува!
        </h1>
        </section>
        <Link to="/">
        <button className={style['link-go-home']}>Върнии се на начална страница</button>
        </Link>
      </article>
    </>
  );
}
