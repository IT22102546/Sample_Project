import React,{useState} from "react";



export default function AddStudent()
{

  const [name,setName] = useState("");
  const [age,setAge] = useState("");
  const [gender,setGender] = useState("");
  const [mobile,setMobile] = useState("");


  function sendData(e)
  {
    e.preventDefault();
    
    const newStudent = {

      name,
      age,
      gender,
      mobile

    }

    console.log(newStudent);
  }

    return(
    
      <div className="container"> 
        <form onSubmit={sendData}>

        <div className="mb-3">
          <label htmlFor="name" className="form-label">Enter Student Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter name" onChange={(e)=>{

            setName(e.target.value);

          }}/> 
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">Enter Age</label>
          <input type="text" className="form-control" id="age" placeholder="Enter Age"  onChange={(e)=>{

              setAge(e.target.value);

            }}/>
        </div>

        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Enter Gender</label>
          <input type="text" className="form-control" id="gender" placeholder="Enter Gender" onChange={(e)=>{

              setGender(e.target.value);

            }}/>
        </div>

        <div className="mb-3">
          <label htmlFor="mobile" className="form-label">Enter Mobile</label>
          <input type="text" className="form-control" id="mobile" placeholder="Enter Mobile Number" onChange={(e)=>{

              setMobile(e.target.value);

            }}/>
        </div>


        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      </div>  
    )
}