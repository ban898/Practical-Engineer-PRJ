import { React, useState } from "react";
import classes from "./TransparentButton.module.css";

const TransparentButton = ({
  buttonText,
  backgroundColor,
  fontSize,
  fontWeight,
  onClick,
  padding,
  position,
  top,
  left,
  customHoverColor,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  let hoverColor = isHovering ? `${customHoverColor}` : "";

  return (
    <button
      onClick={onClick}
      className={classes.button}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: `${backgroundColor}`,
        fontSize: `${fontSize}`,
        fontWeight: `${fontWeight}`,
        padding: `${padding}`,
        position: `${position}`,
        top: `${top}`,
        left: `${left}`,
        color: `${hoverColor}`,
      }}
    >
      {buttonText}
    </button>
  );
};

export default TransparentButton;
