import React from "react";
import style from "./Header.module.css";

const Header = () => (
  <header className={style.header}>
    <div className={style.nav}>
      <span className={style.logo}>Logo Company</span>
      <span className={style.login}>Login</span>
    </div>
  </header>
);
export default Header;
