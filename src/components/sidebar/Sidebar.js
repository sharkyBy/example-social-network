import React from "react";
import style from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

function Sidebar(props) {
  const nav = [
    { name: "Profile", path: "/profile" },
    { name: "Message", path: "/message" },
    { name: "News", path: "/news" },
    { name: "Music", path: "/music" },
    { name: "Setting", path: "/setting" },
  ];

  const elem = nav.map((item) => {
    return (
      <div className={style.link} key={item.name}>
        <NavLink exact to={item.path} activeClassName={style.activeLink}>
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
