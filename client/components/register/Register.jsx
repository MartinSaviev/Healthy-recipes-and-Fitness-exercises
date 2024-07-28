import { useContext, useState } from "react";

import styles from "./Register.module.css";
import  {useNavigate}  from "react-router-dom";
import * as requester from "../../src/api/requester";
import { urls } from "../../public/allUrls/urls";
import { UserContext } from "../../src/context/AuthContext";

export default function Register() {
  const  contextData = useContext(UserContext);

  const navigate = useNavigate()
  const [values, setValues] = useState({

    email: "",
    password: "",
    're-password': "",
    
  });
console.log(values);
  async function register(ev) {
    ev.preventDefault();
    if (values.password !== values['re-password']){
      alert('Password not match')
      return;
    }
    const dataFromServer = await requester.post(urls.register, {email:values.email, password:values.password});
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
        <div className={styles.title}>Регистрация</div>
        <form onSubmit={register} className={styles.register}>
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
            <input
              type="password"
              name="re-password"
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
