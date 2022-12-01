import React from "react";

import classes from "./CartItem.module.css";

import Avatar from "@mui/material/Avatar";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { green, red } from "@mui/material/colors";

const CartItem = ({ img, name, price, quantity }) => {
  return (
    <div className={classes.itemWrapper}>
      <div className={classes.three}>
        <div className={classes.remove}>
          <RemoveCircleOutlineIcon sx={{ color: red[500] }} />
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
        <AddIcon sx={{ color: green[700] }} />
        <div>{quantity}</div>
        <RemoveIcon sx={{ color: red[800] }} />
      </div>
      <div className={classes.subtotal}>{price * quantity} $</div>
    </div>
  );
};

export default CartItem;
