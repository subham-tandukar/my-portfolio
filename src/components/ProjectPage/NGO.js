import React from "react";
import AllProjects from "./AllProjects";
import project from "../../img/project6.png";

const NGO = () => {
  return (
    <div>
      <AllProjects
        img={project}
        title="NGO"
        web="https://tashi-d.org/"
        git="https://github.com/subham-tandukar/NGO"
      />
    </div>
  );
};

export default NGO;
