import React from "react";
import loader from "../../img/loader.gif";
import Grid from "@mui/material/Grid";
import react from "../../img/react.png";
import nextjs from "../../img/nextjs.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import sass from "../../img/sass.png";
import js from "../../img/js.png";
import wordpress from "../../img/wordpress.png";
import jquery from "../../img/jquery.png";
import bootstrap from "../../img/bootstrap.png";
import php from "../../img/php.png";
import ps from "../../img/ps.png";
import figma from "../../img/figma.png";
import api from "../../img/api.png";
import db from "../../img/db.png";
import mui from "../../img/mui.png";
import git from "../../img/git.png";
import uikit from "../../img/uikit.png";
import tailwind from "../../img/tailwind.png";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  {
    id: 17,
    tooltip: "Next JS",
    value: 50,
    icon: nextjs,
  },
  {
    id: 1,
    tooltip: "React",
    value: 90,
    icon: react,
  },
  {
    id: 2,
    tooltip: "React",
    value: 95,
    icon: html,
  },
  {
    id: 3,
    tooltip: "CSS 3",
    value: 90,
    icon: css,
  },
  {
    id: 4,
    tooltip: "Sass",
    value: 80,
    icon: sass,
  },
  {
    id: 5,
    tooltip: "Javascript",
    value: 80,
    icon: js,
  },
  {
    id: 6,
    tooltip: "Jquery",
    value: 80,
    icon: jquery,
  },
  {
    id: 11,
    tooltip: "API integration",
    value: 75,
    icon: api,
  },
  {
    id: 12,
    tooltip: "Mongo DB",
    value: 75,
    icon: db,
  },
  {
    id: 7,
    tooltip: "Bootstrap",
    value: 90,
    icon: bootstrap,
  },
  {
    id: 15,
    tooltip: "UI kit",
    value: 90,
    icon: uikit,
  },
  {
    id: 16,
    tooltip: "Tailwind CSS",
    value: 70,
    icon: tailwind,
  },
  {
    id: 8,
    tooltip: "Php",
    value: 50,
    icon: php,
  },
  {
    id: 18,
    tooltip: "Wordpress",
    value: 50,
    icon: wordpress,
  },
  {
    id: 13,
    tooltip: "Material UI",
    value: 85,
    icon: mui,
  },
  {
    id: 9,
    tooltip: "Adobe Photoshop",
    value: 75,
    icon: ps,
  },
  {
    id: 10,
    tooltip: "Figma",
    value: 90,
    icon: figma,
  },

  {
    id: 14,
    tooltip: "Git",
    value: 80,
    icon: git,
  },
];

const Skills = () => {
  const gradientStyles = buildStyles({
    pathColor: `url(#gradient)`,
  });
  return (
    <>
      <div id="skills" className="uk-container skills">
        <div>
          <h5 className="txt">
            Skills <img src={loader} alt="" className="loader" />{" "}
          </h5>
        </div>

        <div
          className="skill-wrapper"
          uk-scrollspy="cls: uk-animation-fade; target: .wrap; delay: 300; repeat: false"
        >
          <Grid container spacing={2}>
            {skills.map((data) => {
              const { id, tooltip, value, icon } = data;
              return (
                <Grid item xs={6} sm={4} md={3} lg={2} key={id}>
                  <div className="wrap" uk-tooltip={tooltip}>
                    <svg>
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#1B2083" />
                          <stop offset="100%" stopColor="#03041C" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <CircularProgressbar
                      value={value}
                      styles={gradientStyles}
                    />

                    <div className="skill-icon">
                      <img src={icon} className="skill-icon" />
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Skills;
