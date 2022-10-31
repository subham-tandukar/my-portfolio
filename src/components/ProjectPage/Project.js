import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb";
import loader from "../../img/loader.gif";
import project1 from "../../img/project1.png";
import project2 from "../../img/project2.png";
import project3 from "../../img/project3.png";
import project4 from "../../img/project4.png";
import project5 from "../../img/project5.png";
import project6 from "../../img/project6.png";

const project = [
  {
    id: 1,
    img: project1,
    title: "Easy Software",
    link: "/easy-software",
  },
  {
    id: 2,
    img: project2,
    title: "Cooperative",
    link: "/cooperative",
  },
  {
    id: 3,
    img: project3,
    title: "Ecommerce",
    link: "/ecommerce",
  },
  {
    id: 4,
    img: project4,
    title: "Hami Chhimeki",
    link: "/hami-chhimeki",
  },
  {
    id: 5,
    img: project5,
    title: "Tapriza School",
    link: "/tapriza-school",
  },
  {
    id: 6,
    img: project6,
    title: "NGO",
    link: "/ngo",
  },
];

const Project = () => {
  return (
    <div className="project_page">
      <Breadcrumb title="My Projects" page="Projects" />
      <div>
        <h5 className="txt">
          My Projects <img src={loader} alt="" className="loader" />{" "}
        </h5>

        <div className="project-wrapper">
          <div className="uk-container uk-container-expand">
            <div
              className="uk-grid uk-child-width-1-3@l uk-child-width-1-2@s"
              uk-scrollspy="cls: uk-animation-slide-bottom; target: .wrapper;  delay: 300; repeat: false"
            >
              {project.map((props) => {
                const { id, img, title, link } = props;
                return (
                  <div className="wrapper" key={id}>
                    <div className="project-content">
                      <Link to={link}>
                        <img src={img} alt="" />
                        <span>{title}</span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
