import React, { memo } from "react";
import { Link } from "react-router-dom";

import "../styles/portfolio.scss";
import tjohei from "../images/Animated_Mockup_v3.gif";
import hamle from "../images/hamle.jpg";
import gardenview from "../images/gardenview.png";


import {
  IoDesktopOutline,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";

const Portfolio = memo(({ refs }) => {
  return (
    <section ref={refs} className="portfolio-section">
      <div className="section-title">PORTFOLIO</div>
      <div className="portfolio-content">
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <Link to="/project/hamle">
                <img src={hamle} alt="Branding screenshots of Hamle." />
              </Link>
            </div>
            <Link to="/project/hamle">
              <div className="title">Hamle</div>
            </Link>
            <div className="contents">
              A progressive web app for organizing your pantry with shared shopping lists and inventory management to help reduce food waste.
              <br />
              <br />
              My bachelor thesis project at NTNU in collaboration with Gjøvik Commune and Bekk Consulting.
              <br></br>
              <Link to="/project/hamle" >read more...</Link>
            </div>

            <div className="buttonGroup">
              <a className="button" target="_blank" rel="noreferrer" href="https://hamle.netlify.app/">
                <IoDesktopOutline color="white" size={25} />
                View Live Site
              </a>
              <a className="button" target="_blank" rel="noreferrer" href="https://github.com/emilboe/hamle">
                <IoLogoGithub color="white" size={25} />
                View Code
              </a>
            </div>

          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">

              <Link to="/project/gardenview">
                <img src={gardenview} alt="Screenshot of Gardenview website." />
              </Link>
            </div>
            <Link to="/project/gardenview">
              <div className="title">GardenView</div>
            </Link>
            <div className="contents">
              Web application for taking care of the plants around campus. 
              Fully fledged user system with role separation and live shared updates for each plants.
              <br />
              <br />
              Keep track of water, fertilizer and locations for each plants to make sure the they live long lives.
              <br />
              <Link to="/project/gardenview" >read more...</Link>
              <br />
            </div>
            <div className="buttonGroup">
              <a className="button" target="_blank" rel="noreferrer" href="https://gardenview.netlify.app/#/about">
                <IoDesktopOutline color="white" size={25} />
                View Live Site
              </a>
              <a target="_blank" className="button" rel="noreferrer" href="https://github.com/emilboe/GardenView-Frontend">
                <IoLogoGithub color="white" size={25} />
                View Code
              </a>
            </div>

          </div>
        </div>
        <div className="portfolio-info-area">
          <div className="portfolio-info">
            <div className="picture-area">
              <Link to="/project/tjohei">
                <img src={tjohei} alt="Visual of Tjohei website." />
              </Link>
            </div>

            <Link to="/project/tjohei">
              <div className="title">Tjohei</div>
            </Link>
            <div className="contents">
              A full fledged design prototype for a modern cabin rental website. I made prototypes for both Desktop and Mobile.
              <Link to="/project/tjohei"> read more...</Link>
              <br />
              <br />
            </div>
            <a className="button" target="_blank" rel="noreferrer" href="https://xd.adobe.com/view/e9b00e11-e810-41ed-5c66-83d405e985c7-9f81/?fullscreen">
              <IoDesktopOutline color="white" size={25} />
              Clickable Prototype
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;

