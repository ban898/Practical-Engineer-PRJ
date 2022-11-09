import React from "react";
import classes from "./Login.module.css";
import imageBg from "../img/loginBG.jpeg";

const Login = () => {
  return (
    <div className={classes.container}>
      <div className={classes["login-left"]}>
        <div className={classes["login-header"]}>
          <h1>Welcome to our application</h1>
          <p>Please login to use the platform</p>
        </div>
        <form className={classes["login-form"]}>
          <div className={classes["login-form-content"]}>
            <div className={classes["form-item"]}>
              <label htmlfor="email">Enter Email</label>
              <input type="text" id="email" />
            </div>
            <div className={classes["form-item"]}>
              <label htmlfor="password">Enter Password</label>
              <input type="password" id="password" />
            </div>
            <div className={classes["form-item"]}>
              <div className={classes.checkbox}>
                <input type="checkbox" id="rememberMeCheckbox" />
                <label htmlfor="rememberMeCheckbox" id="checkboxLabel">
                  Remember me
                </label>
              </div>
            </div>
            <button type="submit">Sign In</button>
          </div>
          <div className={classes["login-form-footer"]}>
            <a href="#">
              <img width="30" alt="facebook" /> facebook
            </a>
            <a href="#">
              <img width="30" alt="google" />
              Google
            </a>
          </div>
        </form>
      </div>
      <div className={classes["login-right"]}>
        <img src={imageBg} />
      </div>
    </div>
  );
};

export default Login;
