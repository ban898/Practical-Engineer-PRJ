import React, { useEffect, useState } from "react";
import ShopNav from "../Navbar/ShopNav";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router";
import axios from "axios";

const ProfileLayout = () => {
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
    const getOneTimeCart = async () => {
      await getCart();
    };

    getOneTimeCart();
  }, []);

  return (
    <div>
      <ShopNav
        getCart={getCart}
        cart={cart}
        itemsInCart={itemsInCart}
        totalAmount={totalAmount}
      />
      <Outlet />
      <Footer />
    </div>
  );
};

export default ProfileLayout;
