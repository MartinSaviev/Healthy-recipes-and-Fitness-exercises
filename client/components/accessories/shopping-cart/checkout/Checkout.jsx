/* eslint-disable react/prop-types */
import { useContext } from "react";
import { cartContext } from "../../cartContext/AccessoriesContext";
import style from "./Checkout.module.css";
import { Link } from "react-router-dom";

export default function Checkout({setShowCheckout}) {
  const { totalPrice,clearCart } = useContext(cartContext);
 
  console.log(totalPrice);
  function cancelHandler() {
    setShowCheckout(false);
    clearCart();
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