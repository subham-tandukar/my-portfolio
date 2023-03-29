import React from "react";
import { Link } from "react-router-dom";
import { BsSlashLg } from "react-icons/bs";
import { FaChevronLeft, FaChevronRight, FaLinkedinIn } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { GrInstagram } from "react-icons/gr";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        

        <div className="foot">
          <div className="uk-grid ">
            <div className="social-links  uk-width-1-1  uk-width-1-2@s">
              <a
                href="https://www.facebook.com/subham.tandukar.3/"
                uk-tooltip="title: Facebook"
                target="_blank"
              >
                <RiFacebookFill className="icon" />
              </a>
              <a
                href="https://www.instagram.com/subham._.tandukar.js/"
                uk-tooltip="title: Instagram"
                target="_blank"
              >
                <GrInstagram className="icon" />
              </a>
              <a
                href="https://www.linkedin.com/in/aniket-tandukar-7b9aaa180/"
                uk-tooltip="title: LinkedIn"
                target="_blank"
              >
                <FaLinkedinIn className="icon" />
              </a>
            </div>

            <div className="copyright uk-width-1-1 uk-width-1-2@s">
              <span>
                Copyright &copy; 2023 by <strong>Aniket.</strong> All Rights
                Reserved.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
