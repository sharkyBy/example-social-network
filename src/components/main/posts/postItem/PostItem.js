import React, { useState } from "react";
import style from "./PostItem.module.scss";
import ava1 from "../../../../img/ava/ava1.jpg";
import like from "../../../../img/like.png";
import dislike from "../../../../img/dislike.png";

export default function PostItem(props) {
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDislike] = useState(0);

  const handleClick = (e)=> {
    return (
      e.currentTarget.name === 'like' ? setCountLike(countLike+1): setCountDislike(countDislike+1)
      )
    };
  
  
  return (
    <div className={style.item_container}>
      <div className={style.item_ava}>
        <img src={ava1} alt="ava" />
      </div>

      <p>{props.message}</p>

      <div className={style.like_container}>
        <div>
          <img src={like} alt="like" onClick={handleClick} name='like' />
          <span >{`+${countLike}`}</span>
        </div>
        <div>
          <img src={dislike} alt="dislike" onClick={handleClick} name='dislike' />
          <span>{`-${countDislike}`}</span>
        </div>
      </div>
    </div>
  );
}
