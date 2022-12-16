import { TextField } from "@mui/material";
import React from "react";
import BlueButton from "../../../components/Ecom-Comp/BlueButton/BlueButton";
import classes from "./ProfilePage.module.css";

const ProfilePage = () => {
  return (
    <section className={classes.section}>
      <div className={classes.flexWrapper}>
        <div className={classes.leftSide}>
          <div className={classes.box}>
            <div className={classes.header}>Full Name</div>
            <div className={classes.content}>
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
              />
            </div>
            <BlueButton
              buttonText={"change"}
              padding={"5px"}
              width={"50%"}
              mt={"1rem"}
              ml={"22%"}
            ></BlueButton>
          </div>
          <div className={classes.box}>Email</div>
          <div className={classes.box}>Address</div>
          <div className={classes.box}>Password</div>
        </div>
        <div className={classes.rightSide}>
          <div>Orders</div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
