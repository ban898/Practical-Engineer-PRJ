import React from "react";

import classes from "./CartItem.module.css";

import Avatar from "@mui/material/Avatar";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { green, red } from "@mui/material/colors";
import axios from "axios";

const CartItem = ({
  size,
  img,
  name,
  price,
  quantity,
  productId,
  onRenderCart,
}) => {
  const addQuantityHandler = async () => {
    try {
      await axios.patch(`/api/v1/cart/addQuantity/`, { productId, size });
      await onRenderCart();
    } catch (err) {
      console.log(err.message);
    }
  };

  const removeQuantityHandler = async () => {
    try {
      await axios.patch("/api/v1/cart/removeQuantity", {
        productId,
        size,
      });

      await onRenderCart();
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteItemHandler = async () => {
    try {
      console.log(productId, size);
      await axios.delete(`/api/v1/cart/deleteItem/${productId}&${size}`);
      await onRenderCart();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={classes.itemWrapper}>
      <div className={classes.three}>
        <div className={classes.remove} onClick={deleteItemHandler}>
          <RemoveCircleOutlineIcon
            sx={{ color: red[500], cursor: "pointer" }}
          />
        </div>
        <div className={classes.img}>
          <Avatar
            src={`/img/products/${img}`}
            alt={img}
            sx={{ width: 48, height: 48 }}
          />
        </div>
        <div className={classes.desc}>{name}</div>
      </div>
      <div className={classes.price}>{price} $</div>
      <div className={classes.quantity}>
        <AddIcon onClick={addQuantityHandler} sx={{ color: green[700] }} />
        <div>{quantity}</div>
        <RemoveIcon onClick={removeQuantityHandler} sx={{ color: red[800] }} />
      </div>
      <div className={classes.size}>{size}</div>
      <div className={classes.subtotal}>{price * quantity} $</div>
    </div>
  );
};

export default CartItem;
