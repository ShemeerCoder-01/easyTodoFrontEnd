import React from 'react'
import './style.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function SignoutModel({setIsClicked}) {
  const BASE_URL = process.env.BASE_URL;

  const navigate = useNavigate();

  const handleClick = async()=>{
    try{
      const response = await axios.post(`${BASE_URL}/user/logout`);
      console.log(response);
      navigate('/login');
      sessionStorage.removeItem('user');
      setIsClicked(false);
    }catch(e){
      console.log("Error is : ",e);
    }
    
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