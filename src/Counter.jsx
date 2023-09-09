import React,{useState} from "react";
const Counter=()=>{
    const [count,setCount]=useState(0)
    const Increment=()=>{
        setCount(count+1)
    }
    const Decrement=()=>{
        setCount(count-1)
    }
    return(
        
        <div className="counter">
        <h3>The count is:{count}</h3>
        <div>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
        </div>
        </div>
    )
}
export default Counter