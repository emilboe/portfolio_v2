import React, { memo } from "react";

import "../styles/title.scss";

const Title = memo(() => {
  return (
    <section className="title_container">
      <div className="title_background"></div>
      <div className="title_filter"></div>{" "}
      <div className="title_contents">
        <h1>Ambitious & Curious Developer</h1>
        <div className="line"></div>
        <h1>Emil Bøen</h1>
        <h4>
          Hey! I'm a freshly graduated front-end developer based in Norway.
          <br /> I always enjoy trying new things and I love coming up with new ideas.
        </h4>
      </div>
    </section>
  );
});

export default Title;
