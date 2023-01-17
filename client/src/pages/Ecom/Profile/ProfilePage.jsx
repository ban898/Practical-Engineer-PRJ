import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import BlueButton from "../../../components/Ecom-Comp/BlueButton/BlueButton";
import classes from "./ProfilePage.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [userData, setUserData] = useState("");
  const [orders, setOrders] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  const navigate = useNavigate();
  const getUserData = async () => {
    try {
      const res = await axios.get("/api/v1/users/me", { auth: true });

      setUserData(res.data.user);
    } catch (err) {
      console.log(err.message);
      navigate("/");
    }
  };

  useEffect(() => {
    const getUserDataOnes = async () => {
      await getUserData();
    };

    const getOrders = async () => {
      try {
        const res = await axios.get("/api/v1/orders/getAllOrdersOfUser");

        setOrders(res.data.orders);
      } catch (err) {
        console.log(err.message);
      }
    };

    getUserDataOnes();

    getOrders();
  }, []);

  const changeUserDataHandler = async () => {
    try {
      const data = {
        firstName,
        lastName,
        email,
        currentPassword,
        newPassword,
        passwordConfirm,
        address: `${city} ${street}`,
      };

      await axios.patch("/api/v1/users/updateMe", { data });
      await getUserData();
      setFirstName("");
      setLastName("");
      setEmail("");
      setCity("");
      setStreet("");
    } catch (err) {
      console.log(err.message);
    }
  };

  const passwordChangeHandler = async () => {
    try {
      if (!currentPassword || !newPassword || !passwordConfirm) {
        alert("You must fill all fields of password!");
        return;
      }
      const data = {
        currentPassword,
        newPassword,
        passwordConfirm,
      };
      await axios.patch("/api/v1/users/updatePassword", { data });
      await getUserData();
      setCurrentPassword("");
      setNewPassword("");
      setPasswordConfirm("");
    } catch (err) {
      console.log(err.message);
    }
  };

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
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                variant="outlined"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
            <BlueButton
              buttonText={"change"}
              padding={"5px"}
              width={"50%"}
              mt={"1rem"}
              ml={"22%"}
              onClick={changeUserDataHandler}
            ></BlueButton>
          </div>
          <div className={classes.box}>
            <div className={classes.header}>Email</div>
            <div className={classes.content}>
              <TextField
                id="outlined-basic"
                label="New Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* <TextField
                id="outlined-basic"
                label="Confrim Email"
                variant="outlined"
              /> */}
            </div>
            <BlueButton
              buttonText={"change"}
              padding={"5px"}
              width={"50%"}
              mt={"1rem"}
              ml={"22%"}
              onClick={changeUserDataHandler}
            ></BlueButton>
          </div>
          <div className={classes.box}>
            <div className={classes.header}>Password</div>
            <div className={classes.content}>
              <TextField
                id="outlined-basic"
                label="Current Password"
                variant="outlined"
                value={currentPassword}
                type="password"
                onChange={(e) => {
                  setCurrentPassword(e.target.value);
                }}
              />
            </div>
            <div className={classes.content}>
              <TextField
                id="outlined-basic"
                label="New Password"
                variant="outlined"
                value={newPassword}
                type="password"
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
            </div>
            <div className={classes.content}>
              <TextField
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                value={passwordConfirm}
                type="password"
                onChange={(e) => {
                  setPasswordConfirm(e.target.value);
                }}
              />
            </div>
            <BlueButton
              buttonText={"change"}
              padding={"5px"}
              width={"50%"}
              mt={"1rem"}
              ml={"22%"}
              onClick={passwordChangeHandler}
            ></BlueButton>
          </div>
          <div className={classes.box}>
            <div className={classes.header}>Address</div>
            <div className={classes.content}>
              <TextField
                id="outlined-basic"
                label="City"
                variant="outlined"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
              <TextField
                id="outlined-basic"
                label="Street"
                variant="outlined"
                value={street}
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
              />
            </div>
            <BlueButton
              buttonText={"change"}
              padding={"5px"}
              width={"50%"}
              mt={"1rem"}
              ml={"22%"}
              onClick={changeUserDataHandler}
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
                    label=""
                    // defaultValue="."
                    value={
                      userData.firstName
                        ? `${userData.firstName} ${userData.lastName}`
                        : "Non"
                    }
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
                    label=""
                    value={userData.email ? userData.email : "Non"}
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
                    label=""
                    value={userData.address ? userData.address : "Non"}
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
            {orders &&
              orders.map((order) => {
                return (
                  <div key={order._id} className={classes.singleOrder}>
                    <div style={{ textAlign: "center", fontSize: "18px" }}>
                      when bought:{" "}
                      {`${new Date(order.createdAt).getHours()}:${new Date(
                        order.createdAt
                      ).getMinutes()} -- ${`
                          ${("0" + new Date(order.createdAt).getDate()).slice(
                            -2
                          )}`}/${`${(
                        "0" +
                        (new Date(order.createdAt).getMonth() + 1)
                      ).slice(-2)}
                          `}/${`${new Date(order.createdAt).getFullYear()}`}`}
                    </div>
                    {order.products.map((prod) => {
                      return (
                        <div key={prod._id}>
                          <img
                            src={`/img/products/${prod.image}`}
                            alt="img"
                            style={{
                              objectFit: "fill",
                              width: "50px",
                            }}
                          />
                          <div>name: {prod.name}</div>
                          <div>description: {prod.description}</div>
                          <div>price: {prod.price}</div>
                          <div>quantity: {prod.quantity}</div>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            {/* <div className={classes.singleOrder}>Test</div>
            <div className={classes.singleOrder}>Test</div>
            <div className={classes.singleOrder}>Test</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
