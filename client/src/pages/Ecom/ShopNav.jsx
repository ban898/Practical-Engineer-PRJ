import { React, useRef, useState } from "react";
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

  let loginRef = useRef();

  // useEffect(() => {
  //   let handler = (event) => {
  //     if (!loginRef.current.contains(event.target)) {
  //       setIsOpen(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", handler);

  //   return () => {
  //     document.removeEventListener("mousedown", handler);
  //   };
  // });

  return (
    <div className={classes.navbar}>
      <div className={classes.navbarLeft}>
        <ScrollLink className={classes.logo}>Design-X</ScrollLink>
        <ScrollLink>Home</ScrollLink>
        <ScrollLink>Products</ScrollLink>
        <ScrollLink>About Us</ScrollLink>
      </div>
      <div className={classes.navbarRight}>
        <div ref={loginRef} className={classes.loginBox}>
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
