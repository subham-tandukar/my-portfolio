import React from "react";
import AllProjects from "./AllProjects";
import project from "../../img/project3.png";

const Ecommerce = () => {
  return (
    <div>
      <AllProjects
        img={project}
        title="Ecommerce"
        web="https://subham-tandukar.github.io/ecommerce/"
        git="https://github.com/subham-tandukar/ecommerce"
      />
    </div>
  );
};

export default Ecommerce;
