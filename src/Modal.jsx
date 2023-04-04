import React from 'react'

function Modal(props) {
  return (
    <div>
        <h3 style={{color:"red"}}>Silmek istediyine eminsen?</h3>
        <button onClick={props.delete}>He</button>
        <button onClick={props.save}>Yox</button>
    </div>
  )
}

export default Modal