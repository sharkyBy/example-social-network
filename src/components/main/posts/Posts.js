import React from "react";
import style from "./Posts.module.scss";
import PostItem from "./postItem/PostItem";

function Posts(props) {
  return (
    <div className={style.posts_container}>
      <PostItem message="Hi! How are you?" /> 
      <PostItem message="Hi! I am fine" /> 

    </div>
  );
}
export default Posts;