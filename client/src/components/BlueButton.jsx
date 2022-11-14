import React from "react";
import classes from "./BlueButton.module.css";

const BlueButton = (props) => {
  const text = props.buttonText;
  const bgColor = props.backgroundColor;

  return (
    <div
      className={classes.button}
      style={{
        backgroundColor: `${bgColor}`,
      }}
    >
      {text}
    </div>
  );
};

export default BlueButton;
