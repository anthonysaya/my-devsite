import React from "react";
import image from "./ETPI.ico";
import "./OneCol.css";

function ProjectWGSIP(props: { onProject: (string) => void }) {
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
              <span className="span-bold-yellow">E.T. PI: Alien Detective</span>
            </i>{" "}
            is an interactive deduction game programmed in React and TypeScript.
            Users play as a detective tasked with translating the strange
            cryptographic symbols used in a conversation between an alien and a
            human scientist, in an interface based on the design of the Apple®
            iMessage programs for both Mac (desktop version) and iOS (mobile
            version). An interactive symbol panel dynamically translates alien
            letters to Latin alphabet characters when the user inputs a correct
            guess. How fast can you crack the code?
            <br />
            <br />
            <a
              href="http://anthonysaya.github.io/alien-translator"
              target="_blank"
            >
              <span className="span-link">Website Link</span>
            </a>{" "}
            |{" "}
            <a
              href="http://github.com/anthonysaya/alien-translator"
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
export default ProjectWGSIP;
