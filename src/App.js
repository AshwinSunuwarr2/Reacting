// import logo from './logo.svg';
// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextBody from './components/TextBody';
import Alert from './components/Alert';
// import About from './components/About';

import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const alertHandler = (type, message)=>setAlert({
    alertType: type,
    msg: message
  })

  
  setTimeout(()=>{
    setAlert(null)
  }, 1500)

  // setInterval(()=>{
  //   document.title = "this is spam. "
  // }, 2000)

  // setInterval(()=>{
  //   document.title = "Bad UX"
  // }, 1500)
  
  const toggleMode = ()=>{
    // let pickedCol = document.getElementById('')
    if(mode==='light'){

      setMode('dark')
      document.body.style.backgroundColor = '#383a3c'
      // alertHandler('success', 'Enabled dark mode.')
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      // alertHandler('success', 'Disabled dark mode.')
    }
  }
  return (
    <>
      {/* <Router> */}
        <NavBar title='Text Analyzer' mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className='container'>
          <TextBody mode={mode} alertHandler={alertHandler}/>

          {/* <Routes>
            <Route exact path="/about" element={<About/>}/>
            <Route exact path="/" element={<TextBody mode={mode} alertHandler={alertHandler}/>}/>
          </Routes> */}

        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
