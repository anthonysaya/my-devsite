import React, { useState } from "react";
import { ansArray } from "./ansArray.ts";
import Input from "./Input.tsx";
import Result from "./Result.tsx";

function About() {
  const [about, setAbout] = useState<String>("Input");
  const [inputArray, setInputArray] = useState(new Array(8).fill(""));

  function handleAbout(inp): void {
    setAbout(inp);
  }

  function handleInputs(index: number, input: string): void {
    if (inputArray[index] == input) {
      return;
    } else {
      let newArray: string[] = [...inputArray];
      newArray[index] = input;
      setInputArray(newArray);
    }
  }

  function handleSkip(skip: boolean): void {
    if (skip == true) {
      setInputArray(ansArray);
    } else {
      return;
    }
  }

  return (
    <>
      {about == "Input" && (
        <Input onAbout={handleAbout} inputs={inputArray} onInput={handleInputs} onSkip={handleSkip} />
      )}
      {about == "Result" && (
        <Result onAbout={handleAbout} inputs={inputArray} answers={ansArray} />
      )}
    </>
  );
}

export default About;
