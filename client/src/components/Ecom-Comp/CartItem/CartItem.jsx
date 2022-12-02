import React, { useState } from "react";

import classes from "./CartItem.module.css";

import Avatar from "@mui/material/Avatar";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { green, red } from "@mui/material/colors";
import axios from "axios";

const CartItem = ({ img, name, price, quantity, productId }) => {
  const [quantityShow, setQuantityShow] = useState(quantity);

  const addQuantityHandler = async () => {
    try {
      const res = await axios.patch("/api/v1/cart/addQuantity", { productId });

      setQuantityShow(res.data.quantity);
    } catch (err) {
      console.log(err.message);
    }
  };

  const removeQuantityHandler = async () => {
    try {
      const res = await axios.patch("/api/v1/cart/removeQuantity", {
        productId,
      });

      setQuantityShow(res.data.quantity);
    } catch (err) {
      console.log(err.message);
    }
  };

  const deleteItemHandler = async () => {
    try {
      await axios.delete(`/api/v1/cart/deleteItem/${productId}`);

      setQuantityShow(null);
      // img = null;
      // name = null;
      // price = null;
      // quantity = null;
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={classes.itemWrapper}>
      <div className={classes.three}>
        <div className={classes.remove}>
          <RemoveCircleOutlineIcon
            onClick={deleteItemHandler}
            sx={{ color: red[500] }}
          />
        </div>
        <div className={classes.img}>
          <Avatar
            src={`/img/products/${img}`}
            alt={img}
            style={{ width: "48px", height: "48px" }}
            // sx={{ width: 48, height: 48 }}
          />
        </div>
        <div className={classes.desc}>{name}</div>
      </div>
      <div className={classes.price}>{price} $</div>
      <div className={classes.quantity}>
        <AddIcon onClick={addQuantityHandler} sx={{ color: green[700] }} />
        <div>{quantityShow}</div>
        <RemoveIcon onClick={removeQuantityHandler} sx={{ color: red[800] }} />
      </div>
      <div className={classes.subtotal}>{price * quantityShow} $</div>
    </div>
  );
};

export default CartItem;
