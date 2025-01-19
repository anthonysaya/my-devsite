import React from "react";
import image from "./WSIL.ico";
import "./OneCol.css";

function ProjectWSIL(props: { onProject: (string) => void }) {
  function handleBack(): void {
    props.onProject("Main");
  }

  return (
    <>
      <div className="OneCol-box">
        <main className="OneCol-main">
          <div className="OneCol-main-box">
            <img src={image} />{" "}
            <i>
              <span className="span-bold-yellow">
                Where in the World Should I Live?
              </span>
            </i>{" "}
            is an interactive quiz programmed in React and TypeScript. Based on
            data on over 90 countries – some compiled manually from reputed
            international sources, and others queried via the{" "}
            <a href="https://restcountries.com/" target="_blank">
              <span className="span-link">REST Countries API</span>
            </a>{" "}
            – users input their opinions on various topics via a unique
            sliding-scale interface. At the end, the quiz calculates which
            nation most closely matches their self-reported wants and values. Do
            you know which country is the best one for you?
            <br />
            <br />
            <a
              href="http://anthonysaya.github.io/where-should-i-live"
              target="_blank"
            >
              <span className="span-link">Website Link</span>
            </a>{" "}
            |{" "}
            <a
              href="http://github.com/anthonysaya/where-should-i-live"
              target="_blank"
            >
              <span className="span-link">GitHub Repository</span>
            </a>
            <br />
            <br />
            <div className="OneCol-main-buttons">
              <button
                className="OneCol-main-button"
                id="back"
                onClick={handleBack}
              >
                Go Back
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
export default ProjectWSIL;
