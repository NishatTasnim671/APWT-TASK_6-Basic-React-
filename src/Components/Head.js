import React from "react";
import { Link } from "react-router-dom";
const Head = ()=>
{
    return(
        <div><a href="/">Home </a>
         <Link to="/List">Student Details</Link>
        <a href="/Contact"> Contact</a>
        <a href="/Student"> Student</a>
        </div>
    )
}

export default Head;