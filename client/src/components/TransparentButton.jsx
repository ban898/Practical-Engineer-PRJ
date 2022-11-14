import React from "react";
import classes from "./TransparentButton.module.css";

const TransparentButton = ({
  buttonText,
  backgroundColor,
  fontSize,
  fontWeight,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={classes.button}
      style={{
        backgroundColor: `${backgroundColor}`,
        fontSize: `${fontSize}`,
        fontWeight: `${fontWeight}`,
      }}
    >
      {buttonText}
    </button>
  );
};

export default TransparentButton;
