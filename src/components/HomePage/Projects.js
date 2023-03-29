import React from "react";
import loader from "../../img/loader.gif";
import easyOffice from "../../img/easyOffice.png";
import htdrl from "../../img/htdrl.png";
import cooperative from "../../img/cooperative.png";
import ecommerce from "../../img/ecommerce.png";
import landingPage from "../../img/landingPage.png";
import taprizaSchool from "../../img/taprizaSchool.png";
import OGM from "../../img/OGM.png";
import dayaFoundation from "../../img/dayaFoundation.png";
import adminPanel from "../../img/adminPanel.png";
import react from "../../img/react.png";
import tashi from "../../img/tashi.png";
import { GoGlobe } from "react-icons/go";
import { BsGithub } from "react-icons/bs";
import api from "../../img/api.png";
import db from "../../img/db.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import sass from "../../img/sass.png";
import js from "../../img/js.png";
import mui from "../../img/mui.png";
import php from "../../img/php.png";

const project = [
  {
    id: 7,
    img: htdrl,
    title: "Library App",
    desc: "I have created a full-stack web application using the MERN (MongoDB, Express.js, React.js, and Node.js) stack. The application includes user authentication with email verification using OTP code and CRUD (Create, Read, Update, Delete) functionality for managing books.",
    web: "https://htdrl.netlify.app/",
    git: "https://github.com/subham-tandukar/BookApp-Client",
    icon: (
      <div>
        <img className="project-icon" src={react} alt="" uk-tooltip="React" />
        <img className="project-icon" src={html} alt="" uk-tooltip="HTML" />
        <img className="project-icon" src={sass} alt="" uk-tooltip="Sass" />
        <img
          className="project-icon"
          src={api}
          alt=""
          uk-tooltip="API Integration"
        />
        <img className="project-icon" src={db} alt="" uk-tooltip="Mongo DB" />
        <img
          className="project-icon"
          src={mui}
          alt=""
          uk-tooltip="Material UI"
        />
      </div>
    ),
  },
  {
    id: 3,
    img: ecommerce,
    title: "Ecommerce",
    desc: "Simple user authentication and login to ecommerce website created using HTML, CSS, and JavaScript",
    web: "https://subham-tandukar.github.io/ecommerce/",
    git: "https://github.com/subham-tandukar/ecommerce",
    icon: (
      <div>
        <img className="project-icon" src={html} alt="" uk-tooltip="HTML" />
        <img className="project-icon" src={css} alt="" uk-tooltip="Css" />
        <img className="project-icon" src={js} alt="" uk-tooltip="Javascript" />
      </div>
    ),
  },
  {
    id: 6,
    img: adminPanel,
    title: "Admin Panel",
    desc: "An admin panel where you can login with the email admin@gmail.com and password admin. The application allows the user to create, read, update, and delete notes. Additionally, the application features search functionality and filtering options using dropdown menus.",
    web: "https://adminpanel-role-and-permission.netlify.app/",
    git: "https://github.com/subham-tandukar/adminPanel-crudApp",
    icon: (
      <div>
        <img className="project-icon" src={react} alt="" uk-tooltip="React" />
        <img className="project-icon" src={html} alt="" uk-tooltip="HTML" />
        <img className="project-icon" src={sass} alt="" uk-tooltip="Sass" />
        <img
          className="project-icon"
          src={api}
          alt=""
          uk-tooltip="API Integration"
        />
        <img className="project-icon" src={db} alt="" uk-tooltip="Mongo DB" />
      </div>
    ),
  },
  {
    id: 1,
    img: easyOffice,
    title: "Easy Software",
    desc: "Web designed for a software company created using HTML, CSS and JavaScript.",
    web: "https://easysoftware.com.np/",
    git: "https://github.com/subham-tandukar/easy-software",
    icon: (
      <div>
        <img className="project-icon" src={html} alt="" uk-tooltip="HTML" />
        <img className="project-icon" src={css} alt="" uk-tooltip="Css" />
        <img className="project-icon" src={js} alt="" uk-tooltip="Javascript" />
      </div>
    ),
  },

  {
    id: 2,
    img: cooperative,
    title: "Cooperative",
    desc: "Web designed for a cooperative office created using HTML, CSS, JavaScript and Php.",
    web: "http://sundevicoop.com/",
    git: "https://github.com/subham-tandukar/cooperative",
    icon: (
      <div>
        <img className="project-icon" src={html} alt="" uk-tooltip="HTML" />
        <img className="project-icon" src={css} alt="" uk-tooltip="Css" />
        <img className="project-icon" src={js} alt="" uk-tooltip="Javascript" />
        <img className="project-icon" src={php} alt="" uk-tooltip="Php" />
      </div>
    ),
  },

  {
    id: 4,
    img: landingPage,
    title: "Hami Chhimeki",
    desc: "A landing page for a Hami Chhimeki app created using HTML, CSS and JavaScript.",
    web: "http://hamichhimeki.com/",
    git: "https://github.com/subham-tandukar/landing-page",
    icon: (
      <div>
        <img className="project-icon" src={html} alt="" uk-tooltip="HTML" />
        <img className="project-icon" src={sass} alt="" uk-tooltip="Sass" />
        <img className="project-icon" src={js} alt="" uk-tooltip="Javascript" />
      </div>
    ),
  },
  {
    id: 5,
    img: taprizaSchool,
    title: "Tapriza School",
    desc: "Web designed for a school created using HTML, CSS, and JavaScript.",
    web: "https://tapriza-school.netlify.app/",
    git: "https://github.com/subham-tandukar/Tapriza-School",
    icon: (
      <div>
        <img className="project-icon" src={html} alt="" uk-tooltip="HTML" />
        <img className="project-icon" src={css} alt="" uk-tooltip="Css" />
        <img className="project-icon" src={js} alt="" uk-tooltip="Javascript" />
      </div>
    ),
  },
  {
    id: 9,
    img: OGM,
    title: "OM Gyan Mandir School",
    desc: "Web designed for a school created using HTML, CSS, and JavaScript.",
    web: "https://omgyanmandirschool.netlify.app/",
    git: "https://github.com/subham-tandukar/OmGyanMandir",
    icon: (
      <div>
        <img className="project-icon" src={html} alt="" uk-tooltip="HTML" />
        <img className="project-icon" src={css} alt="" uk-tooltip="Css" />
        <img className="project-icon" src={js} alt="" uk-tooltip="Javascript" />
      </div>
    ),
  },
  {
    id: 8,
    img: dayaFoundation,
    title: "NGO Daya Foundation",
    desc: "Web designed for a NGO created using HTML, CSS, and JavaScript.",
    web: "https://ngo-dayafoundation.netlify.app/",
    git: "https://github.com/subham-tandukar/NGO-dayaFoundation",
    icon: (
      <div>
        <img className="project-icon" src={html} alt="" uk-tooltip="HTML" />
        <img className="project-icon" src={css} alt="" uk-tooltip="Css" />
        <img className="project-icon" src={js} alt="" uk-tooltip="Javascript" />
      </div>
    ),
  },
];

