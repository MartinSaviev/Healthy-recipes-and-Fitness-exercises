import style from "./Accessories.module.css";

export default function Accessories() {

    function buyAccessory() {
        
    }

  return (
      <>
      <h2 className={style.title}>Fitness Accessories</h2>
      <section className={style.accessories}>
        <div className={style.media}>
            <img className={style.img}src='./components/accessories/accessoriesImages/bench-personal-gallery-1.jpg' alt="img" />
            <button onClick={buyAccessory} className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/accessoriesImages/bike-weights-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/accessoriesImages/cross-personal-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/accessoriesImages/floor-training-kit-grey.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/accessoriesImages/kettlebells-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/accessoriesImages/skillmill-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
       
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/accessoriesImages/sling-trainer-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/accessoriesImages/toolsbalance-dome-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/accessoriesImages/toolsexercise-mat-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
        <div className={style.media}>
            <img className={style.img} src='./components/accessories/accessoriesImages/toolsjump-rope-plp.jpg' alt="img" />
            <button className={style.buttonBuy}>buy</button>
        </div>
      </section>
    </>
  );
}
