import React from "react";
import { Link } from "react-router-dom";
import gif from "../img/gif.gif";

const ErrorPage = () => {
  return (
    <>
      <div className="error-page">
        <marquee behavior="" direction="right">
          <img src={gif} alt="gif" />
        </marquee>
        <h1>404 Page Not Found</h1>
        <Link to="/home" className="uk-button hover-btn">
          Redirect to Home Page
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
