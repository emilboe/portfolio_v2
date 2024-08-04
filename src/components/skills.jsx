import React, { memo } from "react";

import "../styles/skills.scss";

import {
  ReactJs,
  Firebase,
  Sass,
  Javascript,
  Html5,
  CssThree,
  Nodedotjs,
  Express,
  Figma,
  Mongodb,
  Heroku,
  Netlify,
  Adobexd,
  Mysql
} from "@icons-pack/react-simple-icons";

const Skills = memo(({ refs }) => {
  return (
    <section ref={refs} className="skills-section">
      <div className="section-title">SKILLS</div>
      <div className="skills-content">

        <h3 className="skill-title">Frontend</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Html5 color="#E34F26" size={50} />
            </div>
            <p className="skill-info">HTML</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <CssThree color="#1572B6" size={50} />
            </div>
            <p className="skill-info">CSS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Javascript color="#F7DF1E" size={50} />
            </div>
            <p className="skill-info">JS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Sass color="#CC6699" size={50} />
            </div>
            <p className="skill-info">SASS</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <ReactJs color="#61DAFB" size={50} />
            </div>
            <p className="skill-info">React.js</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Figma size={50}  className="figma"/>
            </div>
            <p className="skill-info">Figma</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Adobexd color="#ff61f6" size={50} />
            </div>
            <p className="skill-info">Adobe XD</p>
          </div>
        </div>
        <br></br>
        <h3 className="skill-title">Backend</h3>
        <div className="skills-infos">
          <div className="skill-group">
            <div className="skill">
              <Nodedotjs color="#339933" size={50} />
            </div>
            <p className="skill-info">Node.js</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Express color="white" size={50} />
            </div>
            <p className="skill-info">Express</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Firebase color="#F5820D" size={50} />
            </div>
            <p className="skill-info">Firebase</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Mongodb color="#47A248" size={50} />
            </div>
            <p className="skill-info">MongoDB</p>
          </div>

          <div className="skill-group">
            <div className="skill">
              <Heroku color="RebeccaPurple" size={50} />
            </div>
            <p className="skill-info">Heroku</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Netlify color="#00AD9F" size={50} />
            </div>
            <p className="skill-info">Netlify</p>
          </div>
          <div className="skill-group">
            <div className="skill">
              <Mysql color="#4479a1" size={50}/>
            </div>
            <p className="skill-info">Mysql</p>
          </div>
          
        </div>
      </div>
    </section>
  );
});
export default Skills;
