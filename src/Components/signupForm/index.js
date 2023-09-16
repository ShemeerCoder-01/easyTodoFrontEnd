import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Loader/index'

function SignupForm() {
    const [loading,setLoading] = useState(false);
    const [userName,setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[msg,setMsg]=useState('');
    const navigate = useNavigate();


    

    const handleForm = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            if(userName && email && password){
                if(userName.length<4 || userName.length>12){
                    setMsg('Username should be 4 to 12 characters long');
                }
                else if(password.length<6 || password.length>16){
                    setMsg('Password should be 6 to 16 characters long');
                }
                else{
                    const userData = {userName,email,password};
                    const response = await axios.post(`https://easytodo-y84a.onrender.com/user/signup`,userData);
                    if(response.status === 201){
                        navigate('/Login');
                    }
                }
            }
            else{
                setMsg('Please fill in all fields!!!');
                return;
            }
        } catch (e) {
            console.log(e);
            if(e.response.data.Error && Object.keys(e.response.data.Error).length !== 0){
                setMsg(e.response.data?.Error?.details[0]?.message);
            }
        }
        setLoading(false);
    }

    if(loading) return <Loader/>;

    return (
        <div className='container' >
            <div className='left-Area'></div>
            <div className='signup'>
                <h1>SignUp Page</h1>
                <div>
                    <form method='post' onSubmit={handleForm}>
                        <input type='text' placeholder='UserName' value={userName} onChange={e=> setUserName(e.target.value)} required/>
                        <input type='email' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} required/>
                        <input type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} required />
                        <div className='msgArea'>{msg}</div>
                        <button className='authbtn' type='submit'>SignUp</button>
                    </form>
                    <div className='loginRedirect'>
                        <p> Already signed up? Click here to <Link className='link' to={'/Login'}>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupForm;