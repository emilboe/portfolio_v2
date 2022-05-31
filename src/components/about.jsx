import React, { memo } from "react";
import "../styles/about.scss";
import img from "../images/emilboe.png";

import {
  IoPerson,
  IoLocationSharp,
  IoMailSharp,
  IoCalendarClearOutline,
} from "react-icons/io5";

const About = memo(({ refs }) => {
  return (
    <section ref={refs} className="about-section">
      <div className="section-title">ABOUT ME</div>

      <div className="about-content">
        <img
          className="about-picture"
          src={img}
          alt="Selfie of Emil."
        ></img>
        <div className="about-info">
          <b className="info-title">"Me, Myself & I"</b>
          <div className="info">
            <br />
            I'm a Front-End Developer based in Norway.
            I have a passion for creative webdesign and making intuitive, dynamic user experiences.
            <br /><br />
            I see myself as a problem solver and creative thinker with high attention to detail.
            Fan of Japan, esports, watching netflix and blogging. My mom says I'm cool.
            <br /><br />
            I strive to challenge myself without the fear of making mistakes. 
            Interested in working with the entire frontend spectrum to create useful projects with positive people.
          </div>
          <ul>
            <li>
              <div className="info-li">
                <IoPerson className="icon" /> Emil Bøen
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoLocationSharp className="icon" /> Gjøvik, Norway
              </div>
            </li>
            <li>
              <div className="info-li">
                <a href="mailto:emil@boen.net"><IoMailSharp className="icon" /> emil@boen.net</a>
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoCalendarClearOutline className="icon" /> 05.10.1996
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default About;
