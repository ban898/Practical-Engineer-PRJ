import React from "react";
import classes from "./BlueButton.module.css";

const BlueButton = (props) => {
  const text = props.buttonText;

  return <div className={classes.button}>{text}</div>;
};

export default BlueButton;
