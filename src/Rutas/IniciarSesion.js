import React, {useEffect, useState} from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
import './R.css'
import '../App.css'

function IniciarSesion (props) {

  const [user, setUser] = useState({
    user:"",
    pass:"",
  });

      const handleChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
      };
        return (
            <div className="App-header bg-image">
            <div className="Auth-form">
              <form className="Auth-form">
                <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign In</h3>
                  <div className="input-parent">
                    <label>Email address</label>
                    <input
                    onChange={handleChange}
                      name="user"
                      type="email"
                      className="form-control mt-1"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="input-parent">
                    <label>Password</label>
                    <input
                      onChange={handleChange}
                      name="pass"
                      type="password"
                      className="form-control mt-1"
                      placeholder="Enter password"
                    />
                  
                  </div>
                  
                  
                  <div className="">
                    
                    <button 
                    onChange={handleChange}
                    type="submit" 
                    onClick={handleSubmit} 
                    className="button">
                      Submit
                    </button>
                  </div>
                  <p className="forgot-password text-right mt-2">
                    Forgot <a href="#">password?</a>
                  </p>
                </div>
              </form>
              <br></br>
              <strong>
            <Link className="button" to='/' onClick={<Home/>}>
                volver al Home
            </Link>
            </strong>
             </div>
             </div>
          )
}
export default IniciarSesion;