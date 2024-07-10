import React from "react";
import NavBar from "./NavBar";
import { FaFacebook , FaInstagram} from "react-icons/fa";
import { Link } from "react-router-dom";


function ContactPage(){

    return(
        <div>
            <NavBar/>
            <div style={{display:"grid",placeContent:"center"}}>
                <h1>ContactPage</h1>
                <Link to="https://www.facebook.com/BesantTechnologies/"><FaFacebook /></Link>
                <Link to="https://www.instagram.com/besant_technologies/"><FaInstagram/></Link>
            </div>
        </div>
    )
}

export default ContactPage;