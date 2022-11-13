import React from "react";
import classes from "./TransparentButton.module.css";

const TransparentButton = (props) => {
  const text = props.buttonText;
  const bgColor = props.backgroundColor;
  const size = props.fontSize;
  const weight = props.fontWeight;

  return (
    <div
      className={classes.button}
      style={{
        backgroundColor: `${bgColor}`,
        fontSize: `${size}`,
        fontWeight: `${weight}`,
      }}
    >
      {text}
    </div>
  );
};

export default TransparentButton;
