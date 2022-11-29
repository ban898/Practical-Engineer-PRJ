import React from "react";

import BlueButton from "../BlueButton/BlueButton";

import classes from "./Footer.module.css";
import logo from "../../img/logo2.png";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

const Footer = () => {
  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footerTop}>
        <div className={classes.footerTopLeft}>
          <img className={classes.logo} src={logo} alt="logo" />
        </div>
        <div className={classes.footerTopRight}>
          <div className={classes.topRightEmail}>
            Subscribe to get latest news
          </div>
          <div className={classes.emailSubmit}>
            <input
              className={classes.emailInput}
              type="email"
              id="email"
              placeholder="enter your email"
            ></input>
            <div className={classes.btn}>
              <BlueButton buttonText={"Send Email"} />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footerMain}>
        <div className={classes.footerMenuWrapper}>
          <div className={classes.footerTitle}>Main Pages</div>
          <div className={classes.footerContent}>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Blog</li>
              <li>Pages</li>
              <li>Pricing</li>
              <li>Cart</li>
              <li>Login</li>
              <li>Sign Up</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className={classes.footerMenuWrapper}>
          <div className={classes.footerTitle}>Company</div>
          <div className={classes.footerContent}>
            <ul>
              <li>Jobs</li>
              <li>Jobs Single</li>
              <li>Help Center</li>
              <li>Help Center Category</li>
              <li>Help Center Single</li>
              <li>Email Confirmation</li>
              <li>Recruits</li>
              <li>Work with us</li>
              <li>Apply</li>
            </ul>
          </div>
        </div>
        <div className={classes.footerMenuWrapper}>
          <div className={classes.footerTitle}>Utility Pages</div>
          <div className={classes.footerContent}>
            <ul>
              <li>Sign In</li>
              <li>Sign Up</li>
              <li>Forgot Password</li>
              <li>Reset Password</li>
              <li>Confirm Your Email</li>
              <li>Request a Demo</li>
              <li>Landing Page</li>
              <li>Coming Soon</li>
            </ul>
          </div>
        </div>
        <div className={classes.footerMenuWrapper}>
          <div className={classes.footerTitle}>Contact us</div>
          <div className={classes.footerEmail}>
            <MailOutlineIcon />
            <div>
              Email
              <div className={classes.emailText}>Davidface2@gmail.com</div>
            </div>
          </div>
          <div className={classes.footerPhone}>
            <CallOutlinedIcon />
            <div>
              Phone
              <div className={classes.phoneText}>(+972)54-7657085</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footerBot}>
        <p className={classes.copyRight}>
          Copyright &#169; CRM-X | Designed by David and Steve
        </p>
        <div className={classes.icons}>
          <FacebookIcon
            sx={{
              paddingLeft: "10px",
              fontSize: "35px",
              paddingBottom: "12px",
              cursor: "pointer",
            }}
          />{" "}
          <InstagramIcon
            sx={{
              paddingLeft: "10px",
              fontSize: "35px",
              paddingBottom: "12px",
              cursor: "pointer",
            }}
          />
          <TwitterIcon
            sx={{
              paddingLeft: "10px",
              fontSize: "35px",
              paddingBottom: "12px",

              cursor: "pointer",
            }}
          />{" "}
          <LinkedInIcon
            sx={{
              paddingLeft: "10px",
              fontSize: "35px",
              paddingBottom: "12px",
              cursor: "pointer",
            }}
          />{" "}
          <YouTubeIcon
            sx={{
              paddingLeft: "10px",
              fontSize: "35px",
              paddingBottom: "12px",
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
