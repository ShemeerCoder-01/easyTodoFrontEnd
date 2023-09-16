import React from 'react'
import { motion } from 'framer-motion';
import { FaEdit, FaTimes } from 'react-icons/fa';
import './style.css';
import Tooltip from '@mui/material/Tooltip';

function Todo({todo,setFlag,setCurrTodo,deleteItem,delay}) {
    return (
        <motion.div initial={{ opacity: 0, y: 50 }} transition={{ duration: 1, delay: delay }} whileInView={{ opacity: 1, y: 0 }} key={todo._id} className='item' style={{color:todo.priority === "notStarted"?"red":todo.priority === "inProgress"?"orange":"green"}}>
            <Tooltip title="TaskName" placement='top'>
            <p>{todo.taskName}</p>
            </Tooltip>
            <Tooltip title="Deadline" placement='top'>
            <p>{todo.date}</p>
            </Tooltip>
            <div className='icons'>
                <Tooltip title="Edit" placement='top'>
                <span onClick={() => {
                    setFlag(true);
                    setCurrTodo(todo);
                }} className='icon'><FaEdit /></span>
                </Tooltip>
                <Tooltip title="Delete" placement='top'>
                <span className='icon' onClick={() => deleteItem(todo._id)}><FaTimes /></span>
                </Tooltip>
            </div>
        </motion.div>
    )
}

export default Todo;