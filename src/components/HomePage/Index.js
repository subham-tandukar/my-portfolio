import React from "react";
import BgVideo from "./BgVideo";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";
import Resume from "./Resume";
import Skills from "./Skills";

const Index = () => {
  return (
    <>
      <Home />
      <Skills />
      <Experience />
      <BgVideo />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
};

export default Index;
