import React from 'react';
import { Link } from "react-router-dom";

function Student(props)
{
    var name=props.name;
    var id=props.id;
    var cgpa=props.cgpa;
  

    return (
        <div> 
              <Link to={"/studentdetails/"+ name+"/"+ id+"/"+ cgpa}>

       <p><b>Name :</b> {props.name}<br/></p>
       </Link>

       <b>Id :</b> {props.id}<br/>

       <b>Cgpa :</b> {props.cgpa}

    </div>
    )
}
export default Student;