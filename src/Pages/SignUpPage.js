import React, { useEffect } from 'react'
import SignupForm from '../Components/signupForm'
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/Navbar';


function SignUpPage() {
  const navigate = useNavigate();

  useEffect(()=>{
    const user = localStorage.getItem('user');
    if(user){
      navigate('/Home');
    }

  },[navigate]);
  
  return (
    <div>
      <NavBar/>
      <SignupForm/>
    </div>
  )
}

export default SignUpPage