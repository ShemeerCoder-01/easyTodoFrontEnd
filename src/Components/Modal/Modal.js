import React, { useState } from 'react';
import './Modal.css';
import axios from 'axios';

function Modal({ setFlag, setTodoArr, TodoArr, currTodo,setCurrTodo ,currUser}) {
    const [taskName, setTaskName] = useState(currTodo?.taskName || '');
    const [priority, setPriority] = useState(currTodo?.priority || '');
    const [date, setDate] = useState(currTodo?.date || '');
    const [msg,setMsg] = useState('');


    // edit function edits priority and re render the component
    async function editFnc() {

        if (taskName === '' || priority === '' || date === '') {
            setMsg("Please fill all the fields before clicking the Edit Task button.");
            return;
        }
        else if (taskName.length > 12) {
            setMsg("TaskName should be at max 12 characters only.");
            return;
        }
        
        try{
            const _id = currTodo._id;
            const userEmail = sessionStorage.getItem('user');
            const updatedObj = {_id,taskName,priority,date};
            const response = await axios.put(`${process.env.BASE_URL}/todo/todos`,updatedObj,{params:{userEmail}});
            setTodoArr(response.data.data);
            setTaskName('');
            setDate('');
            setPriority('');
        }catch(e){
            console.log("Error is : ",e);
        }
        
            setFlag(false);
            setCurrTodo('');


    }


    // this function adds new ele to the array after conditional checks
    async function clickHandler() {
        if (taskName === '' || priority === '' || date === '') {
            setMsg("Please fill all the fields before clicking the Add Task button");
            return;
        }
        else if (taskName.length > 12) {
            setMsg("TaskName should be at max 12 characters only.");
            return;
        }

        try{
            const todoObj = {taskName,priority,date,email:currUser};
            const response = await axios.post(`${process.env.BASE_URL}/todo/addTodo`,todoObj);
            console.log("response is : ",response);
            setTodoArr(response.data.data);
            setFlag(false);

        }catch(e){
            console.log("error is : ",e);
        }
        
            
        
    }


    return (
        <div className='main'>
            <div className='inputArea'>
                <div className='header'>
                    <h1 className='heading'>To-Do</h1>
                    <i onClick={() => setFlag(false)} className='fa fa-times'></i>
                </div>
                <div className='form'>

                    <input onChange={(e) => setTaskName(e.target.value)} type='text' placeholder='Task Name*' />
                    <select style={{color:"#212121"}} onChange={(e) => setPriority(e.target.value)}>
                        <option value=''>Priority</option>
                        <option value='notStarted'>Not Started</option>
                        <option value='inProgress'>In Progress</option>
                        <option value='Completed'>Completed</option>
                    </select>
                    <input onChange={(e) => setDate(e.target.value)} type='date' />
                    <div className='errorMsg'>{msg}</div>
                    <div className='btns'>
                        <button onClick={clickHandler}>Add Task</button>
                        <button onClick={editFnc}>Edit Task</button>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Modal;




