import React from "react";

import classes from "./Footer.module.css";

import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className={classes.footerContainer}>
        <div className={classes.upperFooter}>
          <YouTubeIcon />
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
          <div className={classes.tiktok}>
            <FaTiktok />
          </div>
          <div className={classes.google}>
            <AiOutlineGoogle />
          </div>
        </div>
        <div className={classes.midFooter}>
          <div className={classes.midFooterLogo}>Design-X</div>
          <div className={classes.midContent}>
            <div className={classes.midHeader}>My Account</div>
            <div className={classes.midPages}>
              <div className={classes.singlePage}>Login</div>
              <div className={classes.singlePage}>Sign Up</div>
              <div className={classes.singlePage}>Sing in</div>
              <div className={classes.singlePage}>Password</div>
              <div className={classes.singlePage}>Email</div>
            </div>
          </div>
          <div className={classes.midContent}>
            <div className={classes.midHeader}>Help</div>
            <div className={classes.midPages}>
              <div className={classes.singlePage}>Orders</div>
              <div className={classes.singlePage}>Returns</div>
              <div className={classes.singlePage}>Shipping</div>
              <div className={classes.singlePage}>Payment</div>
            </div>
          </div>
          <div className={classes.midContent}>
            <div className={classes.midHeader}>About us</div>
            <div className={classes.midPages}>
              <div className={classes.singlePage}>Careers</div>
              <div className={classes.singlePage}>Terms of Use</div>
              <div className={classes.singlePage}>Accessibility</div>
              <div className={classes.singlePage}>Gift Cards</div>
            </div>
          </div>
          <div className={classes.midContent}>
            <div className={classes.midHeader}>Suppliers</div>
            <div className={classes.midPages}>
              <div className={classes.singlePage}>Denim</div>
              <div className={classes.singlePage}>Zara</div>
              <div className={classes.singlePage}>Lee Cooper</div>
              <div className={classes.singlePage}>Nike</div>
              <div className={classes.singlePage}>Magnolia</div>
            </div>
          </div>
        </div>
        <div className={classes.lowerFooter}>
          Copyright © 2022 Design-X.com. All Rights Reserved for David and
          Steve.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
