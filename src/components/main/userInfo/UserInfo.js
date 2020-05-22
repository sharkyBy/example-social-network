import React from "react";
import style from "./UserInfo.module.scss";
import ava from "../../../img/ava/ava.png";

export default function UserInfo(props) {
  return (
    <div className={style.user_container}>
      <div className={style.user_avatar}>
        <img src={ava} alt="avatar" />
      </div>

      <div className={style.user_info}>
        <h3>User Name</h3>
        <p>user information</p>
      </div>
    </div>
  );
}
