import React from 'react'
import { useParams } from 'react-router-dom'
import {useEffect,useState} from "react"
import  axios  from 'axios'
import { Link } from 'react-router-dom'
function PostDetail() {
    const[info,setInfo]=useState([])
    const[increaseData,setIncreaseData]=useState(false)
    const[display,setDisplay]=useState("inline-block")
    const paramsId=useParams()
    console.log(paramsId);
    useEffect(()=>{
        axios(`https://jsonplaceholder.typicode.com/users/${paramsId.id}`)
        // .then(response=>console.log(response.data))
        .then(response=>setInfo(response.data))
    },[paramsId.id])
    function addMore(){
      return <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nostrum consequatur architecto eos id autem ipsum excepturi expedita!</p><button onClick={hideData}>Show less</button>
      </div>
    }
    function showData(){
      setIncreaseData(true)
      setDisplay("none")
      addMore()
    }
    function hideData(){
      setIncreaseData(!increaseData)
      setDisplay(!display)
    }
  return (
    <div>
        <Link to='/'><button>GO BACK</button></Link>
        <h1>{info.name}</h1>
        <p>{info.address?.city}</p>
        <ul>
            <li>Username:{info.username}</li>
            <li>Email:{info.email}</li>
            <li>Phone:{info.phone}</li>
            <li>Website:{info.website}</li>
            <li>Company:{info.company?.name}</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ab commodi delectus quisquam explicabo beatae quae eligendi vitae corrupti quo, officiis aliquid? Excepturi, sapiente iusto. Iusto magni obcaecati sunt consequuntur?
        </p>
        {
            increaseData ? addMore() :null
          }
          <button style={{display:display}} onClick={showData}>Show More</button>
    </div>
  )
}

export default PostDetail