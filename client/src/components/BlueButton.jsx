import React from "react";
import classes from "./BlueButton.module.css";

const BlueButton = ({ buttonText, backgroundColor }) => {
  return (
    <div
      className={classes.button}
      style={{
        backgroundColor: `${backgroundColor}`,
      }}
    >
      {text}
    </div>
  );
};

export default BlueButton;
