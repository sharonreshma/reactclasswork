import React, { useState } from 'react';

export default function FormVali() 
{
    const[firstName,setFirstName]=useState("");
    const[error,setError]=useState(false);
    const[lastName,setLastName]=useState("");
    const[lerror,setlError]=useState(false);
    const[gender,setGender]=useState("");
    const[generror,setgError]=useState(false);
    const[dob,setdob]=useState("");
    const[doberror,setdobError]=useState(false);
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(firstName.length == 0)
        {
            setError(true);
        }
        else{
            console.log(firstName);
        }
        if(lastName.length == 0)
        {
            setlError(true);
        }
        else{
            console.log(lastName);
        }
        if(gender==0)
        {
            setgError(true);
        }
        else{
            console.log(gender);
        }
        if(dob==0)
        {
            setdobError(true);
        }
        else{
            console.log(dob);
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                
                <input type='text' onChange={e=>{setFirstName(e.target.value)}} placeholder='first Name'></input> <br></br>
                <input type='text' onChange={e=>{setLastName(e.target.value)}} placeholder='last Name'></input> <br></br>
                <input type='radio' onChange={e=>{setGender(e.target.value)}} ></input>male
                <input type='radio' onChange={e=>{setGender(e.target.value)}} ></input>female <br></br>
                dob
                <input type='date' onChange={e=>{setdob(e.target.value)}} ></input>
                <div>
                    {error && firstName.length ==0 ? <p>enter your firstname</p> : <p></p>}
                    {error && lastName.length ==0 ? <p>enter your lastname</p> : <p></p>}
                    {error && gender ==false ? <p>select gender</p> : <p></p>}
                    {error && gender ==false ? <p>select dob</p> : <p></p>}
                </div>
                <button type='submit'>sub</button>
            </form>
        </div>
    )
}