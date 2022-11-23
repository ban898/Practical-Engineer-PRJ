import React from "react";
import classes from "./BlueButton.module.css";

const BlueButton = ({
  buttonText,
  backgroundColor,
  onClick,
  padding,
  fontSize,
}) => {
  return (
    <button
      className={classes.button}
      onClick={onClick}
      style={{
        backgroundColor: `${backgroundColor}`,
        padding: `${padding}`,
        fontSize: `${fontSize}`,
      }}
    >
      {buttonText}
    </button>
  );
};

export default BlueButton;
