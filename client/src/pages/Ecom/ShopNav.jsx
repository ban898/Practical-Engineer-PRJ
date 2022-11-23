import { React, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import classes from "./ShopNav.module.css";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FaTiktok } from "react-icons/fa";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Modal from "./Modal";

const ShopNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  //Handling Navbar Color change when scrolling
  const [colorChange, setColorChnage] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 800) {
      setColorChnage(true);
    } else {
      setColorChnage(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  const navbarClasses = colorChange ? classes.colorNav : classes.navbar;

  return (
    <div className={navbarClasses}>
      <div className={classes.navbarLeft}>
        <ScrollLink className={classes.logo}>Design-X</ScrollLink>
        <ScrollLink>Home</ScrollLink>
        <ScrollLink>Products</ScrollLink>
        <ScrollLink>About Us</ScrollLink>
      </div>
      <div className={classes.navbarRight}>
        <div className={classes.loginBox}>
          <AccountCircleIcon fontSize="large" onClick={() => setIsOpen(true)} />
          <div className={classes.loginText} onClick={() => setIsOpen(true)}>
            Log in
          </div>
          <Modal open={isOpen} onClose={() => setIsOpen(false)} />
        </div>
        <InstagramIcon />
        <YouTubeIcon />
        <FacebookIcon />
        <FaTiktok />
        <ShoppingCartIcon fontSize="large" />
      </div>
    </div>
  );
};

export default ShopNav;
