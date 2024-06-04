// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/textform';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [mode, setDarkMode] = useState('dark');

  const [alert, setalert] = useState(null);

  const showaltert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }  

  const toggleMode = () => {
    if (mode === 'light') {
      setDarkMode('dark');
      document.body.style.backgroundColor = '#4C4388';
      showaltert('Dark mode has been enabled', 'Success');
    }
    else {
      setDarkMode('light');
      document.body.style.backgroundColor = 'white';
      showaltert('Light mode has been enabled', 'Success');
    }
  }


  return (
    <>
<Router>
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>

<Alert alert ={alert}/>
  
<div className="container my-3" style={{color: mode === 'dark' ? 'white' : 'black'}}>
  <Routes>
    <Route path="/" element = {<Textform heading="Enter the text to analyze" showaltert={showaltert}  mode={mode}/>}/>
    <Route path="/About" element = {<About mode ={mode}/> }/>
   
    
  </Routes>


</div>
</Router>
    </>
  );
}

export default App;
