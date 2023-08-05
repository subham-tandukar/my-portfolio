import React from "react";
import dp from "../../img/dp.png";
import $ from "jquery";
import { IoIosClose } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";

const scroll = document.querySelector("html");

const Home = () => {
  $(function () {
    $(".small-image").click(function () {
      var path = $(this).attr("src");
      $("#large-image").attr("src", path);
      $("#show_image_popup").fadeIn();
      $(scroll).css({ "overflow-y": "hidden" });
    });
    $("#close-btn").click(function () {
      $("#show_image_popup").slideUp();
      $(scroll).css({ "overflow-y": "auto" });
    });
  });

  return (
    <>
      <section className="main" id="home">
        <div className="uk-container ">
          <div className="uk-grid uk-child-width-1-2@s uk-flex-middle">
            <div>
              <div className="dp">
                <div className="border-top"></div>
                <div className="border-bottom"></div>
                <div className="border-left"></div>
                <div className="border-right"></div>
                <div uk-tooltip="title: View; pos: top-right">
                  <img src={dp} alt="dp" className="small-image" />
                </div>
              </div>
            </div>

            <div className="info">
              <h1 uk-scrollspy="cls: uk-animation-slide-top; delay: 300">
                Hi, I'm Aniket 👋
              </h1>
              <p uk-scrollspy="cls: uk-animation-fade; delay: 600">
                A passionate React Web Developer 🚀 having a special interest in
                Frontend technologies and experience of building Web
                applications with JavaScript / Reactjs / Nodejs and some other
                cool libraries and frameworks. Also have knowledge about
                creating REST APIs using Node.js.
              </p>

              <button
                uk-scrollspy="cls: uk-animation-scale-up; delay: 900"
                className="uk-button hover-btn"
                uk-tooltip="title: Github; pos: top"
              >
                <a href="https://github.com/subham-tandukar" target="_blank" rel="noreferrer">View on Github <AiFillGithub size="1.5rem"/></a>
              </button>
            </div>
          </div>
        </div>

        <div id="show_image_popup">
          <div className="close-btn-area">
            <button
              id="close-btn"
              className="btn"
              uk-tooltip="title: Close; pos: bottom-right"
            >
              <IoIosClose />
            </button>
          </div>
          <div id="image-show-area">
            <img id="large-image" src="" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
