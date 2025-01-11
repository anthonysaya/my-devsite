import React from "react";
import image from "./wgsip.jpg";
import "./TwoCol.css";

function ProjectWGSIP(props: { onProject: (string) => void }) {
  function handleBack(): void {
    props.onProject("Main");
  }

  return (
    <>
      <div className="TwoCol-box">
        <img src={image} />
        <main className="TwoCol-main">
          <div className="TwoCol-main-box">
            <i>
              <span className="span-bold-yellow">
                What Game Should I Play Next?
              </span>
            </i>{" "}
            is a sort and filter tool for your video game collection built on
            the{" "}
            <a
              href="https://www.pricecharting.com/api-documentation"
              target="_blank"
            >
              <span className="span-link">PriceCharting API</span>
            </a>{" "}
            by JJ Hendricks. By providing their user ID and API key,
            PriceCharting users can import their collection of games as stored
            on the site, sort and filter on a variety of categories, and utilize
            a bespoke rating system that persists on rerenders. I created this
            project out of a desire for a tool to help decide what to play next
            out of my own personal games collection, and JJ was receptive to the
            idea and helpful with API access throughout the process.
            <br />
            <br />
            <a
              href="http://anthonysaya.github.io/what-should-i-play"
              target="_blank"
            >
              <span className="span-link">Website Link (API Key Required)</span>
            </a>{" "}
            |{" "}
            <a
              href="http://github.com/anthonysaya/what-should-i-play"
              target="_blank"
            >
              <span className="span-link">GitHub Repository</span>
            </a>
            <br />
            <br />
            <div className="TwoCol-main-buttons">
              <button
                className="TwoCol-main-button"
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
