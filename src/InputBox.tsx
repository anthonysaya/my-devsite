import React, { useState, ChangeEvent } from "react";
import "./InputBox.css";

function InputBox(props: {
  placeholder: string;
  onChange: (input: string) => void;
  value: string;
}) {
  const [value, setValue] = useState<String>("");

  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    props.onChange(e.target.value);
  }

  return (
    <>
      <input
        className="InputBox"
        type="text"
        maxLength="20"
        onChange={handleChange}
        placeholder={props.placeholder}
        value={props.value}
      />
    </>
  );
}

export default InputBox;
