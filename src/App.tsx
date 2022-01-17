import { useRef, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<Login />}/>
      <Route  path='/home/*' element={<Home />}/>
    </Routes>
    </BrowserRouter>
  </>
);
}

export default App;
