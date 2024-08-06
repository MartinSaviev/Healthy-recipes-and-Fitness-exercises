import VideoAndRecipesPicks from "../videoAndRecipesPicks/VideoAndRecipesPicks";
import style from "./HealthyAndFitness.module.css";
export default function HealthyAndFitness() {
  return (
    <>
      <div className={style.media}>
        <img
          className={style.img}
          src="./images/Healthy-lifestyle-tips.jpeg"
          alt=""
        />
        <img  className={style.imgFitness} src="./images/fitness.jpg" alt="" />
      <h1 className={style.text}>Видео тренировки и Здравословно хранене</h1>
      </div>
      <VideoAndRecipesPicks/>
    </>
  );
}
