import React from "react";
import classes from "./BlueButton.module.css";

const BlueButton = ({ buttonText, backgroundColor, onClick, padding }) => {
  return (
    <button
      className={classes.button}
      onClick={onClick}
      style={{
        backgroundColor: `${backgroundColor}`,
        padding: `${padding}`,
      }}
    >
      {buttonText}
    </button>
  );
};

export default BlueButton;
