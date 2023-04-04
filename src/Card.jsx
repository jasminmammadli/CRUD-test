import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom'
import Modal from './Modal'
import { useState } from 'react'
import TextArea from './TextArea'
function Card(props) {
    const [modal,setModal]=useState(false)
    const [area,setArea]=useState(false)
    const [text,setText]=useState(props.company.catchPhrase)
    const openModal=()=>setModal(true)
    const closeModal=()=>setModal(!modal)
    const openArea=()=>setArea(true)
    const closeArea=()=>setArea(!area)
    
    
  return (
    <div className='card'>
        <div>
            <span>{props.index+1}---</span>
            <span>{text}</span>
        </div>
        <div>
            <Link to={`/post/${props.id}`}><button style={{padding:"10px 20px",backgroundColor:"blue", color:"#fff"}}>Detay</button></Link>
            <button onClick={openArea} style={{padding:"10px 20px",backgroundColor:"red", color:"#fff"}}>Duzenle</button>
            <button onClick={openModal} style={{padding:"10px 20px",backgroundColor:"green", color:"#fff"}}>Sil</button>
            {
                modal ? <Modal delete={props.delete} save={closeModal} /> :null
            }
            {
                area ? <TextArea closeArea={closeArea} text={text} setText={setText} /> : null
            }
            
        </div>
        
    </div>
  )
}

export default Card