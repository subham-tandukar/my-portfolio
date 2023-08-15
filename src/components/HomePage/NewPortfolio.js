import React from "react";
import {FaPaperPlane} from 'react-icons/fa'

const NewPortfolio = () => {
  return (
    <div className="new__portfolio">
      <div className="txt">
        <h1>Redirect to my PORTFOLIO 2.0</h1>
        <button
         
          className="uk-button hover-btn"
        >
          <a
            href="https://portfolio-subham-tandukar.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
           Redirect <FaPaperPlane/>
          </a>
        </button>
      </div>
    </div>
  );
};

export default NewPortfolio;
