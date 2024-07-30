/* eslint-disable react/prop-types */
import style from "./Accessories.module.css";

export default function Accessories({ accessories, getImgHandler }) {
  return (
    <>
      <h2 className={style.title}>Фитнес Аксесоари</h2>
      <section className={style.accessories}>
        {accessories.map((accessory) => (
          <div key={accessory._id} className={style.media}>
            <img className={style.img} src={accessory.imgUrl} alt="img" />
            <button onClick={getImgHandler} id={accessory._id} className={style.buttonBuy}>
              купи
            </button>
          </div>
        ))}
      </section>
    </>
  );
}
