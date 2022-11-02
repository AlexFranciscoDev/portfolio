import React from "react";
import Separator from "../../common/separator";
import "./description.css";

function Description() {
  return (
    <div className="projects">
      <Separator />
      <label className="section-title">About me</label>
      <div className="about-photo">
        <img
          src={require("../../../assets/web.png")}
          className="picture"

        />
      </div>
      <div>
        <p>Lorem ipsum</p>
      </div>
    </div>
  );
}

export default Description;