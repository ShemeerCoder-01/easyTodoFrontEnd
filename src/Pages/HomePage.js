import React, { useEffect, useState } from 'react'
import Datalist from '../Components/TodosPage/Datalist'
import Modal from '../Components/Modal/Modal'
import axios from 'axios';
import SignoutModel from '../Components/SignoutModel';
import { useNavigate } from 'react-router-dom';
import NavBar from '../Components/Navbar';
import Loader from '../Components/Loader';
import Footer from '../Components/Footer';


function HomePage() {
  const [flag, setFlag] = useState(false);
  const [isClicked,setIsClicked] = useState(false);
  const [TodoArr,setTodoArr] = useState([]);
  const [currTodo,setCurrTodo] = useState('');
  const [currUser,setCurrUser] = useState('');
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();


  useEffect(()=>{
    const Token = localStorage.getItem('token');
    if(!Token){
      navigate('/login');
    }
    else{
    getData();
    const data = localStorage.getItem('user');
    setCurrUser(data);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[navigate]);

  useEffect(()=>{
    setIsClicked(false);
  },[TodoArr,flag]);
 
  const Token = localStorage.getItem('token');
  const header = {
    'Authorization': 'Bearer '+Token
  }
 

  const getData = async()=>{
    setLoading(true);
    try{
      const email = sessionStorage.getItem('user');
      console.log(email);
      const response = await axios.get(`https://easytodo-y84a.onrender.com/todo/todos`,{headers:header});
      // const response = await axios.get(`http://localhost:8001/todo/todos`,{headers:header});
      setTodoArr(response.data.data);
      
    }catch(e){
      console.log("Error is :",e);
    }
    setLoading(false);
  }

  if(loading) return <Loader/>;
  
  
  return (
    <div>
      <NavBar setIsClicked={setIsClicked} isClicked={isClicked} currUser={currUser} />
      {isClicked?<SignoutModel setIsClicked={setIsClicked}/>:null}
        <button onClick={() => { setFlag(!flag)}} className='btn'>Add Todo</button>
      {flag ? <Modal currTodo={currTodo} setCurrTodo={setCurrTodo} setFlag={setFlag} TodoArr={TodoArr} setTodoArr={setTodoArr} currUser={currUser}></Modal> : null}
      <Datalist setCurrTodo={setCurrTodo} setFlag={setFlag} TodoArr={TodoArr} setTodoArr={setTodoArr}></Datalist>
      <Footer/>
    </div>
  )
}

export default HomePage