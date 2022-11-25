import { React, useState } from "react";
import { Link as ScrollLink } from "react-scroll";

import classes from "./ShopNav.module.css";

import Modal from "./Modal";
import CartIcon from "../../components/CartIcon";
import CartCount from "../../components/CartCount";
import CartModal from "../../components/CartModal";

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
        <ScrollLink
          className={classes.logo}
          to="Home"
          smooth={true}
          offset={-30}
          duration={1000}
        >
          Design-X
        </ScrollLink>
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
