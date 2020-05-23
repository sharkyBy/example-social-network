import React from 'react';
import style from './DialogsItem.module.scss';
import { NavLink } from 'react-router-dom';

export default function DialogsItem(props) {
  return (    
      
        <div className={style.item}>          
          <NavLink to={`/message/${props.id}`}  activeClassName={style.active}>{props.name}</NavLink> 
        </div>
      
    
    
  )
}