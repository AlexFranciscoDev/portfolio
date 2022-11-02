import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web/index";


function Header() {
  const [isOpen, setIsOpen]=useState(false);
  return (
    <div className="header">
      <div className="logo">AlexFranciscoDev</div>
      <div className="menu">
        <div className="web-menu">
          <Web />
        </div>
        <div className="mobile-menu">
          <div onClick={()=>setIsOpen(!isOpen)}>
            <i class="fi-rr-apps menu-icon"></i>
          </div>
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
      <div>
        <button className="goTop"><a href="#top-page"><i class="fi fi-rr-arrow-up"></i></a></button>
      </div>
    </div>
  );
}

export default Header;