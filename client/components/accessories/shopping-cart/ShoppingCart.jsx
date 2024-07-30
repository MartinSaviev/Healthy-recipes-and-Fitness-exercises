/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from "./ShoppingCart.module.css";
import { IoMdClose } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { AccContext } from "../../../src/context/AccessoriesContext";
import { useContext, useState } from "react";
import Checkout from './checkout/Checkout'

export default function ShoppingCart() {
  const { cart, clearCart, setItemCount } = useContext(AccContext);
  const [showCheckout, setShowCheckout] = useState(false);

  function clearCheckoutHandler() {
    clearCart();
    setItemCount(0);
    setShowCheckout(true);  // Set state to show Checkout component
  }

  return (
    <>
      {showCheckout ? (
        <Checkout setShowCheckout={setShowCheckout}/>
      ) : (
        <section className={style.shoppingCart}>
          <header className={style.title}>Количка</header>

          {cart.length === 0 ? (
            <p  className={style.emptyBag} >Вашата кошница е празна</p>
          ) : (
            cart.map((acc) => (
              <article key={acc._id} className={style.item}>
                <div className={style.buttons}>
                  <button  className={style.deleteBtn}>
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
                  <button className={style.plusBtn} type="button">
                  <GrFormSubtract className={style.icon}/>
                   
                  </button>
                  <input className={style.input} type="text" defaultValue={1} readOnly />
                  <button className={style.minusBtn} type="button">
                  <IoIosAdd className={style.icon}/>
                  </button>
                </div>
                <span className={style.totalPrice}>{Number(acc.price)} лв.</span>
              </article>
            ))
          )}

          <button onClick={clearCheckoutHandler} className={style.checkoutBtn} type="button">
            Поръчай
          </button>
        </section>
      )}
    </>
  );
}
