import React from 'react'
import Card from './Card';
import axios from "axios"
import { useState,useEffect } from 'react';
import {nanoid} from "nanoid"
function MainData() {
    const [totalData,setTotalData]=useState([])
    function deleteInfo(id){
        const filteredDeleteInfo=totalData.filter(item=>{
            return item.id!==id
            
        })
        setTotalData(filteredDeleteInfo)
    }
    useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/users")
    .then(response=>setTotalData(response.data))
  },[])
  return (
    <div>
        {
        totalData.map((item,index)=><Card {...item} index={index} key={nanoid()} delete={()=>deleteInfo(item.id)}/>)
      }
    </div>
  )
}

export default MainData