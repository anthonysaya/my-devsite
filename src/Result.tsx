import React, { useState } from "react";
import image from "./myphoto.jpg";
import "./TwoCol.css";

function Result(props: {
  onAbout: (string) => void;
  inputs: string[];
  answers: string[];
}) {
  const [adlib, setAdlib] = useState(props.inputs);

  function onBack() {
    props.onAbout("Input");
  }

  function onReveal() {
    setAdlib(props.answers);
  }

  return (
    <>
      <div className="TwoCol-box">
        <img src={image} />
        <main className="TwoCol-main">
          <div className="TwoCol-main-box">
            Anthony Saya is a front-end web developer based on Long Island,{" "}
            <span className="span-bold-yellow">{adlib[0]}</span>. He graduated
            from <span className="span-bold-yellow">{adlib[1]}</span> University
            in <span className="span-bold-yellow">{adlib[2]}</span>, and
            previously worked in the{" "}
            <span className="span-bold-yellow">{adlib[3]}</span> departments of
            several tech companies (such as{" "}
            <span className="span-bold-yellow">{adlib[4]}</span> and Turtle
            Beach) developing accounting dataflows using{" "}
            <span className="span-bold-yellow">{adlib[5]}</span> and Alteryx
            Designer. He is experienced with the React web development
            environment and programs in TypeScript, CSS and{" "}
            <span className="span-bold-yellow">{adlib[6]}</span>. He is
            conversational in Standard German, and speaks some Italian and{" "}
            <span className="span-bold-yellow">{adlib[7]}</span>.
            <br />
            <br />
            <div className="TwoCol-main-buttons">
              <button
                className="TwoCol-main-button"
                id="reveal"
                onClick={onReveal}
              >
                Reveal Answers
              </button>
              &nbsp; &nbsp;
              <button className="TwoCol-main-button" id="back" onClick={onBack}>
                Go Back
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Result;
