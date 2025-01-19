import React from "react";
import image from "./WTP.ico";
import "./OneCol.css";

function ProjectWTP(props: { onProject: (string) => void }) {
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
              <span className="span-bold-yellow">Who's That Pokémon?</span>
            </i>{" "}
            is a guessing game based around the popular Nintendo® characters
            programmed in React and JavaScript. A sillhouette of 1 of the 1,025
            monsters is randomly generated for users to try and guess the name
            of. If they guess correctly, the image is revealed; if not, up to
            six hints about the character are provided using the open-source{" "}
            <a href="http://pokeapi.co" target="_blank">
              <span className="span-link">PokeAPI</span>
            </a>
            . How many can you name?
            <br />
            <br />
            <a
              href="http://anthonysaya.github.io/whos-that-pokemon-react"
              target="_blank"
            >
              <span className="span-link">Website Link</span>
            </a>{" "}
            |{" "}
            <a
              href="http://github.com/anthonysaya/whos-that-pokemon-react"
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
export default ProjectWTP;
