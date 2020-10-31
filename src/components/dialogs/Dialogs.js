import React from 'react';
import style from './Dialogs.module.scss';
import DialogsItem from "./dialogsItem/DialogsItem";
import Message from './message/Message';
import NewPost from '../profile/newPost/NewPost';


export default function Dialogs(props) {
  let modifiedStyle = {  
    
    color:'rgba(255, 255, 255, .8',
    border:'1px solid rgba(255, 255, 255, .8)',
    
  }

   
  const usersList = props.users.map((item, index)=>{
  return <DialogsItem name={item.name} id={index+1} key={`userN_${index}`}/>
});

  return (
    <div className={style.dialogs_container}>
      <div className={style.users_container}>
        {usersList}
      </div>
      
      <Message messages={props.messages}/>
      <NewPost 
        style={modifiedStyle} 
        modClassName={style.modified} 
        dispatch={props.dispatch}
        newUser={props.newUser}
        title='Add user'
        />
    </div>
  )

}