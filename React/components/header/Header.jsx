import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <section className={styles.logo}>
      <div className={styles.media}>
        <img className={styles.img} src="./images/fitness-logo.jpg" alt="" />
      </div>

      <nav className={styles.navigation}>
        <ul>
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
          <li>
            <NavLink to="/logout" className={({ isActive }) =>
                `${styles.logout} ${
                  isActive ? styles.active : styles.inactive
                }`
              }>
              Излез
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.avatar}>
        <img className={styles.img} src="./images/avatar.jpg" alt="" />
        <h3>Потребителско име</h3>
      </div>
    </section>
  );
}
