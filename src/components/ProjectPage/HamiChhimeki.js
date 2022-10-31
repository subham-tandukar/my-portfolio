import React from "react";
import AllProjects from "./AllProjects";
import project from "../../img/project4.png";

const HamiChhimeki = () => {
  return (
    <div>
      <AllProjects
        img={project}
        title="Hami Chhimeki"
        web="http://hamichhimeki.com/"
        git="https://github.com/subham-tandukar/landing-page"
      />
    </div>
  );
};

export default HamiChhimeki;
