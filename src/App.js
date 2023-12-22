// import logo from './logo.svg';
// import { useState } from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextBody from './components/TextBody';
import Alert from './components/Alert';

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
      <NavBar title='Text Analyzer' mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container'>
        <TextBody mode={mode} alertHandler={alertHandler}/>
      </div>
    </>
  );
}

export default App;
