import React from "react";
import "./body.css";
import About from "./about/index";
import Projects from "./projects/index";
import Skills from "./skills/index";
import Education from "./education/index";
import Work from "./work/index";
import Contact from "./contact/index";
import Description from "./description/index";

function Body() {
  return (
  <div className="body">
    <section id="about">
      <About />
    </section>
    <section id="description">
      <Description/>
    </section>
    <section id="projects">
      <Projects />
    </section>
    <section id="skills">
      <Skills />
    </section>
    <section id="education">
      <Education/>
    </section>
    <section id="work">
      <Work />
    </section>
    <section id="contact">
      <Contact />
    </section>
  </div>
  );
}

export default Body;