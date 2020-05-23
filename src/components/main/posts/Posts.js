import React from "react";
import style from "./Posts.module.scss";
import PostItem from "./postItem/PostItem";

function Posts(props) {
//  debugger;
  const postsMap = props.post.map((item) => {
    return (
      <PostItem
        message={item.post}
        like={item.like}
        dislike={item.dislike}
        key={`item_${item.id}`}
      />
    );
  });

  return <div className={style.posts_container}>{postsMap}</div>;
}
export default Posts;
