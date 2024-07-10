import React, { createContext, useContext } from "react";

const UserContext=createContext();

function UseContext(){
    var a="hello";
    var b="hi";
    return(
    <UserContext.Provider value={{a,b}}>
        <div>
            <h1>{a} Use Context</h1>
            <Component1/>
        </div>
    </UserContext.Provider>    
    )
}

function Component1(){
    return(
        <div>
            <h1>This is Component 1</h1>
            <Component2 />
        </div>
    )
}

function Component2(){
    return(
        <div>
            <h1>This is Component 2</h1>
            <Component3/>
        </div>
    )
}
function Component3(){
    const values=useContext(UserContext);
    return(
        <div>
            <h1>{values.a} This is Component 3</h1>
        </div>
    )
}

export default UseContext;