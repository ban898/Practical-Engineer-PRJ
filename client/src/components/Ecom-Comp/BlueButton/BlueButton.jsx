import React from "react";
import classes from "./BlueButton.module.css";

const BlueButton = ({
  buttonText,
  backgroundColor,
  onClick,
  padding,
  fontSize,
  mt,
  ml,
  width,
}) => {
  return (
    <button
      className={classes.button}
      onClick={onClick}
      style={{
        textTransform: "capitalize",
        width: `${width}`,
        backgroundColor: `${backgroundColor}`,
        padding: `${padding}`,
        fontSize: `${fontSize}`,
        marginTop: `${mt}`,
        marginLeft: `${ml}`,
      }}
    >
      {buttonText}
    </button>
  );
};

export default BlueButton;
