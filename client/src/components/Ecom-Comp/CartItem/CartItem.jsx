import React, { useState } from "react";

import classes from "./CartItem.module.css";

import Avatar from "@mui/material/Avatar";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { green, red } from "@mui/material/colors";
import axios from "axios";

import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const CartItem = ({
  size,
  img,
  name,
  price,
  quantity,
  productId,
  onRenderCart,
}) => {
  const [addQnt, setAddQnt] = useState(false);
  const [removeQnt, setRemoveQnt] = useState(false);
  const [removeItem, setRemoveItem] = useState(false);

  const addQuantityHandler = async () => {
    setAddQnt(true);
    try {
      const user = await axios.get("/api/v1/users/me");
      await axios.patch(`/api/v1/cart/addQuantity/`, {
        productId,
        size,
        userId: user.data.user._id,
      });
      await onRenderCart();
    } catch (err) {
      console.log(err.message);
    }
    setAddQnt(false);
  };

  const removeQuantityHandler = async () => {
    setRemoveQnt(true);
    try {
      const user = await axios.get("/api/v1/users/me");
      await axios.patch("/api/v1/cart/removeQuantity", {
        productId,
        size,
        userId: user.data.user._id,
      });

      await onRenderCart();
    } catch (err) {
      console.log(err.message);
    }
    setRemoveQnt(false);
  };

  const deleteItemHandler = async () => {
    setRemoveItem(true);
    try {
      const user = await axios.get("/api/v1/users/me");
      const userId = user.data.user._id;
      await axios.delete(
        `/api/v1/cart/deleteItem/${productId}&${size}&${userId}`
      );
      await onRenderCart();
    } catch (err) {
      console.log(err.message);
    }
    setRemoveItem(false);
  };

  return (
    <div className={classes.itemWrapper}>
      <div className={classes.three}>
        <div className={classes.remove} onClick={deleteItemHandler}>
          {removeItem ? (
            <Box sx={{ display: "flex" }}>
              <CircularProgress sx={{ color: red[500] }} size="1.5rem" />
            </Box>
          ) : (
            <RemoveCircleOutlineIcon
              sx={{ color: red[500], cursor: "pointer" }}
            />
          )}
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
        {addQnt ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress size="1rem" color="success" />
          </Box>
        ) : (
          <AddIcon onClick={addQuantityHandler} sx={{ color: green[700] }} />
        )}
        <div>{quantity}</div>
        {removeQnt ? (
          <Box sx={{ display: "flex" }}>
            <CircularProgress size="1rem" color="error" />
          </Box>
        ) : (
          <RemoveIcon
            onClick={removeQuantityHandler}
            sx={{ color: red[800] }}
          />
        )}
      </div>
      <div className={classes.size}>{size}</div>
      <div className={classes.subtotal}>{price * quantity} $</div>
    </div>
  );
};

export default CartItem;
