import React from "react";
import style from "./NewPost.module.scss";

function NewPost(props) {
// debugger;
  let newPostElement = React.createRef();

 

  let handlerClickSend = ()=> {    
     props.addPost();     
  }

  let handleChange = () => {
    let text1 = newPostElement.current.value;
    props.updatePost(text1);
    console.log(text1)
   
  }

  return (
    <div className={`${style.post_container} ${props.modClassName}`} >
      <h2>New post</h2>
      <div className={style.message}>
        <textarea type="text" ref={newPostElement} onChange={handleChange} value={props.newPostText}/> 
        <button type="submit" onClick={handlerClickSend} style={props.style}>Send</button>
      </div>
    </div>
  );
}

export default NewPost;
