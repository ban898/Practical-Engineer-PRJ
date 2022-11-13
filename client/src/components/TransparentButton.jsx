import React from "react";
import classes from "./TransparentButton.module.css";

const TransparentButton = (props) => {
  const text = props.buttonText;

  return <div className={classes.button}>{text}</div>;
};

export default TransparentButton;
