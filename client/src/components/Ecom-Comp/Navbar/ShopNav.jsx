import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import classes from "./ShopNav.module.css";

import Modal from "../LoginModal/Modal";
import CartIcon from "../CartIcon/CartIcon";
import CartCount from "../CartCount/CartCount";
import CartModal from "../CartModal/CartModal";
import ProfileMenu from "../ProfileMenu/ProfileMenu";

import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";

import axios from "axios";

const ShopNav = ({ cart, itemsInCart, totalAmount, getCart }) => {
  //Handle Cart Modal
  const [cartOpen, setCartOpen] = useState(false);

  // Check if user Logget in
  const [isLogin, setIsLogin] = useState(undefined);
  const checkLoginHandler = (isLoggeIn) => {
    setIsLogin(isLoggeIn);
  };

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
      // console.error(err.message);
    }
  };

  // Log out
  const logOutHandler = async () => {
    try {
      await axios.get("/api/v1/users/logout");
      setIsLogin(false);
      await getCart();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getUserOneTime = async () => {
      await getUser();
    };
    getUserOneTime();
  }, []);

  //Handle Login Modal
  const [isOpen, setIsOpen] = useState(false);

  const handleLoginOpen = () => {
    setIsOpen(true);
  };

  const handleLoginClose = () => {
    setIsOpen(false);
  };

  //Handling Navbar Color change when scrolling
  const [colorChange, setColorChnage] = useState(false);

  const changeNavColor = () => {
    if (window.scrollY >= 50) {
      setColorChnage(true);
    } else {
      setColorChnage(false);
    }
  };

  window.addEventListener("scroll", changeNavColor);

  const navbarClasses = colorChange ? classes.colorNav : classes.navbar;

  //Handle ProfileMenu List
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    console.log("click");
    setMenuOpen((menuOpen) => !menuOpen);
  };

  return (
    <div className={navbarClasses}>
      <div className={classes.navbarLeft}>
        <Link className={classes.logo} to="/">
          Design-X
        </Link>
      </div>
      <div className={classes.navbarRight}>
        <div
          className={classes.cartContainer}
          onClick={() => {
            setCartOpen(true);
          }}
        >
          <CartIcon>
            <CartCount count={itemsInCart} />
          </CartIcon>
          <CartModal
            getCart={getCart}
            cart={cart}
            itemsInCart={itemsInCart}
            totalAmount={totalAmount}
            open={cartOpen}
            onClose={() => {
              setCartOpen(false);
            }}
          />
        </div>
        <div className={classes.loginBox}>
          {!isLogin ? (
            <div className={classes.login} onClick={handleLoginOpen}>
              <h5 style={{ cursor: "pointer" }}>Log in</h5>
              <LoginIcon fontSize="medium" />
            </div>
          ) : (
            <div className={classes.login} onClick={toggleMenu}>
              <h5 style={{ cursor: "pointer" }}>Log out</h5>
              <LogoutIcon fontSize="medium" />
              {menuOpen ? <ProfileMenu logOut={logOutHandler} /> : ""}
            </div>
          )}
          <Modal
            getCart={getCart}
            open={isOpen}
            onClose={handleLoginClose}
            onCheckLogin={checkLoginHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopNav;

//-------------------------------------------------------------------------------------
// import SearchIcon from "@mui/icons-material/Search";
// <div className={classes.search}>
//           <input
//             className={classes.customInput}
//             list="exampleList"
//             type="text"
//           />
//           <select className={classes.customSelect} id="exampleList">
//             <option value="all">All</option>
//             <option value="women">Women</option>
//             <option value="men">Men</option>
//           </select>
//           <SearchIcon
//             sx={{
//               position: "absolute",
//               left: "90%",
//               borderLeft: "1px solid",
//             }}
//           />
//         </div>
