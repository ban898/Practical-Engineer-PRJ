import React from "react";
import classes from "./BlueButton.module.css";

const BlueButton = (props) => {
  const text = props.buttonText;
  const bgColor = props.backgroundColor;

  return (
    <button
      className={classes.button}
      style={{
        backgroundColor: `${bgColor}`,
      }}
    >
      {text}
    </button>
  );
};

export default BlueButton;
