import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import NoteContext from "../context/NoteContext";

function Login() {

  const {userDetails,loginAsUser} = useContext(NoteContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("Updated user state: ", userDetails);
  // }, [userDetails]);


  const [login , setLogin] = useState({
    mobileNo : "",
    password : ""
  })


  const {mobileNo ,password} = login;

  const handleOnChange=(e)=>{
      setLogin({
        ...login , [e.target.name] : e.target.value
      });
  }


  const submitHandler=(event)=>{
    event.preventDefault();
    axios.get(`http://localhost:8090/login/${login.mobileNo}/${login.password}`).then(function(response){
      console.log("user data"+response.data.id); 
      loginAsUser(response.data)
      navigate("/")

    },(error)=>{
      console.log("Error Occured")
      // document.getElementById("errorMessage").innerHTML="Mobile Number Already Exist";
  })
  }

    return (
      <>
        <div className="col-md-12 bg-light py-5">
        <Link className="ms-4 h4" to='/'><i className="fa fa-arrow-left"></i></Link>

          <div className="col-lg-4 col-10 mx-auto border rounded">
  
  
            <h4 className="text-center pt-2" style={{ color: 'rgb(232, 0, 113)' }}>Login</h4>
  
            <hr />
            <form className="text-center p-3" onSubmit={submitHandler}>
  
              <div class="form-outline col-md-8 mx-auto mb-4">
                <input type="mobileNo" id="form2Example1" class="form-control" placeholder="Mobile Number" name="mobileNo" value={login.mobileNo} onChange={handleOnChange}/>
                {/* <label class="form-label" for="form2Example1">Email address</label> */}
              </div>
  
              <div class="form-outline col-md-8 mx-auto mb-4">
                <input type="password" id="form2Example2" class="form-control" placeholder="Password" name="password" value={login.password} onChange={handleOnChange}/>
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
  
              {/* <Link to='/'> */}
                <button type="submit" class="btn btn-block my-4 text-white" style={{ background: 'rgb(232, 0, 113)' }}>Login</button>
              {/* </Link> */}
              <div class="text-center mb-5">
                
                <p>Not a Member? <Link to='/register'>Register</Link></p>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }
  
  export default Login;