import React from "react";
import classes from "./BlueButton.module.css";

const BlueButton = ({
  buttonText,
  backgroundColor,
  onClick,
  padding,
  fontSize,
  mt,
}) => {
  return (
    <button
      className={classes.button}
      onClick={onClick}
      style={{
        textTransform: "capitalize",
        width: "100%",
        backgroundColor: `${backgroundColor}`,
        padding: `${padding}`,
        fontSize: `${fontSize}`,
        marginTop: `${mt}`,
      }}
    >
      {buttonText}
    </button>
  );
};

export default BlueButton;
