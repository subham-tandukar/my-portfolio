import React from "react";
import { BiArrowToTop } from "react-icons/bi";
import $ from 'jquery'

const GoTop = () => {
  $(window).scroll(function () {
    var h = $(document).height();
    var hh = $(document).scrollTop();
    if (hh > h / 1.5) {
      $("#top").css({
        top: "88%",
        opacity: "1",
        visibility: "visible",
        transform: "scale(1)",
      });
    } else {
      $("#top").css({
        top: "0",
        opacity: "0",
        visibility: "hidden",
        transform: "scale(0.1)",
      });
    }
  });
  return (
    <>
      <a href="#" className="go-to-top" uk-tooltip="title: Go to Top" id="top" uk-scroll>
        <span className="go-to-top-icon">
          <BiArrowToTop />
        </span>
      </a>
    </>
  );
};

export default GoTop;
