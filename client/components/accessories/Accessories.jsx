import style from "./Accessories.module.css";

export default function Accessories() {
  return (
      <>
      <h2 className={style.title}>Fitness Accessories</h2>

      <section className={style.accessories}>
        <div className={style.media}>
            <img className={style.img}src='./components/accessories/bench-personal-gallery-1.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/bike-weights-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/cross-personal-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/floor-training-kit-grey.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/kettlebells-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/skillmill-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
       
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/sling-trainer-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/toolsbalance-dome-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/toolsexercise-mat-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/toolsjump-rope-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
      </section>
    </>
  );
}
