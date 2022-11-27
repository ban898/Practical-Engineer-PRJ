import React from "react";
import classes from "./CartCount.module.css";

const CartCount = ({ count }) => {
  return <div className={classes.count}>{count}</div>;
};

export default CartCount;
