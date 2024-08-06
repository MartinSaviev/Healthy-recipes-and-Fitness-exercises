import style from "./ShoppingCart.module.css";
import { IoMdClose } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { cartContext } from "../cartContext/AccessoriesContext";
import { useContext, useState } from "react";
import Checkout from "./checkout/Checkout";

export default function ShoppingCart() {
  const { cart, clearIncrementItemCount, removeItemFromCart, incrementItemCount, decrementItemCount } = useContext(cartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  function clearCheckoutHandler() {
    clearIncrementItemCount(0);
    setShowCheckout(true); 
  }

  function removeItemShoppingCartHandler(ev) {
     removeItemFromCart(ev.currentTarget.id);
  }

  function addItemHandler(ev) {
    incrementItemCount(ev.currentTarget.id);
  }

  function removeItemHandler(ev) {
    decrementItemCount(ev.currentTarget.id);
  }

  return (
    <>
      {showCheckout ? (
        <Checkout setShowCheckout={setShowCheckout} />
      ) : (
        <section className={style.shoppingCart}>
          <header className={style.title}>Количка</header>

          {cart.length === 0 ? (
            <p className={style.emptyBag}>Вашата кошница е празна</p>
          ) : (
            cart.map((acc) => (
              <article key={acc._id} className={style.item}>
                <div className={style.buttons}>
                  <button id={acc._id} onClick={removeItemShoppingCartHandler} className={style.deleteBtn}>
                    <IoMdClose />
                  </button>
                </div>
                <div className={style.image}>
                  <img src={acc.imgUrl} alt="продукт" />
                </div>
                <div className={style.description}>
                  <span className={style.brand}>{acc.header}</span>
                </div>
                <div className={style.quantity}>
                  <button id={acc._id} onClick={removeItemHandler} className={style.minusBtn} type="button">
                    <GrFormSubtract className={style.icon} />
                  </button>
                  <input
                    className={style.input}
                    type="text"
                    value={acc.quantity}
                    readOnly
                  />
                  <button id={acc._id} onClick={addItemHandler} className={style.plusBtn} type="button">
                    <IoIosAdd className={style.icon} />
                  </button>
                </div>
                <span className={style.totalPrice}>
                  {Number(acc.price * acc.quantity)} лв.
                </span>
              </article>
            ))
          )}

          <button
            onClick={clearCheckoutHandler}
            className={style.checkoutBtn}
            type="button"
          >
            Поръчай
          </button>
        </section>
      )}
    </>
  );
}
