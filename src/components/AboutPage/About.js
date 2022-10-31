import React from "react";
import Education from "../HomePage/Education";
import Experience from "../HomePage/Experience";
import Resume from "../HomePage/Resume";
import Skills from "../HomePage/Skills";
import loader from "../../img/loader.gif";
import Breadcrumb from "../Breadcrumb";

const About = () => {
  return (
    <div className="about_page">
      <Breadcrumb title="About Me" page="About" />
      <div>
        <h5 className="txt">
          My Skills <img src={loader} alt="" className="loader" />{" "}
        </h5>
        <Skills />
      </div>

      <div className="uk-margin-large-top">
        <h5 className="txt">
          My Experience <img src={loader} alt="" className="loader" />{" "}
        </h5>
        <Experience />
      </div>

      <div className="uk-margin-large-top">
        <h5 className="txt">
          My Education <img src={loader} alt="" className="loader" />{" "}
        </h5>
        <Education />
      </div>

      <div className="uk-margin-large-top">
        <h5 className="txt">
          My Resume <img src={loader} alt="" className="loader" />{" "}
        </h5>
        <Resume />
      </div>
    </div>
  );
};

export default About;
