import React from "react";

function Sidebar() {
  return (
    <aside className="aside">
      <nav className="nav">
        <div className="nav__link">
          <a href="#">Profile</a>
        </div>
        <div className="nav__link">
          <a href="#">Messages</a>
        </div>
        <div className="nav__link">
          <a href="#">News</a>
        </div>
        <div className="nav__link">
          <a href="#">Music</a>
        </div>
        <div className="nav__link">
          <a href="#">Settings</a>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar;
