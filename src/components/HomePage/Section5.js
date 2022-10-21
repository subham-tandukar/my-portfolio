import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Section5 = () => {
  return (
    <>
      <div className="all-project-bg">
        <div className="uk-container project-bg-txt">
          <Typewriter
            options={{
              strings: [
                "Want to see all projects ?",
                "Click on the button below . . .",
              ],
              autoStart: true,
              loop: true,
            }}
          />

          <Link to="/project">
            <button className="uk-button hover-btn uk-margin-top">
              View All . . .
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Section5;