const Projects = () => {
  return (
    <>
      <div id="projects" className="uk-container uk-container-expand projects">
        <div>
          <h5 className="txt">
            My Projects <img src={loader} alt="" className="loader" />{" "}
          </h5>
        </div>

        <div className="project-wrapper">
          <div className="uk-container uk-container-expand">
            <div
              className="uk-grid uk-child-width-1-3@l uk-child-width-1-2@s"
              uk-scrollspy="cls: uk-animation-slide-bottom; target: .wrapper;  delay: 300; repeat: false"
            >
              {project.map((props) => {
                const { id, img, title, desc, web, git, icon } = props;
                return (
                  <div className="wrapper" key={id}>
                    <div className="project-content">
                      <div className="project-swiper">
                        <img src={img} alt="" className="project-img" />
                        <div className="project-bg"></div>
                        <div className="project-link">
                          <div className="web" uk-tooltip="title: Website">
                            <a href={web} target="_blank">
                              <GoGlobe color="#03041c" size="2rem" />
                            </a>
                          </div>

                          <div className="git" uk-tooltip="title: Github">
                            <a href={git} target="_blank">
                              <BsGithub color="#03041c" size="2rem" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <h5>{title}</h5>
                      <span>{desc}</span>
                      <div style={{ padding: "1rem" }}>{icon}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
