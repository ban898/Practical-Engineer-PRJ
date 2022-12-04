import { React, useEffect, useState, useRef } from "react";
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
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [emailInput, setEmailInput] = useState(true);
  const [passwordInput, setPasswordInput] = useState(true);

  const emailInputHandler = (event) => {
    setEmailInput(event.target.value);
  };
  const passwordInputHandler = (event) => {
    setPasswordInput(event.target.value);
  };

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const navigate = useNavigate();

  const moveToSignUp = () => {
    navigate("/shop/signup");
  };

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

  //Need to Add new DB with Login methods
  const loginHandler = async (event) => {
    event.preventDefault();

    // const email = emailInputRef.current.value;
    // const password = passwordInputRef.current.value;

    const email = emailInput;
    const password = passwordInput;

    //if email match the email from mongoDB
    //instead of the if below
    if (email.trim() === "" || email.includes("@") === false) {
      setEmailIsValid(false);
      return;
    }

    //if password match the password from mongoDB
    //instead of the if below
    if (password.trim() === "" || password.length < 6) {
      passwordIsValid(false);
      return;
    }

    setPasswordIsValid(true);
    setEmailIsValid(true);

    const user = {
      email: email,
      password: password,
    };

    // Here need to POST to MongoDB the user OBJECT
    try {
      await axios.post("/api/v1/users/login", { user });
      // setUserName(res.data.user.firstName);
      getCart();
      onCheckLogin(true);
      moveToHomePage();
      // window.location.reload(true);
    } catch (error) {
      onCheckLogin(false);
    }
  };

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
          <TextField
            color={"otherColor"}
            id="input-with-sx"
            label="Email"
            variant="standard"
            onChange={emailInputHandler}
            ref={emailInputRef}
            autoComplete="true"
          />
        </Box>
        {!emailIsValid && <p>Incorrect Email</p>}
        <Box
          sx={{ display: "flex", alignItems: "flex-end", marginBottom: "5px" }}
        >
          <KeyIcon sx={{ mr: 1, my: 0.5 }} />
          <TextField
            label="Password"
            variant="standard"
            color="otherColor"
            onChange={passwordInputHandler}
            ref={passwordInputRef}
          />
        </Box>
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
