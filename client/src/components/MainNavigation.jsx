import { NavLink, Link } from "react-router-dom";
import logo from "../img/logo2.png";
import classes from "./MainNavigation.module.css";
import BlueButton from "./BlueButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LoginIcon from "@mui/icons-material/Login";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav className={classes.navBar}>
        <img className={classes.logo} src={logo} alt="logo"></img>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Products
            </NavLink>
          </li>
          <li>
            <Link to="/Pages" className={classes.pages}>
              <span>Pages</span>
              <ExpandMoreIcon />
            </Link>
          </li>
          <li>
            <NavLink
              to="/Sign-Up"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Cart
            </NavLink>
          </li>
        </ul>
        <div className={classes.navEnd}>
          <span>
            <LoginIcon sx={{ color: "#339af0", marginTop: "5px" }} />
          </span>
          <Link to="/login" className={classes.login}>
            Login
          </Link>
          <BlueButton />
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;

//-------------------------------------------------------------------------------------
