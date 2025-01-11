import React, { useState } from "react";
import image from "./stockprojects.jpg";
import icon1 from "./WTP.ico";
import icon2 from "./WGSIP.ico";
import icon3 from "./WSIL.ico";
import icon4 from "./ETPI.ico";
import "./TwoCol.css";

function ProjectMain(props: { onProject: (string) => void }) {
  function handleWTP(): void {
    props.onProject("WTP");
  }

  function handleWGSIP(): void {
    props.onProject("WGSIP");
  }
  function handleWSIL(): void {
    props.onProject("WSIL");
  }

  function handleETPI(): void {
    props.onProject("ETPI");
  }

  return (
    <>
      <div className="TwoCol-box">
        <img src={image} />
        <main className="TwoCol-main">
          <div className="TwoCol-main-box">
            Click to explore the projects below:
            <br />
            <br />
            <img src={icon1} />{" "}
            <span className="span-link" onClick={handleWTP}>
              Who's That Poké?
            </span>
            <br />
            <img src={icon2} />{" "}
            <span className="span-link" onClick={handleWGSIP}>
              What Game Should I Play?
            </span>
            <br />
            <img src={icon3} />{" "}
            <span className="span-link" onClick={handleWSIL}>
              Where Should I Live?
            </span>
            <br />
            <img src={icon4} />{" "}
            <span className="span-link" onClick={handleETPI}>
              E.T. PI: Alien Detective
            </span>
          </div>
        </main>
      </div>
    </>
  );
}

export default ProjectMain;
