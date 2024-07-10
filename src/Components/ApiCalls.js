import axios from "axios";
import React, { useState } from "react";

function ApiCalls(){

    const [apiData,setApiData]=useState();

    async function getData(){
        try{
        var response=await axios.get("https://jsonplaceholder.typicode.com/posts/1");
        setApiData(response.data);
        console.log(response.data.title);
        }
        catch(e){
            
        }
    }
    async function postData(){
        var sendingData=
        {
            "userId": 200,
            "title": "created new entry sucessfully",
            "body": "quia et suscipit\nsuscipit recus"
        }
        try{
        var response=await axios.post("https://jsonplaceholder.typicode.com/posts",sendingData);
        setApiData(response.data);
        console.log(response.data.title);
        }
        catch(e){
            
        }
    }
    async function putData(){
        var sendingData=
        {
            "userId": 299,
            "id":1,
            "title": "updated data sucessfully",
            "body": "quia et suscipit\nsuscipit recus"
        }
        try{
        var response=await axios.put("https://jsonplaceholder.typicode.com/posts/1",sendingData);
        setApiData(response.data);
        console.log(response.data.title);
        }
        catch(e){
            
        }
    }

    async function deleteData(){
       
        try{
        var response=await axios.put("https://jsonplaceholder.typicode.com/posts/1");
        setApiData(response.data);
        console.log(response.data.title);
        }
        catch(e){
            
        }
    }


    return (
        <div>
            <h1>Api Calls</h1>
            {apiData && apiData.title }
            <div>
            <button onClick={()=>{getData()}}>getData</button>
            <button onClick={()=>{postData()}}>postData</button>
            <button onClick={()=>{putData()}}>putData</button>
            <button onClick={()=>{deleteData()}}>deleteData</button>
            </div>
        </div>
    )
}

export default ApiCalls;