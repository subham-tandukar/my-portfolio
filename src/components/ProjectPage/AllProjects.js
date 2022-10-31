import React from "react";
import Breadcrumb from "../Breadcrumb";
import { GoGlobe } from "react-icons/go";
import { BsGithub } from "react-icons/bs";

const AllProjects = (props) => {
  return (
    <div className="project_details">
      <div>
        <Breadcrumb title="My Projects" page="Projects" />
      </div>

      <div className="uk-padding">
        <div className="uk-container uk-container-expand">
          <div className="uk-grid uk-child-width-1-2@m uk-flex-middle">
            <div>
              <img src={props.img} alt="" />
            </div>

            <div uk-scrollspy="cls: uk-animation-slide-right">
              <h3>{props.title}</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                iusto laborum inventore ex aliquid iste dicta sed nisi eos.
                Maiores labore voluptate aspernatur. Saepe quas sit neque amet
                nemo quos!
              </p>
              <hr />
              <div className="project-link" uk-tooltip="title: Website">
                <a href={props.web} target="_blank">
                  <GoGlobe color="#03041c" size="2rem" />
                </a>
              </div>

              <div className="project-link" uk-tooltip="title: Github">
                <a href={props.git} target="_blank">
                  <BsGithub color="#03041c" size="2rem" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
