import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";
import axios from "axios";

import classes from "./MainNavigation.module.css";
import BlueButton from "../BlueButton/BlueButton";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import logo from "../../img/logo2.png";

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

  //Login State Handler
  const [isLogin, setIsLogin] = useState(false);

  const getUser = async () => {
    try {
      const res = await axios.get("/api/v1/users/me", {
        withCredentials: true,
        auth: true,
      });

      if (res.data.status === "success") setIsLogin(true);
      else {
        setIsLogin(false);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  //LogOut Handler
  const logOutHandler = () => {
    setIsLogin(false);
  };

  // Profile Box Handle

  let profileBox = isLogin ? (
    <div className={classes.profileContainer}>
      <Link to="/" className={classes.login} onClick={logOutHandler}>
        Log Out
      </Link>
      <span>
        <LogoutIcon
          className={classes.logOut}
          sx={{ color: "#339af0", marginTop: "5px" }}
        />
      </span>
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
        <ul className={classes.mainNavUl}>
          <li className={classes.mainNavLi}>
            <ScrollLink to="Home" smooth={true} offset={-30} duration={1000}>
              Home
            </ScrollLink>
          </li>
          <li className={classes.mainNavLi}>
            <ScrollLink
              to="Features"
              smooth={true}
              offset={-165}
              duration={1000}
            >
              Features
            </ScrollLink>
          </li>
          <li className={classes.mainNavLi}>
            <ScrollLink to="Pricing" smooth={true} offset={-65} duration={1000}>
              Pricing
            </ScrollLink>
          </li>
          <li className={classes.mainNavLi}>
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

//-------------------------------------------------------------------------------------
// import { Avatar, Fade } from "@mui/material";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";

// const [anchorEl, setAnchorEl] = useState(null);
//   const open = Boolean(anchorEl);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = async () => {
//     try {
//       setAnchorEl(null);

//       const res = await axios.get("/api/v1/users/logout");
//       console.log(res.data.status);
//       if (res.data.status === "success") window.location.reload(true);
//     } catch (err) {}
//   };

// let profileBox = isLogin ? (
//   <div className={classes.profileContainer}>
//     <Avatar
//       id="basic-button"
//       aria-controls={open ? "basic-menu" : undefined}
//       aria-haspopup="true"
//       aria-expanded={open ? "true" : undefined}
//       onClick={handleClick}
//     ></Avatar>
//     <Menu
//       sx={{ color: "#339af0" }}
//       id="basic-menu"
//       anchorEl={anchorEl}
//       open={open}
//       onClose={handleClose}
//       TransitionComponent={Fade}
//       MenuListProps={{
//         "aria-labelledby": "basic-button",
//       }}
//     >
//       <MenuItem onClick={handleClose}>Profile</MenuItem>
//       <MenuItem onClick={handleClose}>My account</MenuItem>
//       <MenuItem onClick={handleClose}>Logout</MenuItem>
//     </Menu>
//   </div>
// ) : (
//   <div className={classes.profileContainer}>
//     <span>
//       <LoginIcon sx={{ color: "#339af0", marginTop: "5px" }} />
//     </span>
//     <Link to="/login" className={classes.login}>
//       Login
//     </Link>
//   </div>
// );
