import React from "react";
import classes from "./Signup.module.css";
import logo from "../img/crmBlackWhite.png";
import TransLogo from "../img/Trans2Logo.png";
import SignupImg from "../img/sign.jpg";
import TextField from "@mui/material/TextField";
import BlueButton from "../components/BlueButton";
import TransparentButton from "../components/TransparentButton";
import { useNavigate } from "react-router";

const Signup = () => {
  let navigate = useNavigate();

  const routeChange = () => {
    let path = "/login";
    console.log(path);
    navigate(path);
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
                <form>
                  <TextField label="Email" fullWidth margin="normal" />
                  <TextField label="First Name" fullWidth margin="normal" />
                  <TextField label="Last Name" fullWidth margin="normal" />
                  <TextField label="Address" fullWidth margin="normal" />
                  <TextField label="Password" fullWidth margin="normal" />
                  <TextField
                    label="Confirm Password"
                    fullWidth
                    margin="normal"
                  />
                  <div className={classes.signUpButtons}>
                    <BlueButton buttonText={"Create Account"} />
                    <TransparentButton
                      buttonText="Have an account ?"
                      backgroundColor="gray"
                      fontSize="18.4px"
                      fontWeight="500"
                      onClick={routeChange}
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
