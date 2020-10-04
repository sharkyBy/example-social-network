import React from "react";
import style from "./NewPost.module.scss";

import { addPostActionCreator, updatePostActionCreator } from '../../../store';
import { dialogAddUserActionCreator, dialogUpdateUserActionCreator } from '../../../store';

function NewPost(props) {
  // let newPostElement = React.createRef(); 


  let handlerClickSend = ()=> { 
    let choice = window.location.toString().includes("message") ? dialogAddUserActionCreator():
    window.location.toString().includes("profile")? addPostActionCreator(): false ;
     props.dispatch( choice );    
  }

  let handleChange = (e) => {
    // let text1 = newPostElement.current.value;
    let text1 = e.target.value;
    let choice = window.location.toString().includes("message") ? dialogUpdateUserActionCreator(text1):
    window.location.toString().includes("profile") ? updatePostActionCreator(text1):false;
 
    
    // let action = updatePostActionCreator(text1);
    props.dispatch( choice);
    
   
  }
  
  
    let choice = window.location.toString().includes("message") ? props.newUser: 
    window.location.toString().includes("profile") ? props.newPostText: false;
   
    
  
  return (
    <div className={`${style.post_container} ${props.modClassName}`} >
      <h2>{props.title}</h2>
      <div className={style.message}>
        {/* textarea type="text" ref={newPostElement} onChange={handleChange} value={choice}/>  */}
        <textarea type="text"  onChange={handleChange} value={choice}/> 
        <button type="button" onClick={handlerClickSend} style={props.style}>Send</button>
      </div>
    </div>
  );
}

export default NewPost;
