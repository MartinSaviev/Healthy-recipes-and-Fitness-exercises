/* eslint-disable react/prop-types */
import style from "./Checkout.module.css";
import { Link } from "react-router-dom";

export default function Checkout({setShowCheckout}) {
 
  function cancelHandler() {
    setShowCheckout(false);

  }

  return (
    <article className={style.deleteModal}>
      <h2>Направихте успешна поръчка!</h2>
      <h2>На стойност !</h2>
      <div className={style.buttons}>
        <Link to="/AccessoriesApp">
        </Link>
        <Link to="/">
          <button onClick={cancelHandler} className={style.cancelButton}>Начало</button>
        </Link>
      </div>
    </article>
  );
}
