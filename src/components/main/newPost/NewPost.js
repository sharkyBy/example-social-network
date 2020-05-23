import React from "react";
import style from "./NewPost.module.scss";

function NewPost(props) {
// debugger;
  let newPostElement = React.createRef();

 

  let addPost = ()=> {
     let text = newPostElement.current.value;
     alert(text);
     
  }

  return (
    <div className={`${style.post_container} ${props.modClassName}`} >
      <h2>New post</h2>
      <div className={style.message}>
        <textarea type="text" ref={newPostElement}/> 
        <button type="submit" onClick={addPost} style={props.style}>Send</button>
      </div>
    </div>
  );
}

export default NewPost;
