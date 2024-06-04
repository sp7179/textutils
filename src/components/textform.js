import React, { useState } from 'react'


export default function Textform(props) {
    const handlerightClick = ()=>{
        let newText = text.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
        setText(newText);
        
    }
    const handleleftClick = ()=>{
        let newtext = text.toLowerCase().replace(/\b\w/g, s => s.toLowerCase());
        setText(newtext);
        
    }
    const handlecopy = ()=>{
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showaltert("copied to clipboard", "Success");
    }
        
    const handledownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
      props.showaltert("converted to lowercase", "Success");
    }
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
       
    }
    const handlextraspaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showaltert("Extra spaces removed", "Success");
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
       
    }

    const [text, setText] = useState('Enter text here');
    return(
<div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>      
    <h1>{props.heading} </h1> 
    <div class ="container my-3">
    <textarea class="form-control" value={text} style={{backgroundColor: props.mode === 'dark' ? '#B1AAB5' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    </div>
    <button  className='btn btn-success mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-success mx-2 my-2' onClick={handleleftClick}>Convert to sentence case</button>
    <button className='btn btn-success mx-2 my-2' onClick={handlecopy}>Copy</button>
    <button className='btn btn-success mx-2 my-2' onClick={handlextraspaces}>Xspace</button>
    <button className='btn btn-success mx-2 my-2' onClick={handlerightClick}>Convert to titlecase</button>
    <button className='btn btn-success mx-2 my-2' onClick={handledownClick}>Convert to Lowercase</button>
    <button className='btn btn-success mx-2 my-2' onClick={handleOnChange}>Clear</button>

    <h4 >Preview</h4>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
</div>


    )
}