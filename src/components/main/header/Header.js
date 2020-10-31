import React from "react";
import logo from "../../../img/logo/logo2.png"; // Импортируем картики
import style from './Header.module.scss';

function Header(props) {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.logo}>
          <img src={logo} alt={props.logo}></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
