import React, { useContext } from "react";
import loader from "../../img/loader.gif";
import aptech from "../../img/aptech.png";
import easy from "../../img/easy.png";

const Experience = () => {
  return (
    <>
      <div
        id="experience"
        className="uk-container uk-container-expand  experience"
      >
        <div>
          <h5 className="txt">
            Experience <img src={loader} alt="" className="loader" />{" "}
          </h5>
        </div>

        <div className="uk-grid uk-grid-match uk-child-width-1-2@l uk-margin-medium-top">
          <div>
            <div className="uk-flex uk-flex-middle wrapper" uk-scrollspy="cls: uk-animation-slide-left; repeat: false">
              <div className="exp-logo">
                <img src={aptech} alt="img" />
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
            <div className="uk-flex uk-flex-middle wrapper" uk-scrollspy="cls: uk-animation-slide-right; repeat: false">
              <div className="exp-logo">
                <img src={easy} alt="img" />
                <h4>Easy Software</h4>
                <span>April 2022 - present</span>
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
        </div>
      </div>
    </>
  );
};

export default Experience;
