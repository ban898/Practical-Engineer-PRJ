import React from "react";
import classes from "./PriceCardButton.module.css";

const PriceCardButton = ({ buttonText, show, onClick }) => {
  const cssClasses = [show ? classes.CardShow : classes.CardHide];

  return (
    <button className={cssClasses.join(" ")} onClick={onClick}>
      {buttonText}
    </button>
  );
};

export default PriceCardButton;
