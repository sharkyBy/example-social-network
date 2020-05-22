import React from 'react';
import bgd from "../img/bgd.png";
import avatar from "../img/avatar.png";

function Main() {
  return (
    <main className="main">
          <div className="main__container">

            <div className="bgd__container">
              <img src={bgd} alt="bgd" />
            </div>

            <div className="user__container">
              <div className="user__avatar">
                <img src={avatar} alt="avatar" />
              </div>              
            </div>

            <div className="post__container">
              <h2>My post</h2>
              <div className="message">
                <input type="text" value="" />
                <button type='submit'>Send</button> 
              </div>
            </div>

            <div className="posts__container">
              <div>post1</div>
              <div>post2</div>
              <div>post3</div>
              <div>post4</div>
              <div>post5</div>
            </div>

          </div>
        </main>
  )
}

export default Main;