import React from "react";
import classes from "./Modal.module.css";
import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import KeyIcon from "@mui/icons-material/Key";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className={classes.overlay}>
      <div className={classes.modalWrapper}>
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
        <div>
          <div className={classes.connectBtns}>
            <button className={classes.loginBtn} onClick={onClose}>
              Login
            </button>
            <button className={classes.accBtn} onClick={onClose}>
              Already have an account ?
            </button>
          </div>
          <button className={classes.closeBtn} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
