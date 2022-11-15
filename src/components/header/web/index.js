import React from "react";
import './web.css';

function Web() {
  return <div className="web">
    <div className="web-option">
        <a href="#description" >
          About me
        </a>
    </div>
    <div className="web-option">
        <a href="#projects" >
          Projects
        </a>
    </div>
    <div className="web-option">
        <a href="#skills">
        Skills & Languages
        </a>
    </div>
    <div className="web-option">
        <a href="#education">
        Education
        </a>
    </div>
    <div className="web-option">
        <a href="#work">
        Work
        </a>
    </div>
    <div className="web-option">
        <a href="#contact">
        Contact
        </a>
    </div>
  </div>;
}

export default Web;