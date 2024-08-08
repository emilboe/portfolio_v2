import React, { memo } from "react";
import "../styles/about.scss";
import img from "../images/profile-pic_3.png";

import {
  IoLocationSharp,
  IoMail,
  IoLogoLinkedin,
  IoLogoGithub,
} from "react-icons/io5";

const About = memo(({ refs }) => {
  return (
    <section ref={refs} className="about-section">
      {/* <div className="section-title">ABOUT ME</div> */}

      <div className="about-content">
        <div className="picture-section">

          <div className="picture-wrap">
            <img
              className="about-picture"
              src={img}
              alt="Selfie of Emil."
            ></img>

          </div>
          <div className="info-li"><IoLocationSharp className="icon" />Trondheim, Norway</div>
        </div>
        <div className="about-info">
          {/* <h2 className="info-title">About me</h2> */}
          <div className="info">
            <br />
            For the past 2 years, I have been working as a consultant at TietoEVRY, where I have honed my skills in creative web design and developing intuitive, dynamic user experiences.
            <br /><br />
            I see myself as a problem-solver and creative thinker with high attention to detail.
            On a personal note, I enjoy travelling, reading, and watching esports. Also, my mom says I'm cool.
            <br /><br />
            I strive to challenge myself without the fear of making mistakes.
            Interested in working with the entire frontend spectrum to create useful projects with positive people.
          </div>
          <ul>
            <li>
              Find me at:
            </li>
            <li>
              <a href="mailto:emil@boen.net" className="info-li"> <IoMail className="icon" /> emil@boen.net</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/emil-boen/" className="info-li">
                <IoLogoLinkedin className="icon" /> Emil Bøen</a>
            </li>
            <li>
              <a href="https://github.com/emilboe" className="info-li">
                <IoLogoGithub className="icon" /> emilboe</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default About;
