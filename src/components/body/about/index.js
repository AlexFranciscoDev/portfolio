import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hi, my name is
         <br /> <span className="info-name hover-underline-animation">Alex Francisco Tinaya</span>.
         <br /> Web Developer
        </div>
        <div className="about-photo">
          <img 
            src={require("../../../assets/web_dev.png")}
            className="picture"
          />
        </div>
      </div>
    </div>
  );
}

export default About;