/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from 'axios';
import React, { useState } from 'react'
import IconBar from '../IconBar';

function SignUp({handleState}) {
    const [loading,setLoading] = useState(false);
    const [userName,setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForm = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            if(userName && email && password){
                if(userName.length<4 || userName.length>12){
                    // setMsg('Username should be 4 to 12 characters long');
                }
                else if(password.length<6 || password.length>16){
                    // setMsg('Password should be 6 to 16 characters long');
                }
                else{
                    const userData = {userName,email,password};
                    const response = await axios.post(`https://easytodo-y84a.onrender.com/user/signup`,userData);
                    // const response = await axios.post(`http://localhost:8001/user/signup`,userData);
                    console.log(response);
                    if(response.status === 201){
                        handleState();
                    }
                }
            }
            else{
                // setMsg('Please fill in all fields!!!');
                return;
            }
        } catch (e) {
            console.log(e);
            if(e.response.data.Error && Object.keys(e.response.data.Error).length !== 0){
                // setMsg(e.response.data?.Error?.details[0]?.message);
            }
        }
        setLoading(false);
    }


    

  return (
    <div className="form-container sign-up">
    <form onSubmit={handleForm}>
        <h1>Create Account</h1>
        <IconBar/>
        <span>Or use your email for registration</span>
        <input type="text" placeholder="name" onChange={e=> setUserName(e.target.value)}/>
        <input type="email" placeholder="email" onChange={e=> setEmail(e.target.value)}/>
        <input type="password" placeholder="password" onChange={e=> setPassword(e.target.value)}/>
        <button type='submit' disabled={loading}>Sign up</button>
    </form>
</div>
  )
}

export default SignUp