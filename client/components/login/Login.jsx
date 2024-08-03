import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as requester from "../../src/api/requester";
import { urls } from "../../public/allUrls/urls";

import styles from "./Login.module.css";
import { UserContext } from "../../src/context/AuthContext";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ email: "", password: "" });
  
  const  contextData = useContext(UserContext);
  
  async function login(ev) {
    ev.preventDefault();
    const dataFromServer = await requester.post(urls.login, values);
    contextData.changeAuthState(dataFromServer);
    console.log(dataFromServer);
    navigate('/')
  }

  function changeHandler(ev) {
    ev.target.name;
    setValues((oldValues) => ({
      ...oldValues,
      [ev.target.name]: ev.target.value,
    }));
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
