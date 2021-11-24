import React from "react";
import { useParams } from "react-router-dom";

function StudentDetail(){
    

    const {name} =useParams();
    const {id} =useParams();
    const {cgpa} =useParams();
    return(
       <div>
            <h1>This is Student Details</h1><br/>
            <h4>Student Name is : {name}</h4>
            <h4>Student ID is : {id}</h4>
            <h4>Student CGPA is : {cgpa}</h4>

        
            </div>
       
    )
}
export default StudentDetail;