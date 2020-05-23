import React from 'react';
import bgd from "../../img/bgd.png";
import style from './Main.module.scss';
import NewPost from './newPost/NewPost';
import Posts from './posts/Posts';
import UserInfo from './userInfo/UserInfo';

function Main(props) {
  // debugger;
  return (
    <main className={style.main}>
          <div className={style.main__container}>
            <div className={style.bgd_container}>
              <img src={bgd} alt="bgd" />
            </div>
                        
            <UserInfo />
            <NewPost />
            <Posts post={props.post} />

          </div>
        </main>
  )
}

export default Main;