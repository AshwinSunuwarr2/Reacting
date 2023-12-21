// import { clear } from '@testing-library/user-event/dist/clear'
import React, { useState } from 'react'

function FormOne(props) {
  const [text, setText] = useState('')

  const changeText = (event)=>{
    setText(event.target.value)
  }

  const handleUpClick = ()=>{
    console.log('upper btn clicked.')
    let newText = text.toUpperCase()
    setText(newText)
  }

  const handleLoClick = ()=>{
    console.log(' lower btn clicked.')
    let newText = text.toLowerCase()
    setText(newText)
  }

  const handleClearClick = ()=>{
    console.log('clear txt clicked.');
    let clearedTxt = ''
    setText(clearedTxt)
  }
  const handleCopy = ()=>{
    var newText = document.getElementById('myBox')
    newText.select();
    navigator.clipboard.writeText(newText.value)
  }
  const handleRemoveExtraSpace = ()=>{
    let newText  = text.split(/[ ]+/);
    setText(newText.join(' '))
  }
  return (
    <>
      <h1 style={{color: props.mode === 'dark'? 'white':'black'}}>{props.heading}</h1>
        <textarea className="form-control mb-3" rows="8" value={text} id = 'myBox' onChange={changeText} placeholder={'Enter your text'} style={{backgroundColor: props.mode==='dark'? 'grey':'white', color: props.mode==='dark'? 'white':'black'}}></textarea>
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>Conver to Upper Case</button>

      <button className='btn btn-primary mx-1' onClick={handleLoClick}>Conver to Lower Case</button>

      <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear text</button>
      <button className='btn btn-primary mx-1' onClick={handleCopy}>Clear text</button>
      <button className='btn btn-primary mx-1' onClick={handleRemoveExtraSpace}>Remove extra space</button>
      
      <div className='container'  style={{color: props.mode === 'dark'? 'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").length} Minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter in above text area to preview here.'}</p>
      </div>
      </>
  )
}

export default FormOne