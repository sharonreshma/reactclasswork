import axios from "axios";
import React, { useState } from "react";
export default function ModifyAxios(){
    const[id,setId]=useState('');
    const [name,setName]=useState('');

    const handleId=(event)=>{setId(event.target.value)}
    const handleName=(event)=>{setName(event.target.value)}

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.put(`http://localhost:3001/user/${id}`,{name})
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{console.log("Error occured "+error)})
    }
    return(
        <div>
            <h1>Axios Put</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={id} onChange={handleId}></input>
                <input type="text" value={name} onChange={handleName}></input>
                <button type="submit">update</button>
            </form>
        </div>
    )
}