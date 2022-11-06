import { NavLink, Link } from "react-router-dom";
import logo from "../img/logo.png";
import classes from "./MainNavigation.module.css";
import BlueButton from "./BlueButton";

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
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About-Us"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Pages
            </NavLink>
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
          <Link to="/" className={classes.login}>
            Login
          </Link>
          <BlueButton />
        </div>
      </nav>
    </header>
  );
}

export default MainNavigation;
