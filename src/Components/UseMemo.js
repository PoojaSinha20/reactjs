import React, { useMemo, useState } from "react";

function UserMemo(){
    const [count,setCount]=useState(0);
    const [name,setName]=useState("");
    const calulatedValue=useMemo(()=> bigCalculation(count),[count]);
    // const calulatedValue=bigCalculation(count);
    return(
        <div>
            <h1>UseMemo</h1>
            {"calculated value is"+calulatedValue}
            {"count is"+count}
            <input onChange={(e)=>{setName(e.target.value)}}></input>
            <button onClick={()=>{setCount((c)=>c+1)}}>increment count</button>
        </div>
    )
}

function bigCalculation(num){
    console.log("calculation function called");
    for(let i=0;i<10;i++){
        num=num+1;
    }
    return num;
}

export default UserMemo;