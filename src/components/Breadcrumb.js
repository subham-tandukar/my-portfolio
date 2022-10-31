import React from "react";
import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

const Breadcrumb = (props) => {
  return (
    <div className="breadcrumb">
      <div className="uk-container uk-container-expand">
        <div className="uk-flex uk-flex-middle uk-flex-wrap uk-flex-between">
          <div>
            <h3>{props.title}</h3>
          </div>

          <div>
            <div className="uk-flex uk-flex-middle">
              <GoHome  color="#fff" className="uk-margin-small-right"/>
              <Link to="/home" className="uk-margin-small-right">Home</Link>|<span className="uk-margin-small-left">{props.page}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
