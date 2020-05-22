import React from "react";
import style from "./NewPost.module.scss";

function NewPost(props) {


  return (
    <div className={style.post_container}>
      <h2>New post</h2>
      <div className={style.message}>
        <input type="text" />
        <button type="submit">Send</button>
      </div>
    </div>
  );
}

export default NewPost;
