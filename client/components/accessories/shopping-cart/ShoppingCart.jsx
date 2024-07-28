import style from "./ShoppingCart.module.css";
import { IoMdClose } from "react-icons/io";
import { IoIosAdd } from "react-icons/io";
import { GrFormSubtract } from "react-icons/gr";

export default function ShoppingCart() {

   

  return (
    <section className={style.shoppingCart}>
      <header className={style.title}>Shopping Bag</header>

      <article className={style.item}>
        <div className={style.buttons}>
          <button  className={style.deleteBtn}>
            <IoMdClose />
          </button>
        </div>
        <div className={style.image}>
          <img src="item-1.png" alt="Product 1" />
        </div>
        <div className={style.description}>
          <span className={style.brand}>Common Projects</span>
          <span className={style.product}>Bball High</span>
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
        <span className={style.totalPrice}>549lv</span>
      </article>

      <button className={style.checkoutBtn} type="button">
        Checkout
      </button>
    </section>
  );
}
