import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import * as requester from "../../src/api/requester";
import { urls } from "../../public/allUrls/urls";
import { UserContext } from "../../src/context/AuthContext";

import styles from "./Register.module.css";
import { useForm } from "../formHook/useForm";

export default function Register() {
  const contextData = useContext(UserContext);
  const navigate = useNavigate();

const initialFormValues = {
  email: "",
  password: "",
  're-password': "",
}

const {values,changeHandler} = useForm(initialFormValues)

  async function createUser(ev) {
    ev.preventDefault();

    if (!values.email.includes('@')) {
      alert('Въведете правилна електронна поща(email)!');
      return;
    }

    if (values.password !== values['re-password']) {
      alert('Паролите не съвпадат');
      return;
    }
    
    try {
      const dataFromServer = await requester.post(urls.register, { email: values.email, password: values.password });
      contextData.changeAuthState(dataFromServer);
      navigate('/');
    } catch (error) {
      if (error) { 
        alert('Има регистриран потребилтел с тази електронна поща(email)!');
      }
    }
  }

  return (
    <section className={styles.body}>
      <section className={styles.wrapper}>
        <div className={styles.title}>Регистрация</div>
        <form onSubmit={createUser} className={styles.register}>
          <div className={styles.field}>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={changeHandler}
              required
            />
            <label>Електронна поща (email)</label>
          </div>
          <div className={styles.field}>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={changeHandler}
              required
            />
            <label>Парола</label>
          </div>
          <div className={styles.field}>
            <input
              type="password"
              name="re-password"
              value={values['re-password']}
              onChange={changeHandler}
              required
            />
            <label>Повтори парола</label>
          </div>
          <div className={styles.content}></div>
          <div className={styles.field}>
            <input type="submit" value="Регистрация" />
          </div>
        </form>
      </section>
    </section>
  );
}
