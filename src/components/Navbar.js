import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiFacebookFill, RiMenu3Fill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";
import { BsSlashLg } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useState } from "react";

const Navbar = () => {
  // const [reload, setReload] = useState();

  const handleClick = () => {
    document.getElementById("offcanvas-push").setAttribute("bg-close");
  };

  const [activeNavLink, setActiveNavLink] = useState("");

  const handleNavLinkClick = (event) => {
    const clickedNavLink = event.target.getAttribute("data-rr-ui-event-key");
    setActiveNavLink(clickedNavLink);
  };
  return (
    <>
      <header>
        <div className="head uk-grid">
          <div className="head-1 uk-width-expand@s">
            <a href="tel:9869031285">
              {" "}
              <BsFillTelephoneFill color="#03041C" /> 9869031285
            </a>
            <a href="mailto:subhamtndkr9@gmail.com">
              {" "}
              <FaEnvelope color="#03041C" /> subhamtndkr9@gmail.com
            </a>
          </div>

          <div className="head-2 uk-width-1-3@s">
            <a
              href="https://www.facebook.com/subham.tandukar.3/"
              uk-tooltip="title: Facebook"
              target="_blank"
            >
              <RiFacebookFill />
            </a>
            <a
              href="https://www.instagram.com/subham._.tandukar.js/"
              uk-tooltip="title: Instagram"
              target="_blank"
            >
              <GrInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/aniket-tandukar-7b9aaa180/"
              uk-tooltip="title: LinkedIn"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <nav
          className="uk-navbar-container"
          uk-navbar="true"
          uk-sticky="top:300; animation: uk-animation-slide-top;"
        >
          <div className="uk-navbar-left logo uk-flex">
            <FaChevronLeft color="#03041c" size="2rem" />
            <span className="gradient">
              {" "}
              Aniket <br /> Tandukar{" "}
            </span>
            <div>
              <BsSlashLg className="slash" />
              <FaChevronRight color="#03041c" size="2rem" />
            </div>
          </div>

          <div className="uk-navbar-right uk-visible@l">
            <ul className="uk-navbar-nav">
              <li>
                <a
                  href="#home"
                  data-rr-ui-event-key="home"
                  onClick={handleNavLinkClick}
                  className={activeNavLink === "home" ? "active" : ""}
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#skills"
                  data-rr-ui-event-key="skills"
                  onClick={handleNavLinkClick}
                  className={activeNavLink === "skills" ? "active" : ""}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  data-rr-ui-event-key="experience"
                  onClick={handleNavLinkClick}
                  className={activeNavLink === "experience" ? "active" : ""}
                >
                  Experience
                </a>
              </li>

              <li>
                <a
                  href="#projects"
                  data-rr-ui-event-key="projects"
                  onClick={handleNavLinkClick}
                  className={activeNavLink === "projects" ? "active" : ""}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  data-rr-ui-event-key="resume"
                  onClick={handleNavLinkClick}
                  className={activeNavLink === "resume" ? "active" : ""}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  data-rr-ui-event-key="contact"
                  onClick={handleNavLinkClick}
                  className={activeNavLink === "contact" ? "active" : ""}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right uk-hidden@l">
            <button
              className="uk-button uk-button-default uk-margin-small-right hover-btn"
              type="button"
              uk-toggle="target: #offcanvas-push"
            >
              <RiMenu3Fill size="2rem" color="#03041c" />
            </button>
          </div>
        </nav>

        <div
          id="offcanvas-push"
          uk-offcanvas="mode: push; overlay: true;flip: true"
        >
          <div className="uk-offcanvas-bar">
            <button
              className="uk-offcanvas-close"
              type="button"
              uk-close="true"
            ></button>

            <div className="uk-navbar-left logo uk-flex uk-padding-remove">
              <FaChevronLeft color="#fff" size="2rem" />
              <span style={{ color: "#fff" }}>
                {" "}
                Aniket <br /> Tandukar{" "}
              </span>
              <div>
                <BsSlashLg className="slash" color="#fff" />
                <FaChevronRight color="#fff" size="2rem" />
              </div>
            </div>

            <ul className="uk-navbar-nav uk-flex-column">
              <li>
                <a href="#home" onClick={handleClick}>
                  Home
                </a>
              </li>

              <li>
                <a href="#skills" onClick={handleClick}>
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" onClick={handleClick}>
                  Experience
                </a>
              </li>

              <li>
                <a href="#projects" onClick={handleClick}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#resume" onClick={handleClick}>
                  Resume
                </a>
              </li>
              <li>
                <a href="#contact" onClick={handleClick}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
