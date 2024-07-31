/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AccContext } from "../../../../src/context/AccessoriesContext";
import style from "./Checkout.module.css";
import { Link } from "react-router-dom";

export default function Checkout({setShowCheckout}) {
  const { totalPrice } = useContext(AccContext);
 
  console.log(totalPrice);
  function cancelHandler() {
    setShowCheckout(false);

  }

  return (
    <article className={style.deleteModal}>
      <h2>Направихте успешна поръчка!</h2>
      <h2>На стойност {totalPrice} лв.</h2>
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
