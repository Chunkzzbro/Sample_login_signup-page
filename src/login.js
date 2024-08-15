import React, { useEffect, useState } from "react";
import "./login.css";
export default function Login({ toggleForm }) {
  const [enterClass, setEnterClass] = useState("login-enter");

  useEffect(() => {
    setTimeout(() => setEnterClass("login-enter-active"), 10);
  }, []);

  return (
    <div className={`login ${enterClass}`}>
      <div id="leftsection">
        <h1 id="Login_txt">
          <b>Welcome back!</b>
        </h1>
      </div>
      <div id="rightsection">
        <div className="logindetails">
          <h2>Sign In</h2>
          <br></br>
          <div className="social-login-buttons">
            <button type="button" class="google-sign-in-button">
              Continue with Google
            </button>
            <button type="button" class="facebook-sign-in-button">
              Continue with Facebook
            </button>
          </div>
          <div id="or">
            <p>-OR-</p>
          </div>
          <form className="details">
            <div className="Email">
              <input type="email"></input>
              <div id="EmailText">
                <p>Email</p>
              </div>
            </div>
            <br></br>
            <div className="Password">
              <input type="Password"></input>
              <div id="PasswordText">
                <p>Password</p>
              </div>
            </div>
            <br></br>
            <div className="Submit">
              <button type="button" class="submit-button">
                Sign in
              </button>
            </div>
          </form>
          <br></br>
          <div id="forgotPassword">
            <div id="LogintoRegister">
              <p>
                Don't have an account?{" "}
                <span className="link" onClick={toggleForm}>
                  Sign Up
                </span>
              </p>
            </div>
            <div>
              <a href="#" id="forgot">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
