import React, { useState } from 'react'

export default function TextBody(props) {
    const [text, setText] = useState("");
    const showChange = (event)=>{
        setText(event.target.value) 
    }

    const handleUpClick = ()=>{
        setText(text.toUpperCase())
        props.alertHandler('success', 'Converted to upper case.')
    }

    const handleLoClick = ()=>{
        setText(text.toLowerCase())
        props.alertHandler('success', 'Converted to lower case.')
    }

    const handleClearClick = ()=>{
        let newText = ''
        setText(newText)
        props.alertHandler('success', 'Text cleared.')
    }

    const handleCopyClick = ()=>{
        let newText = document.getElementById('myBox')
        newText.select();
        navigator.clipboard.writeText(newText.value)
        props.alertHandler('success', 'Text copied.')
    }

    const handleExtraSpace = ()=>{
        let newText  = text.split(/[ ]+/);
        setText(newText.join(' '))
        props.alertHandler('success', 'Extra space removed.')
    }
  return (
    <>
        {/* <div className="mb-3" style={{backgroundColor: 'grey'}}> */}
            <h2 className='mx-2 my-3' style={{color: props.mode==='dark'? 'white':'black'}}>Enter text below: </h2>
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={showChange} style={{backgroundColor: props.mode==='dark'? '#383a3c': '#e9ecef', color: props.mode==='dark'?'white':'black'}}></textarea>
        {/* </div> */}
        <button type="button" className="btn btn-primary my-3 mx-1" style={{color: props.mode==='dark'? 'white':'black', backgroundColor: props.mode==='dark'?'gray':'#969696', borderWidth: 0}} onClick={handleUpClick}>Convert to Uppercase</button>
        <button type="button" className="btn btn-primary my-3 mx-1" style={{color: props.mode==='dark'? 'white':'black', backgroundColor: props.mode==='dark'?'gray':'#969696', borderWidth: 0}} onClick={handleLoClick}>Convert to Lowercase</button>
        <button type="button" className="btn btn-primary my-3 mx-1" style={{color: props.mode==='dark'? 'white':'black', backgroundColor: props.mode==='dark'?'gray':'#969696', borderWidth: 0}} onClick={handleClearClick}>Clear text</button>
        <button type="button" className="btn btn-primary my-3 mx-1" style={{color: props.mode==='dark'? 'white':'black', backgroundColor: props.mode==='dark'?'gray':'#969696', borderWidth: 0}} onClick={handleCopyClick}>Copy text</button>
        <button type="button" className="btn btn-primary my-3 mx-1" style={{color: props.mode==='dark'? 'white':'black', backgroundColor: props.mode==='dark'?'gray':'#969696', borderWidth: 0}} onClick={handleExtraSpace}>Remove extra space</button>

        {/* <div className='container my-3' style={{backgroundColor: 'grey'}}> */}
            <p style={{color: props.mode==='dark'? 'white':'black'}}>{text.split('').length > 0? text.trim().split(' ').length: 0} Words {text.length} Characters.</p>
            <p style={{color: props.mode==='dark'? 'white':'black'}}>{0.008 * text.length} Minutes read.</p>
            <h3 style={{color: props.mode==='dark'? 'white':'black'}}>Preview</h3>
            <p style={{color: props.mode==='dark'? 'white':'black'}}>{text.length > 0? text :'Enter in above text area to preview here.'}</p>
        {/* </div> */}
    </>
  )
}
