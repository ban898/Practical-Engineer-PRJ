import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import axios from "axios";

import classes from "./MainNavigation.module.css";
import BlueButton from "./BlueButton";

import LoginIcon from "@mui/icons-material/Login";
import { Avatar, Fade } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import logo from "../img/logo2.png";

function MainNavigation() {
  //Navigation

  const navigate = useNavigate();

  const moveToDemoSite = () => {
    navigate("/shop");
  };

  //Scroll Handle
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const setFixed = () => {
      if (window.scrollY >= 142) {
        setFix(true);
      } else {
        setFix(false);
      }
    };

    window.addEventListener("scroll", setFixed);
  }, [fix]);

  //Profile Handle
  const [isLogin, setIsLogin] = useState(false);

  const getUser = async () => {
    try {
      await axios
        .get("/api/v1/users/me", { withCredentials: true, auth: true })
        .then((res) => {
          console.log(res);
          if (res.data.status === "success") setIsLogin(true);
        });
    } catch (err) {
      console.error(err);
    }
  };

  getUser();

  // Profile Box Handle
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let profileBox = isLogin ? (
    <div className={classes.profileContainer}>
      <Avatar
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      ></Avatar>
      <Menu
        sx={{ color: "#339af0" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  ) : (
    <div className={classes.profileContainer}>
      <span>
        <LoginIcon sx={{ color: "#339af0", marginTop: "5px" }} />
      </span>
      <Link to="/login" className={classes.login}>
        Login
      </Link>
    </div>
  );

  return (
    <header className={classes.header}>
      <nav className={fix ? classes.fixedNav : classes.navBar}>
        <img className={classes.logo} src={logo} alt="logo"></img>
        <ul>
          <li>
            <ScrollLink to="Home" smooth={true} offset={-30} duration={1000}>
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="Features"
              smooth={true}
              offset={-165}
              duration={1000}
            >
              Features
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="Pricing" smooth={true} offset={-65} duration={1000}>
              Pricing
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="About-Us"
              smooth={true}
              offset={-165}
              duration={1000}
            >
              About Us
            </ScrollLink>
          </li>
        </ul>
        <div className={classes.navEnd}>
          {profileBox}
          <BlueButton buttonText="Go to Store" onClick={moveToDemoSite} />
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
