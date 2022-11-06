import React from "react";
import classes from "./Footer.module.css";
import BlueButton from "./BlueButton";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerTop}>
        <div className={classes.footerTopLeft}>
          <img className={classes.logo} src={logo} alt="logo" />
        </div>
        <div className={classes.footerTopRight}>
          <label htmlFor="email">Subscribe to get latest news</label>
          <div className={classes.emailSubmit}>
            <input
              className={classes.emailInput}
              type="email"
              id="email"
              placeholder="enter your email"
            ></input>
            <div className={classes.btn}>
              <BlueButton />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footerMain}>2</div>
      <div className={classes.footerBot}>3</div>
    </div>
  );
};

export default Footer;
