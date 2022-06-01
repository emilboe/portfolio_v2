import React, { memo } from "react";
import { Link } from "react-router-dom";

import "../styles/portfolio.scss";
import tjohei from "../images/Animated_Mockup_v3.gif";
import hamle from "../images/hamle.jpg";
import gardenview from "../images/gardenview.png";

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
              <div className="title">Hamle (Bachelor Project)</div>
            </Link>
            <div className="contents">
              A progressive web app to organize your pantry with shared shopping lists and inventory management.
              <br />
              <br />
              This was a group bachelor project at NTNU in collaboration with Gjøvik Commune and Bekk Consulting to help reduce food waste.
            </div>
            <a className="button" target="_blank" rel="noreferrer" href="https://hamle.netlify.app/">live site</a>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/emilboe/hamle">github repo</a>
            <Link to="/project/hamle" className="button" >read more</Link>
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
              Full stack web project for an application to taking care of your plants and we achieve this by allowing those with access to water and fertilize plants, as well as change any relevant information (such as where the plant is placed) to make sure the plants live long lives.
              <br />
              <br />
            </div>
            <a className="button" target="_blank" rel="noreferrer" href="https://github.com/emilboe/GardenView-Frontend">github repo</a>
            <a className="button" target="_blank" rel="noreferrer" href="https://gardenview.netlify.app/#/about">live site</a>
            <Link to="/project/gardenview" className="button" >read more</Link>
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
            </div>
            <a className="button" target="_blank" rel="noreferrer" href="https://xd.adobe.com/view/e9b00e11-e810-41ed-5c66-83d405e985c7-9f81/?fullscreen">clickable prototype</a>
            <Link to="/project/tjohei" className="button" >read more</Link>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Portfolio;

