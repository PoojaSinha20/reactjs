import React, { useRef } from "react";

function UseRef(){

    const fileRef=useRef();
    const inputRef=useRef();
    return(
        <div>
            <h1>useRef</h1>
            <input type="file" ref={fileRef}></input>
            <input type="text" ref={inputRef}></input>
            <button onClick={()=>{fileRef.current.click()}}>Dummy file Upload</button>
            <button onClick={()=>{inputRef.current.focus()}}>Focus on Input</button>
        </div>
    )
}

export default UseRef;