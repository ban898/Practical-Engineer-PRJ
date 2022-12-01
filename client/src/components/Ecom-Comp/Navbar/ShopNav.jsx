import { React, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

import classes from "./ShopNav.module.css";

import Modal from "../LoginModal/Modal";
import CartIcon from "../CartIcon/CartIcon";
import CartCount from "../CartCount/CartCount";
import CartModal from "../CartModal/CartModal";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import { FaTiktok } from "react-icons/fa";

const ShopNav = () => {
  //Handle Cart Modal
  const [cartOpen, setCartOpen] = useState(false);

  //Handle Login Modal
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
        <Link className={classes.logo} to="/shop">
          Design-X
        </Link>
        <ScrollLink to="Discounts" smooth={true} offset={-60} duration={1000}>
          Discounts
        </ScrollLink>
        <ScrollLink to="Categories" smooth={true} offset={-10} duration={1000}>
          Categories
        </ScrollLink>
        <ScrollLink to="About Us" smooth={true} offset={-10} duration={1000}>
          About Us
        </ScrollLink>
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
        <div className={classes.tiktok}>
          <FaTiktok />
        </div>
        <div
          className={classes.cartContainer}
          onClick={() => setCartOpen(true)}
        >
          <CartIcon>
            <CartCount count={5} />
          </CartIcon>
          <CartModal
            open={cartOpen}
            onClose={() => {
              setCartOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopNav;

//-------------------------------------------------------------------------------------
// <ShoppingCartIcon fontSize="large" />
