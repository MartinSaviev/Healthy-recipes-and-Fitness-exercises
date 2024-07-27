import {Link} from "react-router-dom";

import styles from "./VideoAndRecipesPicks.module.css";

export default function VideoAndRecipesPicks() {
  return (
    <>
      <div className={styles.media}>

        <Link to="/video">
          <img className={styles.video} 
          src="./images/video.webp" 
          alt="video"
          title="Videos" />
          
        </Link>

        <Link to="/recipes">
          <img
            className={styles.recipes}
            src="./images/recipesHome.jpg"
            alt="recipes"
            title="Recipes"
          />
        </Link>
      </div>
    </>
  );
}
