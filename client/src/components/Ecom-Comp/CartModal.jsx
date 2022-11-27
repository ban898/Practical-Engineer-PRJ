import React from "react";
import classes from "./CartModal.module.css";

import Avatar from "@mui/material/Avatar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { green, red } from "@mui/material/colors";

import dimg from "../../img/ShopImg/denims.jpg";

const CartModal = ({ open, onClose }) => {
  if (!open) return null;

  const stopPro = (e) => {
    e.stopPropagation();
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
            <div className={classes.miniHeader}>Quantity</div>
            <div className={classes.miniHeader}>Subtotal</div>
          </div>
          {/*Here need to map list of item */}
          {/* map(item => { itemWrapper }) */}
          <div className={classes.itemWrapper}>
            <div className={classes.three}>
              <div className={classes.remove}>
                <RemoveCircleOutlineIcon sx={{ color: red[500] }} />
              </div>
              <div className={classes.img}>
                <Avatar src={dimg} sx={{ width: 48, height: 48 }} />
              </div>
              <div className={classes.desc}>
                Shorts with hands bla bla bla bla bla
              </div>
            </div>
            <div className={classes.price}>14.00 $</div>
            <div className={classes.quantity}>
              <AddIcon sx={{ color: green[700] }} />
              <div>3</div>
              <RemoveIcon sx={{ color: red[800] }} />
            </div>
            <div className={classes.subtotal}>96.99 $</div>
          </div>
          <div className={classes.itemWrapper}>
            <div className={classes.three}>
              <div className={classes.remove}>
                <RemoveCircleOutlineIcon sx={{ color: red[500] }} />
              </div>
              <div className={classes.img}>
                <Avatar src={dimg} sx={{ width: 48, height: 48 }} />
              </div>
              <div className={classes.desc}>
                Shorts with hands bla bla bla bla bla
              </div>
            </div>
            <div className={classes.price}>14.00 $</div>
            <div className={classes.quantity}>
              <AddIcon sx={{ color: green[700] }} />
              <div>3</div>
              <RemoveIcon sx={{ color: red[800] }} />
            </div>
            <div className={classes.subtotal}>96.99 $</div>
          </div>
          <div className={classes.itemWrapper}>
            <div className={classes.three}>
              <div className={classes.remove}>
                <RemoveCircleOutlineIcon sx={{ color: red[500] }} />
              </div>
              <div className={classes.img}>
                <Avatar src={dimg} sx={{ width: 48, height: 48 }} />
              </div>
              <div className={classes.desc}>
                Shorts with hands bla bla bla bla bla
              </div>
            </div>
            <div className={classes.price}>14.00 $</div>
            <div className={classes.quantity}>
              <AddIcon sx={{ color: green[700] }} />
              <div>3</div>
              <RemoveIcon sx={{ color: red[800] }} />
            </div>
            <div className={classes.subtotal}>96.99 $</div>
          </div>
          <div className={classes.itemWrapper}>
            <div className={classes.three}>
              <div className={classes.remove}>
                <RemoveCircleOutlineIcon sx={{ color: red[500] }} />
              </div>
              <div className={classes.img}>
                <Avatar src={dimg} sx={{ width: 48, height: 48 }} />
              </div>
              <div className={classes.desc}>
                Shorts with hands bla bla bla bla bla
              </div>
            </div>
            <div className={classes.price}>14.00 $</div>
            <div className={classes.quantity}>
              <AddIcon sx={{ color: green[700] }} />
              <div>3</div>
              <RemoveIcon sx={{ color: red[800] }} />
            </div>
            <div className={classes.subtotal}>96.99 $</div>
          </div>
          <div className={classes.itemWrapper}>
            <div className={classes.three}>
              <div className={classes.remove}>
                <RemoveCircleOutlineIcon sx={{ color: red[500] }} />
              </div>
              <div className={classes.img}>
                <Avatar src={dimg} sx={{ width: 48, height: 48 }} />
              </div>
              <div className={classes.desc}>
                Shorts with hands bla bla bla bla bla
              </div>
            </div>
            <div className={classes.price}>14.00 $</div>
            <div className={classes.quantity}>
              <AddIcon sx={{ color: green[700] }} />
              <div>3</div>
              <RemoveIcon sx={{ color: red[800] }} />
            </div>
            <div className={classes.subtotal}>96.99 $</div>
          </div>
          <div className={classes.totalWrapper}>
            <div className={classes.text}>15 items in cart .</div>
            <div className={classes.finalTotal}>Total : 847.92 $</div>
          </div>
          <div className={classes.btnWrapper}>
            <div className={classes.continue} onClick={onClose}>
              Continue Shopping
            </div>
            <div className={classes.checkout}>Checkout</div>
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
