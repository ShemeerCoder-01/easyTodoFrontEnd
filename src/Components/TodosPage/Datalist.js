import React from 'react';
import './Datalist.css';
import axios from 'axios';
import Todo from '../Todo';

function Datalist({ setFlag, TodoArr, setTodoArr, setCurrTodo }) {

  const BASE_URL = process.env.BASE_URL;


  // function to delete the selected element 
  async function deleteItem(Id) {
    try {
      const email = sessionStorage.getItem('user');
      const response = await axios.delete(`${BASE_URL}/todo/todos/`, {
        params: {
          todoid: Id,
          email: email
        }
      });
      setTodoArr(response.data.data);
    } catch (e) {
      console.log("Error : ", e);
    }

  }

  return (
    <div className='displayArea'>
      <div className='left'>
        <h1>Not Started</h1>
        <div>
            {TodoArr.map((obj) => {
              if (obj.priority === 'notStarted') {
                return <Todo todo={obj} setFlag={setFlag} setCurrTodo={setCurrTodo} deleteItem={deleteItem} delay={0.25}/>;
              } else {
                return null;
              }
            })}
        </div>
      </div>
      <div className='mid'>
        <h1>In Progress</h1>
        <div>
          {TodoArr.map((obj) => {
            if (obj.priority === 'inProgress') {
              return <Todo todo={obj} setFlag={setFlag} setCurrTodo={setCurrTodo} deleteItem={deleteItem} delay={0.5}/>;
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <div className='right'>
        <h1>Completed</h1>
        <div>
          {TodoArr.map((obj) => {
            if (obj.priority === 'Completed') {
              return <Todo todo={obj} setFlag={setFlag} setCurrTodo={setCurrTodo} deleteItem={deleteItem} delay={0.75}/>;
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Datalist;




