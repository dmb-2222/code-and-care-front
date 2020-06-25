import React from "react";
import style from "./Auth.module.css";

const Auth = ({hamdleSubmit}) => {
  const submit = (e) => {
    e.preventDefault();
    // if()
    hamdleSubmit();
  };
  return (
    <form onSubmit={submit} className={style.auth}>
      <p>Логин</p>
      <input type="email" name="login" />
      <p>Пароль</p>
      <input type="password" name="pasword" />
      <div>
        <button>Войти</button>
      </div>
    </form>
  );
};

export default Auth;
