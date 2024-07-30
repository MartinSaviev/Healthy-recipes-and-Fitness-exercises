/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import style from "./ShoppingCart.module.css";
import { IoMdClose } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";
import { AccContext } from "../../../src/context/AccessoriesContext";
import { useContext } from "react";

export default function ShoppingCart() {
  const { cart } = useContext(AccContext);

  return (
    <section className={style.shoppingCart}>
      <header className={style.title}>Shopping Bag</header>

      {cart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        cart.map((acc) => (
          <article key={acc._id} className={style.item}>
            <div className={style.buttons}>
              <button className={style.deleteBtn}>
                <IoMdClose />
              </button>
            </div>
            <div className={style.image}>
              <img src={acc.imgUrl} alt="Product 1" />
            </div>
            <div className={style.description}>
              <span className={style.brand}>{acc.header}</span>
              <span className={style.product}>{acc.header}</span>
              <span className={style.color}>White</span>
            </div>
            <div className={style.quantity}>
              <button className={style.plusBtn} type="button">
                <IoIosAdd />
              </button>
              <input type="text" defaultValue={1} readOnly />
              <button className={style.minusBtn} type="button">
                <GrFormSubtract />
              </button>
            </div>
            <span className={style.totalPrice}>{acc.price} lv.</span>
          </article>
        ))
      )}

      <button className={style.checkoutBtn} type="button">
        Checkout
      </button>
    </section>
  );
}
