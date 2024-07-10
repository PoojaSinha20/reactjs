import React, { useEffect, useReducer } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import { ValuesReducer, initialState } from "./Reducer";

function HomePage(){

    const navigate=useNavigate();
    const [values,dispatch]=useReducer(ValuesReducer,initialState);

    var fruitsArray=["apple","banana","pineapple","mango"];

    var fruitsObject={"name" : "apple","color":"red","taste":"sweet"}

    //useEffect ....
    useEffect(()=>{
            console.log("initially rendering in homepage");
    },[])

    return(
        <div>
            <NavBar/>
            <h1>Welcome to HomePage {values.userName}</h1>
            <h1>fruitsArrayNames</h1>
            {fruitsArray.map((name,index)=>{
                    return <div>{name+index}</div>;
            })}
            <h1>fruitsObjectNames</h1>
            {Object.entries(fruitsObject).map((name,index)=>{
                return <div>{name}</div>
            })}
            <button onClick={()=>{navigate("/")}}>Logout</button>
            <Link to="/">logout</Link>
        </div>
    )
}

export default HomePage;