import React from 'react';
import style from './Dialogs.module.scss';
import DialogsItem from "./dialogsItem/DialogsItem";
import Message from './message/Message';

export default function Dialogs(props) {
  
  const usersList = props.users.map((item, index)=><DialogsItem name={item.name} id={index+1} key={`userN_${index}`}/>);

  return (
    <div className={style.dialogs_container}>
      <div className={style.users_container}>
        {usersList}
      </div>
      
      <Message messages={props.messages}/>
    </div>
  )
}