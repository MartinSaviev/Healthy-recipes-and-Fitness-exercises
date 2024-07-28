import { Link, NavLink } from "react-router-dom";

import styles from "./Header.module.css";
import { useContext } from "react";
import { UserContext } from "../../src/context/AuthContext";
import { CiShoppingBasket } from "react-icons/ci";

export default function Header() {
  const contextData = useContext(UserContext);

  return (
    <section className={styles.logo}>
      <div className={styles.media}>
        <img className={styles.img} src="./images/fitness-logo.jpg" alt="" />
      </div>
      <nav className={styles.navigation}>
        <ul>
          {contextData.accessToken === undefined ? (
            <>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${styles.home} ${
                      isActive ? styles.active : styles.inactive
                    }`
                  }
                >
                  Начало
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `${styles.login} ${
                      isActive ? styles.active : styles.inactive
                    }`
                  }
                >
                  Влез
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `${styles.register} ${
                      isActive ? styles.active : styles.inactive
                    }`
                  }
                >
                  Регистрация
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/recipes"
                  className={({ isActive }) =>
                    `${styles.recipes} ${
                      isActive ? styles.active : styles.inactive
                    }`
                  }
                >
                  Рецепти
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/video"
                  className={({ isActive }) =>
                    `${styles.video} ${
                      isActive ? styles.active : styles.inactive
                    }`
                  }
                >
                  Видео
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/accessories"
                  className={({ isActive }) =>
                    `${styles.accessories} ${
                      isActive ? styles.active : styles.inactive
                    }`
                  }
                >
                  Аксесоари
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Logout"
                  className={({ isActive }) =>
                    `${styles.logout} ${
                      isActive ? styles.active : styles.inactive
                    }`
                  }
                >
                  Излез
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
       
       {contextData.accessToken ? <article className={styles.stoppingCart}>
        <p className={styles.count}>0</p>
        <Link to='/ShoppingCart' className={styles.iconStoppingCart}>
          <CiShoppingBasket />
        </Link>
      </article>:null}
      
      <div className={styles.avatar}>
        <img className={styles.img} src="./images/avatar.jpg" alt="" />

        {contextData.email ? <h3>{contextData.email}</h3> : <h3>Guest</h3>}
      </div>
    </section>
  );
}
