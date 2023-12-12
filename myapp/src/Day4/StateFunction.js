import { useState } from "react"
export default function StateFunction()
{
    const[carName,setCarName]=useState("Audi");
    const changeCarName=()=>setCarName("BMW");
    const[count,setCount]=useState(0);
    const changeCount=()=>setCount(count+1)
    const decrCount=()=>setCount(count-1)
    return(
        <div>
            <h1>My car name is {carName}</h1>
            <button onClick={changeCarName}>Click me</button>
            <h1>Count {count}</h1>
            <button onClick={changeCount}>Increement</button>
            <button onClick={decrCount}>Decreement</button>
        </div>
    )
}
