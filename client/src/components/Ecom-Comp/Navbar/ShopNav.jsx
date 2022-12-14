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
import SearchIcon from "@mui/icons-material/Search";

import axios from "axios";

const ShopNav = () => {
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

  // for the amount of products in the cart
  const [cart, setCart] = useState(undefined);
  const [itemsInCart, setItemsInCart] = useState("0");
  const [totalAmount, setTotalAmount] = useState("0");

  const getCart = async () => {
    try {
      const res = await axios.get("/api/v1/cart");

      if (res.data.length !== 0) {
        setItemsInCart(res.data.itemsInCart);
        setTotalAmount(res.data.total);
        setCart(res.data.cart);
      } else {
        setItemsInCart("0");
        setTotalAmount("0");
        setCart(null);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    const getCartOneTime = async () => {
      await getCart();
    };
    const getUserOneTime = async () => {
      await getUser();
    };
    getUserOneTime();
    getCartOneTime();
  }, []);

  //Handle Login Modal
  const [isOpen, setIsOpen] = useState(false);

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
        <div className={classes.search}>
          <input
            className={classes.customInput}
            list="exampleList"
            type="text"
          />
          <select className={classes.customSelect} id="exampleList">
            <option value="all">All</option>
            <option value="women">Women</option>
            <option value="men">Men</option>
          </select>
          <SearchIcon
            sx={{
              position: "absolute",
              left: "90%",
              borderLeft: "1px solid",
            }}
          />
        </div>
        <div
          className={classes.cartContainer}
          onClick={() => setCartOpen(true)}
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
            <div className={classes.login}>
              <h5 style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)}>
                Log in
              </h5>
              <LoginIcon fontSize="medium" onClick={() => setIsOpen(true)} />
            </div>
          ) : (
            <div className={classes.login}>
              <h5 style={{ cursor: "pointer" }} onClick={toggleMenu}>
                Log out
              </h5>
              <LogoutIcon fontSize="medium" onClick={toggleMenu} />
              {!menuOpen ? <ProfileMenu logOut={logOutHandler} /> : ""}
            </div>
          )}
          <Modal
            getCart={getCart}
            open={isOpen}
            onClose={() => setIsOpen(false)}
            onCheckLogin={checkLoginHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default ShopNav;

//-------------------------------------------------------------------------------------
// <Link className={classes.logo} to="/">
//           Design-X
//         </Link>
//         <ScrollLink to="Discounts" smooth={true} offset={-60} duration={1000}>
//           Discounts
//         </ScrollLink>
//         <ScrollLink to="Categories" smooth={true} offset={-10} duration={1000}>
//           Categories
//         </ScrollLink>
//         <ScrollLink to="About Us" smooth={true} offset={-10} duration={1000}>
//           About Us
//         </ScrollLink>

//-------------------------------------------------------------------------------------
// {!isLogin ? <Link to="/">Profile</Link> : ""}

//-------------------------------------------------------------------------------------
// <LogoutIcon fontSize="medium" onClick={logOutHandler} />
