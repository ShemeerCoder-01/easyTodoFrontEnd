/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react'
import SignUp from '../Components/SignUp'
import Login from '../Components/Login';

function AuthPage() {
    const [state,setState] = useState(false);

    useEffect(()=>{
        if(state){
            handleSignUp();
        }
        else{
            handleSignIn();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[state]);

    const handleState = () =>{
        setState(prevState => !prevState);
    }
    const handleSignIn = () =>{
        let container = document.getElementById('container');
        if(!state) container.classList.remove('active');    
    }

    const  handleSignUp = () =>{
        let container = document.getElementById('container');
        if(state) container.classList.add('active');
    }
    
  return (
    <div className='wrapper'>
        <div className="container" id="container">
            <SignUp handleState={handleState}/>
            <Login/>
            <div className="toggle-container">
                <div className="toggle">
                    <div className="toggle-panel toggle-left">
                        <h1>Welcome back!</h1>
                        <p>Login using your user credentials.</p>
                        <button className="hidden" id="login" onClick={handleState}>Sign In</button>
                    </div>
                    <div className="toggle-panel toggle-right">
                        <h1>Hello, Friend!</h1>
                        <p>Register with your personal details to create todo's.</p>
                        <button className="hidden" id="register" onClick={handleState}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AuthPage