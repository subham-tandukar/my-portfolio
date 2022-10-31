import React from "react";
import AllProjects from "./AllProjects";
import project from "../../img/project1.png";

const EasySoftware = () => {
  return (
    <div>
      <AllProjects
        img={project}
        title="Easy Software"
        web="https://easysoftware.com.np/"
        git="https://github.com/subham-tandukar/easy-software"
      />
    </div>
  );
};

export default EasySoftware;
