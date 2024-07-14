import './App.css';
import { useState } from 'react'
import BlogDetails from './Components/BlogDetails';
import Nav from './Components/Nav';
import { Outlet } from 'react-router-dom';
import LoginPopup from './Components/Login_Pop_Up/LoginPopup.jsx'


function App() {

  
  return (
    <div className=' flex flex-col'>
      <Nav  />
      <Outlet  />
    </div>
  );
}

export default App;
