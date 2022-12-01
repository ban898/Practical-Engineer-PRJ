import { React, useEffect, useState } from "react";
import axios from "axios";

import CartItem from "../CartItem/CartItem";
import classes from "./CartModal.module.css";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartModal = ({ open, onClose }) => {
  const [cart, setCart] = useState({});

  // get cart of user
  useEffect(() => {
    const getCart = async () => {
      try {
        const res = await axios.get("/api/v1/carts");

        setCart(res.data.cart);
      } catch (err) {
        console.log(err.message);
      }
    };

    getCart();
  }, []);

  if (!open) return null;

  const stopPro = (e) => {
    e.stopPropagation();
  };

  const checkoutHandler = async () => {
    try {
      const res = await axios.post("/api/v1/stripe/checkout-session", {
        cart,
      });
      if (res.data.session.url) window.location.href = res.data.session.url;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes.overlay}>
      <div className={classes.cartContainer} onClick={stopPro}>
        <div className={classes.cartWrapper}>
          <div className={classes.cartHeader}>
            <ShoppingCartIcon />
            Your Shopping cart
          </div>
          <div className={classes.titles}>
            <div className={classes.miniHeaderOne}>Product</div>
            <div className={classes.miniHeader}>Price</div>
            <div className={classes.miniHeaderQ}>Quantity</div>
            <div className={classes.miniHeader}>Subtotal</div>
          </div>
          {cart.map((item) => {
            return (
              <CartItem
                key={item._id}
                img={item.photo}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
              />
            );
          })}
          <div className={classes.totalWrapper}>
            <div className={classes.text}>15 items in cart .</div>
            <div className={classes.finalTotal}>Total : 847.92 $</div>
          </div>
          <div className={classes.btnWrapper}>
            <div className={classes.continue} onClick={onClose}>
              Continue Shopping
            </div>
            <button onClick={checkoutHandler} className={classes.checkout}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartModal;

//-------------------------------------------------------------------------------------
// <div className={classes.productHead}>
// <div className={classes.itemHeader}>
//   Product
//   <div className={classes.three}>
//     <div className={classes.remove}>
//       <RemoveCircleOutlineIcon sx={{ color: red[500] }} />
//     </div>
//     <div className={classes.img}>img</div>
//     <div className={classes.desc}>
//       Shorts with hands bla bla bla bla bla
//     </div>
//   </div>
// </div>
// </div>
// <div className={classes.priceHead}>
// <div>Price</div>
// <div>32.00$</div>
// </div>
// <div className={classes.quantityHead}>
// <div>Quantity</div>
// <div className={classes.addRemove}>
//   <AddIcon sx={{ color: green[700] }} /> 3{" "}
//   <RemoveIcon sx={{ color: red[800] }} />
// </div>
// </div>
// <div className={classes.subHead}>
// <div> Subtotal</div>
// <div>96.00$</div>
// </div>
