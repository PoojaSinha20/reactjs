import React, { memo } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar(props){
    console.log("nav bar is getting called"+props.name);
    return(
        <div className="NavBar">
            <Link to="/">MAIN</Link>
            <Link to="/registration">Register</Link>
            <Link to="/login">Login</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/homepage">HomePage</Link>
        </div>
    )
}

export default memo(NavBar);