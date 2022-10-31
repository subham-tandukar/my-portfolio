import React from "react";
import AllProjects from "./AllProjects";
import project from "../../img/project5.png";

const School = () => {
  return (
    <div>
      <AllProjects
        img={project}
        title="Tapriza School"
        web="http://taprizaschool.org/"
        git="https://github.com/subham-tandukar/Tapriza-School"
      />
    </div>
  );
};

export default School;
