import React from 'react'
import { useState } from 'react'
function TextArea(props) {
    const [newText,setNewText]=useState()
    function change(){
        props.setText(newText)
        props.closeArea()
    }
  return (
    <div  className='textarea'>
        <div><button onClick={props.closeArea}>X</button>
        <div>
            <h3>Title</h3>
            <p>{props.text}</p>
        </div>
        <div>
            <h3>Body</h3>
            <textarea onChange={(e)=>setNewText(e.target.value)}>{newText}</textarea>
        </div>
        <button onClick={change}>Guncelle</button>
        </div>
    </div>
  )
}

export default TextArea