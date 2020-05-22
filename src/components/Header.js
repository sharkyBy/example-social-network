import React from "react";
import logo from "../img/logo1.png"; // Импортируем картики

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img src={logo} alt="logo"></img>
        </div>
      </div>
    </header>
  );
}

export default Header;
