import React from "react";
import classes from "./Login.module.css";
// import bg from "../img/loginbg2.jpg";
// import KeyIcon from "@mui/icons-material/Key";

const Login = () => {
  return (
    <div className={classes.boxForm}>
      <div className={classes.left}>
        <div className={classes.overlay}>
          <h1>CRM-X</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            et est sed felis aliquet sollicitudin
          </p>
          <span>
            <p>login with social media</p>
            <a href="google.com">
              <i class="fa fa-facebook" aria-hidden="true"></i>
            </a>
            <a href="google.com">
              <i class="fa fa-twitter" aria-hidden="true"></i> Login with
              Twitter
            </a>
          </span>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.father}>
          <h5>Login</h5>
          <p>
            Don't have an account? <a href="google.com">Creat Your Account</a>{" "}
            it takes less than a minute
          </p>
        </div>
        <div className={classes.fathers}>
          <div className={classes.inputs}>
            <input type="text" placeholder="user name"></input>
            <br />
            <input type="password" placeholder="password"></input>
          </div>
          <br />
          <br />
          <div className={classes.rememberMeForgetPassword}>
            <label>
              <input type="checkbox" name="item" checked></input>
              <span className={classes.textCheckbox}>Remember me</span>
            </label>
            <p>forgot password?</p>
          </div>
          <br />
          <button>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

//-------------------------------------------------------------------------------------
// https://i.pinimg.com/736x/5d/73/ea/5d73eaabb25e3805de1f8cdea7df4a42--tumblr-backgrounds-iphone-phone-wallpapers-iphone-wallaper-tumblr.jpg

// #090b6f85
