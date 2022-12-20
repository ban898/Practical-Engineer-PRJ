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
          <div className={classes.box}>
            <div className={classes.header}>Email</div>
            <div className={classes.content}>
              <TextField
                id="outlined-basic"
                label="New Email"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Confrim Email"
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
          <div className={classes.box}>
            <div className={classes.header}>Password</div>
            <div className={classes.content}>
              <TextField
                id="outlined-basic"
                label="New Password"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Confirm Password"
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
          <div className={classes.box}>
            <div className={classes.header}>Address</div>
            <div className={classes.content}>
              <TextField id="outlined-basic" label="City" variant="outlined" />
              <TextField
                id="outlined-basic"
                label="Street"
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
        </div>
        <div className={classes.rightSide}>
          <div className={classes.accbox}>
            <div style={{ textAlign: "center", fontSize: "26px" }}>
              Account Information :
            </div>
            <div className={classes.rowContent}>
              <div className={classes.row}>
                <div>Current Name :</div>
                <div className={classes.data}>
                  <TextField
                    id="outlined-read-only-input"
                    label="Api call"
                    defaultValue="Api call"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
              <div className={classes.row}>
                <div>Current Email :</div>
                <div className={classes.data}>
                  <TextField
                    id="outlined-read-only-input"
                    label="API CALL"
                    defaultValue="API CALL"
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </div>
              </div>
              <div className={classes.row}>
                <div>Current Address :</div>
                <div className={classes.data}>
                  <TextField
                    id="outlined-read-only-input"
                    label="API CALL"
                    defaultValue="API CALL"
                    InputProps={{
                      readOnly: true,
                    }}
                    style={{ marginRight: "1rem" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.orderBox}>
            <div style={{ textAlign: "center", fontSize: "22px" }}>Orders</div>
            <div className={classes.singleOrder}>Test</div>
            <div className={classes.singleOrder}>Test</div>
            <div className={classes.singleOrder}>Test</div>
            <div className={classes.singleOrder}>Test</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
