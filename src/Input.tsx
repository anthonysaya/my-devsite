import React, { useState, JSX } from "react";
import InputBox from "./InputBox.tsx";
import { plcArray } from "./plcArray.ts";
import "./OneCol.css";

function Input(props: {
  onAbout: (string) => void;
  onSkip: (boolean) => void;
  onInput: (index: number, input: string) => void;
  inputs: string[];
}) {
  const checkInputs = props.inputs.every((input) => {
    return input != "";
  });

  function onAbout(): void {
    if (!checkInputs) {
      return;
    } else {
      props.onAbout("Result");
    }
  }

  function onSkip(): void {
    props.onSkip(true);
    props.onAbout("Result");
  }

  function createInputs(a: number, b: number): JSX.Element[] {
    let jsxArray: JSX.Element[] = [];
    for (let i = a; i <= b; i++) {
      jsxArray.push(
        <InputBox
          placeholder={plcArray[i]}
          onChange={(input: string) => props.onInput(i, input)}
          value={props.inputs[i]}
        />
      );
    }
    return jsxArray;
  }

  return (
    <>
      <main className="OneCol-main">
        <div className="OneCol-main-box">
          <span className="span-bold-yellow">Ad Libs: About Me</span>
          <br />
          <br />
          Fill in the boxes below with the requested words, then click Next to
          see the results!
          <br />
          <br />
          <div className="OneCol-main-inputs">
            <form id="OneCol-main-form">{createInputs(0, 7)}</form>
            <br />
            <br />
          </div>
          <div className="OneCol-main-buttons">
            <button className="OneCol-main-button" id="skip" onClick={onSkip}>
              Skip
            </button>
            &nbsp; &nbsp;
            <button className="OneCol-main-button" id="next" onClick={onAbout}>
              Next
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Input;
