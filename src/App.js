import { useState } from 'react';
import './App.css';
// import About from './components/About';
import FormOne from './components/FormOne';
import NavBar from './components/NavBar';

function App() {
  const [mode, setMode] = useState('light')
  const [modeTxt, setModeTxt] = useState('Enable Dark Mode')

  const toggleMode = ()=>{
    if (mode==='light'){
      setMode('dark')
      setModeTxt('Enable Light Mode')
      document.body.style.backgroundColor = 'grey'
    }
    else{
      setMode('light')
      setModeTxt('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
    }
  }
  return (
    <>
      <NavBar title='My app' mode={mode} toggleMode={toggleMode} modeTxt={modeTxt}/>
      <div className='container my-3'>
        <FormOne heading={'Text input Form'} mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
