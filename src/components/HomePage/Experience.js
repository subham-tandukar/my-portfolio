import React from "react";
import loader from "../../img/loader.gif";
import aptech from "../../img/aptech.png";
import easy from "../../img/easy.png";
import genesis from "../../img/genesis.png";

const Experience = () => {
  return (
    <>
      <div id="experience" className="uk-container   experience">
        <div>
          <h5 className="txt">
            Experience <img src={loader} alt="" className="loader" />{" "}
          </h5>
        </div>

        <div
          className="uk-grid uk-grid-match uk-child-width-1-1@l uk-margin-medium-top uk-flex-center"
          data-uk-grid
        >
          <div>
            <div
              className="uk-flex uk-flex-middle wrapper"
              uk-scrollspy="cls: uk-animation-slide-left; repeat: false"
            >
              <div className="exp-logo">
                <a
                  href="https://www.aptechlalitpur.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={aptech} alt="img" />
                </a>
                <h4>Aptech</h4>
                <span>Oct 2021 - Dec 2021</span>
              </div>

              <div className="uk-width-expand">
                <div className="exp-info">
                  <h3>Web Designing</h3>
                  <p>
                    Successfully completed the Web Designing and Hosting Course
                    from Aptech Computer Education Pvt. Ltd. and able to convert
                    my UI Design into pixel perfect Responsive HTML5/CSS3.
                    <br /> <br /> I approached each task with a strong focus on
                    user experience and ensured that the designs were not only
                    visually appealing but also intuitive and user-friendly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div
              className="uk-flex uk-flex-middle wrapper"
              uk-scrollspy="cls: uk-animation-slide-right; repeat: false"
            >
              <div className="exp-logo">
                <a
                  href="https://easysoftware.com.np/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={easy} alt="img" />
                </a>
                <h4>Easy Software</h4>
                <span>April 2022 - June 2023</span>
              </div>

              <div className="uk-width-expand">
                <div className="exp-info">
                  <h3>React Web Developer</h3>
                  <p>
                    During my tenure, I had the opportunity to contribute my
                    skills as a UI/UX Designer in developing and maintaining an
                    admin panel based on CRUD (Create, Read, Update, Delete)
                    application. My responsibilities included designing and
                    implementing front-end solutions using various technologies
                    such as HTML5, CSS, JavaScript, and other frameworks.
                    <br /> <br />
                    Throughout this experience, I honed my skills in UI/UX
                    design, front-end development, and project management, while
                    consistently delivering high-quality work within tight
                    deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="uk-width-1-1">
            <div
              className="uk-flex uk-flex-middle wrapper"
              uk-scrollspy="cls: uk-animation-slide-right; repeat: false"
            >
              <div className="exp-logo">
                <a
                  href="https://www.genesiswtech.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={genesis} alt="img" />
                </a>
                <h4>Genesis Web Technology</h4>
                <span>July 2023 - present</span>
              </div>

              <div className="uk-width-expand">
                <div className="exp-info">
                  <h3>Frontend Web Developer</h3>
                  <p>
                    I am currently working as a Frontend Developer at a company
                    specializing in WordPress development. My role involves
                    creating and maintaining user interfaces for WordPress-based
                    projects using HTML, CSS, and JavaScript. I collaborate with
                    a diverse team to ensure high-quality, visually appealing,
                    and user-friendly websites and web applications. I am
                    passionate about staying updated with the latest frontend
                    trends and technologies within the WordPress ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
