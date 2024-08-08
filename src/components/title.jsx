import React, { memo } from "react";

import "../styles/title.scss";

const Title = memo(() => {
  return (
    <section className="title_container">
      <div className="title_background"></div>
      <div className="title_filter"></div>{" "}
      <div className="title_contents">
        <h1>Emil Bøen</h1>
        <div className="line"></div>
        <h2>
          Hi! I'm a front-end developer based in Norway with 2 years of professional experience.
          <br />I’m passionate about exploring new technologies and constantly innovating.
        </h2>
      </div>
    </section>
  );
});

export default Title;
