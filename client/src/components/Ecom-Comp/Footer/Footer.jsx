import React from "react";
import { useNavigate } from "react-router";

import classes from "./Footer.module.css";

import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "@mui/material";

const Footer = () => {
  const navigate = useNavigate();

  const moveToSignUp = () => {
    navigate("signup");
  };

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
              <div className={classes.singlePage} onClick={moveToSignUp}>
                Login
              </div>
              <div className={classes.singlePage} onClick={moveToSignUp}>
                Sign Up
              </div>
            </div>
          </div>
          <div className={classes.midContent}>
            <div className={classes.midHeader}>Suppliers</div>
            <div className={classes.midPages}>
              <div className={classes.singlePage}>
                <Link href="https://www.adidas.com/us">Adidas</Link>
              </div>
              <div className={classes.singlePage}>
                <Link href="https://www.bershka.com/">Bershka</Link>
              </div>
              <div className={classes.singlePage}>
                <Link href="https://www.asos.com/">Asos</Link>
              </div>
              <div className={classes.singlePage}>
                <Link href="https://il.shein.com/">Shein</Link>
              </div>
            </div>
          </div>
          <div className={classes.midContent}>
            <div className={classes.midHeader}>More Suppliers</div>
            <div className={classes.midPages}>
              <div className={classes.singlePage}>
                <Link href="https://www.next.co.il/en/shop/gender-men-category-jeans-0">
                  Next
                </Link>
              </div>
              <div className={classes.singlePage}>
                {" "}
                <Link href="https://usa.tommy.com/en">Tommy</Link>
              </div>
              <div className={classes.singlePage}>
                {" "}
                <Link href="https://www.leecooper.co.il/%D7%92%D7%91%D7%A8%D7%99%D7%9D">
                  Lee Cooper
                </Link>
              </div>
              <div className={classes.singlePage}>
                {" "}
                <Link href="https://www.magnolia.co.il/">Magnolia</Link>
              </div>
              <div className={classes.singlePage}>
                {" "}
                <Link href="https://www.nike.com/il/">Nike</Link>
              </div>
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

//-------------------------------------------------------------------------------------
// <div className={classes.midContent}>
//             <div className={classes.midHeader}>Help</div>
//             <div className={classes.midPages}>
//               <div className={classes.singlePage}>Orders</div>
//               <div className={classes.singlePage}>Returns</div>
//               <div className={classes.singlePage}>Shipping</div>
//               <div className={classes.singlePage}>Payment</div>
//             </div>
//           </div>
