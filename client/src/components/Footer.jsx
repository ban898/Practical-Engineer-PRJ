import React from "react";
import classes from "./Footer.module.css";
import BlueButton from "./BlueButton";
import logo from "../img/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

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
          <div className={classes.footerEmail}>Email</div>
          <div className={classes.footerPhone}>Phone</div>
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
            }}
          />{" "}
          <InstagramIcon
            sx={{
              paddingLeft: "10px",
              fontSize: "35px",
              paddingBottom: "12px",
            }}
          />
          <TwitterIcon
            sx={{
              paddingLeft: "10px",
              fontSize: "35px",
              paddingBottom: "12px",
            }}
          />{" "}
          <LinkedInIcon
            sx={{
              paddingLeft: "10px",
              fontSize: "35px",
              paddingBottom: "12px",
            }}
          />{" "}
          <YouTubeIcon
            sx={{
              paddingLeft: "10px",
              fontSize: "35px",
              paddingBottom: "12px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
