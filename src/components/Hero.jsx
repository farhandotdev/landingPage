import React from "react";
import heroImg from "../assets/hero_complain.svg";

function Hero() {
  return (
    <div className="heroImgDiv">
      <div className="heroImg">{/* <img src={heroImg} /> */}</div>
      <div className="heroContent">
        <h1>
          GEOCOMPLAIN
          <br />
          Lets make the task of complaint Easier
        </h1>
        {/* <button>Register Complaint</button> */}
        <a id="cubic" href="#">
          <span title="Complaint">Register</span>
        </a>
      </div>
    </div>
  );
}

export default Hero;
