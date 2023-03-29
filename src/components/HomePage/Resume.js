import React from "react";
import Typewriter from "typewriter-effect";

const Resume = () => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <div id="resume" className="all-project-bg">
        <div className="uk-container project-bg-txt">
          <Typewriter
            options={{
              strings: [
                "Want to download my resume ?",
                "Click on the button below . . .",
              ],
              autoStart: true,
              loop: true,
            }}
          />

          <button
            className="uk-button hover-btn uk-margin-top"
            uk-tooltip="title: Download Resume; pos: top"
            onClick={onButtonClick}
          >
            Resume . . .
          </button>
        </div>
      </div>
    </>
  );
};

export default Resume;
