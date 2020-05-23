import React from "react";
import style from "./Message.module.scss";

export default function Message(props) {
 

  const messages = props.messages.map((item) => (
    <div className={style.message} key={`itemId_${item.id}`}>
      {item.message}
    </div>
  ));
  return (
    <div className={style.message_container}>
      {messages}
    </div>
  );
}
