import React, { useState } from 'react';
import './style.css';
const coolBackgroundColors = ['#e74c3c', '#3498db',  '#2ecc71',   '#f1c40f',  '#9b59b6',  '#1abc9c',  '#e67e22', '#34495e',  '#e82c0c',  '#27ae60', '#8e44ad', '#16a085', '#f39c12', '#2980b9', '#c0392b',];
const textColors=["#F8F8FF","#0C0C0C"];
const max = coolBackgroundColors.length;
const min = 0;


function NavBar({setIsClicked,currUser,isClicked}) {
  const [bgColor] = useState(coolBackgroundColors[Math.floor(Math.floor(Math.random() * (max - min)) + min)]);
  const [color] = useState(textColors[Math.floor(Math.random()* (textColors.length-min)+min)]);
  return (
    <div className='nav'>
        <h1>easyTodo.</h1>
       {currUser?<div className='signoutDiv' onClick={()=> setIsClicked(!isClicked)} style={{backgroundColor:bgColor}}><button className='signoutBtn' style={{backgroundColor:"inherit",color:color}}>{currUser.charAt(0)}</button></div>:null}
    </div>
  )
}

export default NavBar;