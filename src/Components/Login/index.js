/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import IconBar from '../IconBar';

function Login() {
    const [loading,setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleForm = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            if(email && password){
                if(password.length<6 || password.length>16){
                    // setMsg('Password should be 6 to 16 characters long');
                }
                else{
                    const userData = {email,password};
                    const response = await axios.post(`https://easytodo-y84a.onrender.com/user/login`,userData);
                    // const response = await axios.post(`http://localhost:8001/user/login`,userData);
                    console.log(response);
                    if(response.status === 200){
                        localStorage.setItem('user',email);
                        localStorage.setItem('token',response.data);
                        navigate('/Home');
                    }
                }
            }
            
        } catch (e) {
            console.log(e);
            if(e.response.status === 403){
                navigate('/');
            }
            if(e.response.data.Error && Object.keys(e.response.data.Error).length !== 0){
                // setMsg(e.response.data?.Error?.details[0]?.message);
            }
            else{
                // setMsg(e.response.data.message);
            }
            
        }
        setLoading(false);
    }

    




  return (
    <div className="form-container sign-in">
            <form onSubmit={handleForm}>
                <h1>Sign In</h1>
                <IconBar/>
                <span>Or use your email password</span>
                <input type="email" placeholder="email" onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="password" onChange={e => setPassword(e.target.value)}/>
                <a href="#">Forget Your Password?</a>
                <button type='submit' disabled={loading}>Sign In</button>
            </form>
        </div>
  )
}

export default Login