import React from "react";
import Separator from "../../common/separator";
import "./description.css";

function Description() {
  return (
    <div className="description">
      <Separator />
      <label className="section-title">About me</label>
      <div className="description-container">
        <div className="description-photo">
          <img
            src={require("../../../assets/alex.png")}
            className="picture"

          />
        </div>
        <div className="description-text">
          <p>I'm a <b>Web developer</b> who started coding because after finishing the bachelor's degree, i was lost and had no future in mind.</p>
          <p>After a couple websites made with HTML and CSS, i got into the Web development carreer, where i got more in depth into programming, learning languages such as JS, PHP, MySQL, JAVA, etc</p>
          <p>Since then, coding has been one of my greatest passions and i'm constantly learning about this world.</p>
          <p>Currently I'm working as a Frontend Developer creating websites and stores using HTML, CSS, JS and Wordpress as a CMS</p>
        </div>
      </div>
    </div>
  );
}

export default Description;