import React from "react";
import './mobile.css'
function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-option">
        <a href="#description" >
          About me
        </a>
      </div>
      <div className="mobile-option">
        <a href="#projects" >
          Projects
        </a>
      </div>
      <div className="mobile-option">
        <a href="#skills">
          Skills & Languages
        </a>
      </div>
      <div className="mobile-option">
        <a href="#education">
          Education
        </a>
      </div>
      <div className="mobile-option">
        <a href="#work">
          Work
        </a>
      </div>
      <div className="mobile-option">
        <a href="#contact">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Mobile;