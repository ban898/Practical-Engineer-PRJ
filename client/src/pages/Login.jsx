import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Login.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const loginHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

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
      id: email,
      password: password,
    };

    // Here need to POST to MongoDB the user OBJECT

    console.log(user);
  };

  return (
    <div className={classes.loginBackground}>
      <div className={classes.boxForm}>
        <div className={classes.left}>
          <div className={classes.overlay}>
            <h1>CRM-X</h1>
            <p>
              Login to get the latest news and enjoy the updated dashboard bla
              bla bla bla bla bla bla
            </p>
            <div className={classes.iconContainer}>
              <div className={classes.iconConnection}>
                <FacebookIcon />
                <p> Login with Facebook</p>
              </div>
              <div className={classes.iconConnection}>
                <TwitterIcon />
                <p> Login with Twitter</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.rightText}>
            <h5>Login</h5>
            <p>
              Don't have an account?{" "}
              <Link to="/Signup">Create your account Here</Link> it takes less
              than a minute
            </p>
          </div>
          <div className={classes.fathers}>
            <div className={classes.inputs}>
              <input
                type="email"
                placeholder="E-Mail"
                ref={emailInputRef}
              ></input>
              {!emailIsValid && <p>Incorrect Email</p>}
              <br />
              <input
                type="password"
                placeholder="Password"
                ref={passwordInputRef}
              ></input>
              {!emailIsValid && <p>Incorrect password</p>}
            </div>
            <br />
            <br />
            <div className={classes.rememberMeForgetPassword}>
              <button onClick={loginHandler}>Login</button>
              <p>Forgot password ?</p>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

//-------------------------------------------------------------------------------------
