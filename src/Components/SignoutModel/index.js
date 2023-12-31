import React from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'


function SignoutModel({setIsClicked}) {

  const navigate = useNavigate();

  const handleClick = ()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  }

  return (
    <div className='logOut'>
        <div style={{display:"flex",justifyContent:"end"}}>
            <i onClick={()=> setIsClicked(false)} className='fa fa-times'></i>
        </div>
        <p>Do you want to log out ?</p>
        <button  onClick={handleClick}className='logOut-btn'>Log Out</button>
    </div>
  )
}

export default SignoutModel