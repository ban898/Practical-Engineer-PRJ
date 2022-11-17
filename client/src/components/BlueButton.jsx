import React from "react";
import classes from "./BlueButton.module.css";

const BlueButton = ({ buttonText, backgroundColor, onClick }) => {
  return (
    <button
      className={classes.button}
      onClick={onClick}
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {buttonText}
    </button>
  );
};

export default BlueButton;
