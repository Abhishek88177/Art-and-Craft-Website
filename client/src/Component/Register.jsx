import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
  const [registration , setRegistration] = useState({
    email : "",
    mobileNo : "",
    password : ""
  }) 

  const {email,mobileNo ,password} = registration;

  const handleOnChange=(e)=>{
      setRegistration({
        ...registration , [e.target.name] : e.target.value
      });
  }

  const customConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
  };

  const submitHandler=(event)=>{
    event.preventDefault();
    console.log(registration)
    axios.post("http://localhost:8090/registration",registration,customConfig).then(function(response){
      console.log(response.data);
    },(error)=>{
      console.log("Error Occured")
      // document.getElementById("errorMessage").innerHTML="Mobile Number Already Exist";
  })
  }

  return (
    <>
      <div className="col-md-12 bg-light pt-3 pb-5">
      <Link className="ms-4 h4" to='/'><i className="fa fa-arrow-left"></i></Link>
        <div className="col-lg-4 col-10 mx-auto border rounded  ">
      
          <h4 className="text-center pt-2" style={{ color: 'rgb(232, 0, 113)' }}>Register</h4>

          <hr />
          <form className="text-center p-3" onSubmit={submitHandler}>

            <div class="form-outline col-md-8 mx-auto mb-4">
              <input type="email" id="form2Example1" class="form-control" placeholder="Email" name="email" value={registration.email} onChange={handleOnChange}/>
              {/* <label class="form-label" for="form2Example1">Email address</label> */}
            </div>

            <div class="form-outline col-md-8 mx-auto mb-4">
              <input type="mobileNo" id="form2Example1" class="form-control" placeholder="Mobile Number" name="mobileNo" value={registration.mobileNo} onChange={handleOnChange}/>
              {/* <label class="form-label" for="form2Example1">Email address</label> */}
            </div>

            <div class="form-outline col-md-8 mx-auto mb-4">
              <input type="password" id="form2Example2" class="form-control" placeholder="Password" name="password" value={registration.password} onChange={handleOnChange}/>
              {/* <label class="form-label" for="form2Example2">Password</label> */}
            </div>


            {/* <div class="row mb-4">
    <div class="col d-flex justify-content-center">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
        <label class="form-check-label" for="form2Example31"> Remember me </label>
      </div>
    </div>

    <div class="col">
      <a href="#!">Forgot password?</a>
    </div>
  </div> */}


            <button type="submit" class="btn btn-block my-4 text-white" style={{ background: 'rgb(232, 0, 113)' }}>Register</button>

            <div class="text-center mb-5">
              <p>Already Member? <Link to='/login'>Login</Link></p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Register;