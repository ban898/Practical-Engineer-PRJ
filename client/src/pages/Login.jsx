import React, { useRef, useState } from "react";
import classes from "./Login.module.css";

const Login = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [emailIsValid, setEmailIsValid] = useState(true);
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  const [isChecked, setIsChecked] = useState(false);

  const checkHandler = () => {
    setIsChecked(!isChecked);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    if (email.trim() === "") {
      setEmailIsValid(false);
      return;
    }

    if (password === "") {
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
              <i aria-hidden="true"></i>
            </a>
            <a href="google.com">
              <i aria-hidden="true"></i> Login with Twitter
            </a>
          </span>
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.rightText}>
          <h5>Login</h5>
          <p>
            Don't have an account? <a href="google.com">Creat Your Account</a>{" "}
            it takes less than a minute
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
              placeholder="password"
              ref={passwordInputRef}
            ></input>
          </div>
          <br />
          <br />
          <div className={classes.rememberMeForgetPassword}>
            <label>
              <input
                type="checkbox"
                name="item"
                checked={isChecked}
                onChange={checkHandler}
              ></input>
              <p>The checkbox is {isChecked ? "checked" : "unchecked"}</p>
              <span className={classes.textCheckbox}>Remember me</span>
            </label>
            <p>forgot password?</p>
          </div>
          <br />
          <button onClick={loginHandler}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

//-------------------------------------------------------------------------------------
// https://i.pinimg.com/736x/5d/73/ea/5d73eaabb25e3805de1f8cdea7df4a42--tumblr-backgrounds-iphone-phone-wallpapers-iphone-wallaper-tumblr.jpg

// #090b6f85
