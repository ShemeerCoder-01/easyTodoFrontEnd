import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import SignUpPage from './Pages/SignUpPage';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';



function App() {
  
  
  return (
    <div>
     <Routes>
      <Route path='/' element={<SignUpPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/Home' element={<HomePage/>}/>
     </Routes>
    </div>
  );
}

export default App;
