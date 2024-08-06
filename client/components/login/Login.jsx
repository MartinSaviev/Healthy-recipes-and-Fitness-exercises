import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as requester from "../../src/api/requester";
import { urls } from "../../public/allUrls/urls";

import styles from "./Login.module.css";
import { UserContext } from "../../src/context/AuthContext";
import { useForm } from "../formHook/useForm";

export default function Login() {
  const contextData = useContext(UserContext);
  const navigate = useNavigate();

  const initialFormValues = {
    email: "",
    password: "",
  };

  const { values, changeHandler } = useForm(initialFormValues);

  async function login(ev) {
    ev.preventDefault();

    try {
      const dataFromServer = await requester.post(urls.login, values);
      contextData.changeAuthState(dataFromServer);
    } catch (error) {
      alert("Грешен потребител или парола!");
      return;
    }

    navigate("/");
  }

  return (
    <section className={styles.body}>
      <section className={styles.wrapper}>
        <div className={styles.title}>Влез</div>
        <form onSubmit={login} className={styles.form}>
          <div className={styles.field}>
            <input type="text" name="email" onChange={changeHandler} required />
            <label>Електронна поща</label>
          </div>
          <div className={styles.field}>
            <input
              type="password"
              name="password"
              onChange={changeHandler}
              required
            />
            <label>Парола</label>
          </div>
          <div className={styles.field}>
            <input type="submit" value="Влез" />
          </div>
        </form>
      </section>
    </section>
  );
}
