import React from "react";
import logo from "../../img/logo1.png"; // Импортируем картики
import style from './Header.module.scss';

function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt="logo"></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
