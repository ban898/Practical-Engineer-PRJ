import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
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
            <NavLink
              to="/About-Us"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Sign-in"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              end
            >
              Sign-in
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
