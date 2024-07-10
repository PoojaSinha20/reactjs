import React from "react";

function FirstComponent(props){

    return(
        //html code
        <div>
            <h1>{props.propsName} hello this is my FirstComponent</h1>
            <SecondComponent propsName={props.propsName}/>
        </div>
    )
}

function SecondComponent({propsName}){

    return(
        <div>
            <h1>{propsName} hello this is SecondComponent</h1>
        </div>
    )
}

export default FirstComponent;

