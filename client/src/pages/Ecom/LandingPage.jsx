import React from "react";
import { Link as ScrollLink } from "react-scroll";

import classes from "./LandingPage.module.css";

import logo from "../../img/ShopImg/logo2.jpg";
import ImageSlider from "./ImageSlider";

const LandingPage = () => {
  return (
    <div>
      <div className={classes.navbar}>
        <div className={classes.navbarLeft}>
          <img className={classes.logo} src={logo} alt="icon" />
          <ScrollLink>Home</ScrollLink>
          <ScrollLink>Products</ScrollLink>
          <ScrollLink>About Us</ScrollLink>
        </div>
        <div className={classes.navbarRight}>
          <p>Login</p>
          <p>Icon</p>
          <p>Icon</p>
        </div>
      </div>
      <ImageSlider />
    </div>
  );
};

export default LandingPage;
