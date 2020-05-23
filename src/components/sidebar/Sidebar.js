import React from "react";
import style from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

function Sidebar(props) { 

  const elem = props.nav.map((item) => {
    return (
      <div className={style.link} key={item.name}>
        <NavLink  to={item.path} activeClassName={style.activeLink}>
          {item.name}
        </NavLink>
      </div>
    );
  });

  return (
    <aside className={style.aside}>
      <nav className={style.nav}>{elem}</nav>
    </aside>
  );
}

export default Sidebar;
