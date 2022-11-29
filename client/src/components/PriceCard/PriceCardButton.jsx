import React from "react";
import classes from "./PriceCardButton.module.css";

const PriceCardButton = ({ buttonText, show, onClick }) => {
  const cssClasses = show ? classes.show : classes.hide;

  return (
    <button className={cssClasses} onClick={onClick} id="cb">
      {buttonText}
    </button>
  );
};

export default PriceCardButton;
