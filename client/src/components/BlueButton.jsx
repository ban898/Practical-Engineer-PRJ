import React from "react";
import classes from "./BlueButton.module.css";

const BlueButton = ({ buttonText, backgroundColor }) => {
  return (
    <button
      className={classes.button}
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {buttonText}
    </button>
  );
};

export default BlueButton;
