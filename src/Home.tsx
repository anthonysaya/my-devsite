import React from "react";
import image from "./stockhome.jpg";
import "./TwoCol.css";

function Home() {
  return (
    <>
      <div className="TwoCol-box">
        <img src={image} />
        <main className="TwoCol-main">
          <div className="TwoCol-main-box">
            I am a front-end web developer creating projects in{" "}
            <span className="span-bold-yellow">React</span> and{" "}
            <span className="span-bold-yellow">TypeScript</span>. I am
            well-versed in <span className="span-bold-yellow">JavaScript</span>,{" "}
            <span className="span-bold-yellow">HTML</span> and{" "}
            <span className="span-bold-yellow">CSS</span>.
            <br />
            <br />
            Click around this site to learn more.
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
