import React, { useState } from "react";
import classes from "./Signup.module.css";
import logo from "../img/crmBlackWhite.png";
import TransLogo from "../img/Trans2Logo.png";
import SignupImg from "../img/sign.jpg";
import TextField from "@mui/material/TextField";
import BlueButton from "../components/BlueButton";
import TransparentButton from "../components/TransparentButton";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");

  const emailChangeHandler = (el) => {
    setEmail(el.target.value);
  };

  const passwordChangeHandler = (el) => {
    setPassword(el.target.value);
  };

  const passwordConfirmChangeHandler = (el) => {
    setPasswordConfirm(el.target.value);
  };

  const fNameChangeHandler = (el) => {
    setFirstName(el.target.value);
  };

  const lNameChangeHandler = (el) => {
    setLastName(el.target.value);
  };

  const addressChangeHandler = (el) => {
    setAddress(el.target.value);
  };

  const createUserHandler = async (event) => {
    event.preventDefault();

    const data = {
      email,
      password,
      passwordConfirm,
      firstName,
      lastName,
      address,
    };
    try {
      await axios.post("/api/v1/users/signup", { data });
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className={classes.signUpPadding}>
      <div className={classes.container}>
        <div className={classes.mainSignUp}>
          <div className={classes.signUpHeader}>
            <img src={logo} alt="logo" />
          </div>
          <div className={classes.signUpContent}>
            <div className={classes.leftSignUp}>
              <h1>Create your account</h1>
              <p>
                Create your CRM-X account today, it's free. Enter your
                credentials below and click <em>'Create Account'</em>
              </p>
              <div className={classes.signUpBox}>
                <form onSubmit={createUserHandler}>
                  <TextField
                    label="Email"
                    fullWidth
                    margin="normal"
                    value={email}
                    onChange={emailChangeHandler}
                  />
                  <TextField
                    label="First Name"
                    fullWidth
                    margin="normal"
                    value={firstName}
                    onChange={fNameChangeHandler}
                  />
                  <TextField
                    label="Last Name"
                    fullWidth
                    margin="normal"
                    value={lastName}
                    onChange={lNameChangeHandler}
                  />
                  <TextField
                    label="Address"
                    fullWidth
                    margin="normal"
                    value={address}
                    onChange={addressChangeHandler}
                  />
                  <TextField
                    label="Password"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={passwordChangeHandler}
                  />
                  <TextField
                    label="Confirm Password"
                    fullWidth
                    margin="normal"
                    value={passwordConfirm}
                    onChange={passwordConfirmChangeHandler}
                  />
                  <div className={classes.signUpButtons}>
                    <BlueButton buttonText={"Create Account"} />
                    <TransparentButton
                      buttonText={"Have an account ?"}
                      backgroundColor="gray"
                      fontSize="18.4"
                      fontWeight="500"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className={classes.rightSignUp}>
              <img src={SignupImg} alt="Sign up Slogan" />
            </div>
          </div>
        </div>
        <div className={classes.signFooter}>
          <div className={classes.signFooterLeft}>
            <img src={TransLogo} alt="Logo" />
          </div>
          <div className={classes.signFooterRight}>
            Copyright © CRM-X | Designed by David and Steve
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
