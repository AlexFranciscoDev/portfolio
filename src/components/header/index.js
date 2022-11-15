import React, { useState } from "react";
import "./header.css";
import Mobile from "./mobile";
import Web from "./web/index";
import $ from "jquery";

$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 1) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});


function Header() {
  const [isOpen, setIsOpen]=useState(false);

  return (
    <div className="header sticky">
      <div className="logo"><img src="" alt="logo"/></div>
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