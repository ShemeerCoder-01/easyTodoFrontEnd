import React from 'react';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AuthPage from './Pages/AuthPage';



function App() {
  
  
  return (
    <div>
     <Routes>
      <Route path='/' element={<AuthPage/>}/>
      <Route path='/Home' element={<HomePage/>}/>
     </Routes>
    </div>
  );
}

export default App;
