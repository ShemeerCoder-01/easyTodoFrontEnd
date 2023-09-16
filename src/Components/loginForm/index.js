import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Loader';

function LoginForm() {
    const [loading,setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[msg,setMsg]=useState('');
    const navigate = useNavigate();


    

    const handleForm = async (e) => {
        setLoading(true);
        e.preventDefault();
        console.log(process.env.BASE_URL);
        try {
            if(email && password){
                if(password.length<6 || password.length>16){
                    setMsg('Password should be 6 to 16 characters long');
                }
                else{
                    const userData = {email,password};
                    const response = await axios.post(`${process.env.BASE_URL}/user/login`,userData);
                    if(response.status === 200){
                        sessionStorage.setItem('user',email);
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
                setMsg(e.response.data?.Error?.details[0]?.message);
            }
            else{
                setMsg(e.response.data.message);
            }
            
        }
        setLoading(false);
    }

    if(loading) return <Loader/>;


    return (
        <div className='main-container' >
            <div className='left-Area'></div>
            <div className='login'>
                <h1>Login Page</h1>
                <div>
                    <form method='post' onSubmit={handleForm}>
                        <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required/>
                        <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
                        <div className='msgArea'>{msg}</div>
                        <button className='auth-btn' type='submit'>Login</button>
                    </form>
                    <div className='signupRedirect'>
                        <p> Not signed up yet? Click here to <Link className='link' to={'/'}>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm;