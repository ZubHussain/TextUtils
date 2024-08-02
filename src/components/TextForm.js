import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("Button was clicked"+text)
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleDownClick = ()=>{
        console.log("Button was clicked"+text)
        let newText = text.toLowerCase();
        setText(newText)
    }
    
    const handleOnChnage = (event)=>{
        console.log("handleOnChnage")
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
  return (
    <>
<div>
    <h2 id='head'>{props.heading}</h2>
<div className="mb-3">
<textarea className="form-control shadow-none" onChange={handleOnChnage} value={text} id="myBox" rows="3"></textarea>
</div>
<button className='btn btn-primary shadow-none mx-2' onClick={handleUpClick}>Convert to UpperCase</button>
<button className='btn btn-primary shadow-none mx-2' onClick={handleDownClick}>Convert to LowerCase</button>
</div>

<div className="container my-3">
    <h3 id='summary'>Text Summary</h3>
    <p id='words'>{text.split(" ").length} words and {text.length} characters</p>
    <h4 id='prev'>Preview</h4>
    <p id='output'>{text}</p>
</div>
    </>
  )
}

