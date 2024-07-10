import React, { useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { ValuesReducer, initialState } from "./Reducer";

function LoginPage(){
    // var count=0;

    // const [counter,setCounter] = useState(0);
    const [userName,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    const [values,dispatch]=useReducer(ValuesReducer,initialState);

    useEffect(()=>{
            console.log(values);
    },[])


    function checkLogin(){
        if(userName === values.userName){
            if(password === values.password){
                    alert("Login Success")
                    navigate("/homepage")
            }else{
                alert("password is not matching with registration page")
            }
        }else{
            alert("UserName is not matching with registration page")
        }
    }

    return(
        <div>
            <NavBar/>
        <div style={{display:"grid",placeContent:"center"}}>
            <h1>LoginPage</h1>
            <label>UserName</label>
            <input type="text" value={userName} onChange={(e)=>{setUsername(e.target.value)}}></input>
            <label>Password</label>
            <input type="password" value={password} 
            onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button onClick={()=>{checkLogin()}}>LOGIN</button>
            {/* <button onClick={()=>count=count+1}>updateCount</button>
            count is : {count}
            <button onClick={()=>setCounter((count)=>count+1)}>updateCounter</button>
            counter is : {counter} */}
        </div>
        </div>
    )
}

export default LoginPage;