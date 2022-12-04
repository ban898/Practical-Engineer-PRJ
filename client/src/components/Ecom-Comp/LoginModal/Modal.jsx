import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import classes from "./Modal.module.css";
import BlueButton from "../../BlueButton/BlueButton";
import TransparentButton from "../../TransparentButton/TransparentButton";

import Box from "@mui/material/Box";
import AccountCircle from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import KeyIcon from "@mui/icons-material/Key";
import axios from "axios";

const Modal = ({ open, onClose, onCheckLogin, getCart }) => {
  //Validation
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  //Inputs
  const [emailInput, setEmailInput] = useState(true);
  const [passwordInput, setPasswordInput] = useState(true);

  const emailInputHandler = (event) => {
    setEmailInput(event.target.value);
  };
  const passwordInputHandler = (event) => {
    setPasswordInput(event.target.value);
  };

  //Navigations

  const navigate = useNavigate();

  const moveToSignUp = () => {
    navigate("/shop/signup");
  };

  //Close modal when login correct
  const moveToHomePage = () => {
    closeModal();
  };

  //Stop Propagation
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

  const loginHandler = async (event) => {
    event.preventDefault();

    const email = emailInput.toString();
    const password = passwordInput.toString();

    if (email.trim() === "" || email.includes("@") === false) {
      setEmailIsValid(false);
      return;
    }

    if (password.trim() === "" || password.length < 6) {
      setPasswordIsValid(false);
      return;
    }

    setPasswordIsValid(true);
    setEmailIsValid(true);

    const user = {
      email: email,
      password: password,
    };

    try {
      await axios.post("/api/v1/users/login", { user });
      getCart();
      onCheckLogin(true);
      moveToHomePage();
    } catch (error) {
      onCheckLogin(false);
    }
  };

  let incEmail = !emailIsValid ? (
    <p className={classes.error}>Incorrect Email</p>
  ) : (
    ""
  );

  let incPass = !passwordIsValid ? (
    <p className={classes.error}>Incorrect Password</p>
  ) : (
    ""
  );

  return (
    <div
      className={`${classes.overlay} ${classes.disableScroll}`}
      onClick={closeModal}
    >
      <div className={classes.modalWrapper} onClick={stopPro}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            color={"otherColor"}
            id="input-with-sx"
            label="Email"
            variant="standard"
            type="email"
            onChange={emailInputHandler}
          />
        </Box>
        {incEmail}
        <Box
          sx={{ display: "flex", alignItems: "flex-end", marginBottom: "5px" }}
        >
          <KeyIcon sx={{ mr: 1, my: 0.5 }} />
          <TextField
            label="Password"
            variant="standard"
            color="otherColor"
            type="password"
            onChange={passwordInputHandler}
          />
        </Box>
        {incPass}
        <BlueButton
          buttonText="Login"
          padding="7px"
          fontSize="13.3px"
          backgroundColor="black"
          onClick={loginHandler}
        />
        <TransparentButton
          buttonText="Create an Account"
          padding="7px"
          backgroundColor="#e03131"
          onClick={moveToSignUp}
        />
      </div>
    </div>
  );
};

export default Modal;
