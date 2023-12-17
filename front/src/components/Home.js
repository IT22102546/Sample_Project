import React, {useState,useEffect} from "react";
import axios from "axios";

export default function Home()
{
    const [students , setStudents] = useState([]);
    useEffect(()=>{

        function getStudents(){

            axios.get("http://localhost:8070/student/").then((res)=>{
               setStudents(res.data);
               console.log(res.data)
            }).catch((err)=>{
                alert(err.message);
            });
        }

        getStudents();

    },[])

    return(

        <div className="container">
            <h3>Student Management System</h3><br/>
            <div className="container">
                <h5>Student List</h5>
            </div>
          
        </div>
    )
}