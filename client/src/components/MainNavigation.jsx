import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logo from "../img/logo2.png";
import classes from "./MainNavigation.module.css";
import BlueButton from "./BlueButton";
import LoginIcon from "@mui/icons-material/Login";
import { useState } from "react";
import { useEffect } from "react";

function MainNavigation() {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    const setFixed = () => {
      if (window.scrollY >= 142) {
        console.log("fix");
        setFix(true);
      } else {
        setFix(false);
      }
    };

    window.addEventListener("scroll", setFixed);
  }, [fix]);

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
          <span>
            <LoginIcon sx={{ color: "#339af0", marginTop: "5px" }} />
          </span>
          <Link to="/login" className={classes.login}>
            Login
          </Link>
          <BlueButton buttonText={"Go to Store"} />
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;

//-------------------------------------------------------------------------------------
