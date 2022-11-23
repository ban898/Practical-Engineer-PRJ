import React, { useEffect } from "react";
import classes from "./Modal.module.css";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import KeyIcon from "@mui/icons-material/Key";
import BlueButton from "../../components/BlueButton";
import TransparentButton from "../../components/TransparentButton";

const Modal = ({ open, onClose }) => {
  const stopPro = (e) => {
    e.stopPropagation();
  };

  //Close the modal when clicked outside of the modal
  const closeModal = () => {
    onClose();
  };

  //Prevent Scrolling when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  if (!open) return null;

  //Need to Add new DB with Login methods

  //Need to implement those methods on the login button

  //Then to useState to handle ifLogin is true and render login/logout button

  return (
    <div
      className={`${classes.overlay} ${classes.disableScroll}`}
      onClick={closeModal}
    >
      <div className={classes.modalWrapper} onClick={stopPro}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Email" variant="standard" />
        </Box>
        <Box
          sx={{ display: "flex", alignItems: "flex-end", marginBottom: "5px" }}
        >
          <KeyIcon sx={{ mr: 1, my: 0.5 }} />
          <TextField
            label="Password"
            variant="standard"
            sx={{
              "&MuiFormLabel-root": {
                color: "Eshop",
              },
              "&MuiInput-root": {
                color: "Eshop",
              },
            }}
          />
        </Box>
        <BlueButton
          buttonText="Login"
          padding="7px"
          fontSize="13.3px"
          backgroundColor="black"
        />
        <TransparentButton
          buttonText="Existing Account"
          padding="7px"
          backgroundColor="#e03131"
        />
      </div>
    </div>
  );
};

export default Modal;

//-------------------------------------------------------------------------------------
// <div>
// <div className={classes.connectBtns}>
//   <button className={classes.loginBtn} onClick={onClose}>
//     Login
//   </button>
//   <button className={classes.accBtn} onClick={onClose}>
//     Already have an account ?
//   </button>
// </div>
// <button className={classes.closeBtn} onClick={onClose}>
//   Close
// </button>
// </div>
