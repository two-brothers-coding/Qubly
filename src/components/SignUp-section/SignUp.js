import React from "react";
import "./signUp.scss";
import acc from "../../images/acc.png";
import react from "../../images/react.png";
import air from "../../images/airbnb.png";
import sky from "../../images/sky-4.png";
import gBtn from "../../images/btn_google.png";
function SignUp() {
  return (
    <div className="container">
      <div className="signForm">
        <div className="trustedBy">
          <h3 className="trustedText">
            See why the world’s best companies use Qubly to become truly
            data-driven.
          </h3>
          <div className="trusted">
            <div className="left"></div>
            <h4 className="byLine"> Trusted by </h4>
            <div className="left"></div>
          </div>
          <div className="react-acc">
            <img src={acc} alt="img" />
            <img src={react} alt="img" />
          </div>
          <div className="react-acc">
            <img src={air} alt="img" />
            <img src={sky} alt="img" />
          </div>
        </div>
        <div className="signUp">
          <h2 className="sign">Sign Up</h2>
          <button className="pinkBtn">Start your free trial</button>
          <input
            className="input"
            type="text"
            placeholder="Your primary email"
          />
          <input className="input" type="password" placeholder="Password" />
          <input
            className="input"
            type="password"
            placeholder="Re-type Password"
          />
          <h2 className="or">OR</h2>
          <img className="imgG" src={gBtn} alt="google" />
          <div className="line"></div>
          <h4 className="account">
            Already have an account?
            <a href="#" className="login">
              Login
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
