import React from "react";
import AllProjects from "./AllProjects";
import project from "../../img/project2.png";

const Cooperative = () => {
  return (
    <div>
      <AllProjects
        img={project}
        title="Cooperative"
        web="http://sundevicoop.com/"
        git="https://github.com/subham-tandukar/cooperative"
      />
    </div>
  );
};

export default Cooperative;
