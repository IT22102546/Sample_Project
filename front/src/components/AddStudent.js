import React from "react";


export default function AddStudent()
{
    return(
    
      <div className="container"> 
        <form>

        <div class="mb-3">
          <label for="name" class="form-label">Enter Student Name</label>
          <input type="text" class="form-control" id="name" /> 
        </div>

        <div class="mb-3">
          <label for="age" class="form-label">Enter Age</label>
          <input type="text" class="form-control" id="age"/>
        </div>

        <div class="mb-3">
          <label for="gender" class="form-label">Enter Gender</label>
          <input type="text" class="form-control" id="gender"/>
        </div>

        <div class="mb-3">
          <label for="mobile" class="form-label">Enter Mobile</label>
          <input type="text" class="form-control" id="mobile"/>
        </div>


        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
          <label class="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>  
    )
}