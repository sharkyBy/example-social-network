import React from "react";
import style from "./PostItem.module.scss";
import ava1 from "../../../../img/ava/ava1.jpg";
import like from "../../../../img/like.png";
import dislike from "../../../../img/dislike.png";

export default function PostItem(props) {
  
  
  return (
    <div className={style.item_container}>
      <div className={style.item_ava}>
        <img src={ava1} alt="ava" />
      </div>

      <p>{props.message}</p>

      <div className={style.like_container}>
        <div>
          <img src={like} alt="like" name='like' />
          <span > {props.like !==0 ?`+${props.like}`: `${props.like}`} </span>
        </div>
        <div>
          <img src={dislike} alt="dislike" name='dislike' />
          <span> {props.dislike !==0 ?`-${props.dislike}`: `${props.dislike}`} </span>
        </div>
      </div>
    </div>
  );
}
