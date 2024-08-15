import React, { useEffect, useState } from "react";
import "./reg.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Register({ toggleForm }) {
  const [enterClass, setEnterClass] = useState("register-enter");

  useEffect(() => {
    setTimeout(() => setEnterClass("register-enter-active"), 10);
  }, []);

  return (
    <div className={`register ${enterClass}`}>
      <div id="leftsection2">
        <div className="regdetails">
          <h2>Sign Up</h2>
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
            <div id="name">
              <div className="FirstName">
                <input type="text"></input>
                <div id="FirstNameText">
                  <p>First Name</p>
                </div>
              </div>
              <div className="LastName">
                <input type="text"></input>
                <div id="LastNameText">
                  <p>Last Name</p>
                </div>
              </div>
            </div>
            <br></br>

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
                Create Account
              </button>
            </div>
          </form>
          <br></br>
          <div id="forgotPassword">
            <div id="LogintoRegister">
              <p>
                Don't have an account?{" "}
                <span className="link" onClick={toggleForm}>
                  Sign In
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="rightsection2">
        <h1 id="reg_txt">
          <b>Join the community</b>
        </h1>
        <p id="reg_txt2">Explore, share interests and create new friends</p>
      </div>
    </div>
  );
}
