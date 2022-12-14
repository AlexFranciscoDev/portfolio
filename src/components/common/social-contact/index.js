import React from "react";
import { SocialData } from "../../data/social";
import "./social-contact.css";
function SocialContact() {
    const data = SocialData;
  return (
    <div className="social-contact">
        {data.map ((item) => {
          return (
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <div className="social-icon-div">
                <img src={item.icon} className="social-icon" width="32"/>
              </div>
            </a>
          );
        })} 
    </div>
  );
}

export default SocialContact;