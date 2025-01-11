import React from "react";
import image from "./stockresume.jpg";
import resumePDF from "./resume.pdf";
import "./TwoCol.css";

function Resume() {
  return (
    <>
      <div className="TwoCol-box">
        <img src={image} />
        <main className="TwoCol-main">
          <div className="TwoCol-main-box">
            <a href={resumePDF} target="_blank">
              <span className="span-link">Click here</span>
            </a>{" "}
            to download an up-to-date copy of my resume.
            <br />
            <br />I can be reached via email at{" "}
            <a href="mailto:asaya30@gmail.com">
              <span className="span-link">asaya30@gmail.com</span>
            </a>
            .
          </div>
        </main>
      </div>
    </>
  );
}

export default Resume;
