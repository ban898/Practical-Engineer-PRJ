import { React, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

import ShopNav from "../../../components/Ecom-Comp/Navbar/ShopNav";
import Comment from "../../../components/Ecom-Comp/Comment/Comment";
import Footer from "../../../components/Ecom-Comp/Footer/Footer";
import WarningModal from "../../../components/Ecom-Comp/WarningModal/WarningModal";

import CommentAvatar1 from "../../../img/comment1.jpg";
import CommentAvatar2 from "../../../img/comment2.jpg";
import CommentAvatar3 from "../../../img/comment3.jpg";

import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import Rating from "@mui/material/Rating";

import classes from "./ProductDetail.module.css";
import BlueButton from "../../../components/Ecom-Comp/BlueButton/BlueButton";

const style = {
  display: "flex",
  gap: "5%",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductDetail = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  //Handle cart
  const [cart, setCart] = useState(undefined);
  const [itemsInCart, setItemsInCart] = useState("0");
  const [totalAmount, setTotalAmount] = useState("0");

  const getCart = async () => {
    try {
      const res = await axios.get("/api/v1/cart");

      if (res.data.length !== 0) {
        console.log(res.data.cart);
        setItemsInCart(res.data.itemsInCart);
        setTotalAmount(res.data.total);
        setCart(res.data.cart);
      } else {
        setItemsInCart("0");
        setTotalAmount("0");
        setCart(null);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  //Get the category ID from the URL
  const params = useParams();
  const product = params.prodId;

  const [productObj, setProductObj] = useState({});
  const [size, setSize] = useState("m");
  const [isLogin, setIsLogin] = useState(true);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`/api/v1/products/${product}`);
        setProductObj(res.data.product);
      } catch (err) {
        console.log(err);
      }
    };

    const getOneTimeCart = async () => {
      await getCart();
    };
    getOneTimeCart();
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Handle Go Back one Page
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const addToCartHandler = async () => {
    try {
      try {
        await axios.get("/api/v1/users/me");
        setIsLogin(true);
      } catch (err) {
        setIsLogin(false);
        return;
      }
      await axios.patch(`/api/v1/cart/addToCart/`, { data: productObj, size });
      await getCart();
    } catch (err) {
      console.log(err.message);
    }
  };

  let price = productObj.price?.toFixed(2);

  const warningLoginCloseHandler = () => {
    setIsLogin(true);
  };

  return (
    <div>
      {!isLogin && (
        <WarningModal onHide={warningLoginCloseHandler}>
          <h2>You need to login</h2>
          <br />
          <BlueButton
            buttonText="Close"
            padding="7px"
            fontSize="13.3px"
            width="100px"
            backgroundColor="#247bfe"
            onClick={warningLoginCloseHandler}
          />
        </WarningModal>
      )}
      <ShopNav
        getCart={getCart}
        cart={cart}
        itemsInCart={itemsInCart}
        totalAmount={totalAmount}
      />
      <section>
        <div className={classes.wrapper}>
          <div className={classes.box}>
            <div className={classes.left}>
              <img
                className={classes.imgT}
                src={`/img/products/${productObj.images}`}
                alt="Product"
              />
            </div>
            <div className={classes.right}>
              <div className={classes.name}>{productObj.name}</div>
              <div className={classes.review}>
                <Rating value={4.5} precision={0.5} readOnly size="small" />
                <div className={classes.rating}>(1000+ reviews)</div>
              </div>
              <div className={classes.id}>ID :{productObj._id}</div>
              <div className={classes.descWrapper}>
                <div className={classes.desc}>{productObj.description}</div>
                <div className={classes.priceW}>
                  <div className={classes.price}>{price}</div>
                  <div className={classes.symbol}>$</div>
                </div>
              </div>
              <div className={classes.sizeW}>
                <div className={classes.sizes}>
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select Size :
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={size}
                        label="Size"
                        onChange={handleChange}
                      >
                        <MenuItem value={"xs"}>Extra Small</MenuItem>
                        <MenuItem value={"s"}>Small</MenuItem>
                        <MenuItem value={"m"}>Medium</MenuItem>
                        <MenuItem value={"l"}>Large</MenuItem>
                        <MenuItem value={"xl"}>XL</MenuItem>
                        <MenuItem value={"xxl"}>XXL</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </div>
                <div className={classes.sizeHelp}>
                  We Reccomend you to use the {""}
                  <div>
                    <Button onClick={handleOpen}>Size Chart</Button>
                    <Modal
                      open={modalOpen}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        <div className={classes.table1}>
                          <h2
                            style={{
                              textAlign: "center",
                              paddingBottom: "0.5rem",
                            }}
                          >
                            Shoes
                          </h2>
                          <table className={classes.shoeTable}>
                            <thead>
                              <tr className={classes.shopSizes}>
                                <th>Shop Size</th>
                                <th>UK</th>
                                <th>JAP</th>
                                <th>US</th>
                                <th>UE</th>
                              </tr>
                            </thead>

                            <tbody>
                              <tr>
                                <th>XS</th>
                                <td>8</td>
                                <td>27</td>
                                <td>8</td>
                                <td>41</td>
                              </tr>
                              <tr>
                                <th>S</th>
                                <td>8.5</td>
                                <td>27.5</td>
                                <td>8.5</td>
                                <td>42</td>
                              </tr>
                              <tr>
                                <th>M</th>
                                <td>9</td>
                                <td>28</td>
                                <td>9</td>
                                <td>43</td>
                              </tr>
                              <tr>
                                <th>L</th>
                                <td>10</td>
                                <td>29</td>
                                <td>10</td>
                                <td>44</td>
                              </tr>
                              <tr>
                                <th>XL</th>
                                <td>11</td>
                                <td>30</td>
                                <td>11</td>
                                <td>45</td>
                              </tr>
                              <tr>
                                <th>XXL</th>
                                <td>12</td>
                                <td>33</td>
                                <td>14</td>
                                <td>46</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div className={classes.table2}>
                          <h2
                            style={{
                              textAlign: "center",
                              paddingBottom: "0.5rem",
                            }}
                          >
                            Jewellery
                          </h2>
                          <table className={classes.jwTable}>
                            <thead>
                              <tr className={classes.jwSizes}>
                                <th>Shop Size</th>
                                <th>UK</th>
                                <th>JAP</th>
                                <th>US</th>
                                <th>UE</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>XS</th>
                                <td>I 1/2</td>
                                <td>8</td>
                                <td>4 1/2</td>
                                <td>15 1/4</td>
                              </tr>
                              <tr>
                                <th>S</th>
                                <td>J 1/2</td>
                                <td>9</td>
                                <td>5</td>
                                <td>15 3/4</td>
                              </tr>
                              <tr>
                                <th>M</th>
                                <td>L</td>
                                <td>11</td>
                                <td>5.5</td>
                                <td>16</td>
                              </tr>
                              <tr>
                                <th>L</th>
                                <td>M</td>
                                <td>12</td>
                                <td>6</td>
                                <td>16 1/2</td>
                              </tr>
                              <tr>
                                <th>XL</th>
                                <td>N</td>
                                <td>13</td>
                                <td>6.5</td>
                                <td>17</td>
                              </tr>
                              <tr>
                                <th>XXL</th>
                                <td>O</td>
                                <td>14</td>
                                <td>7</td>
                                <td>17 1/4</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </Box>
                    </Modal>
                  </div>
                  for shoes and jewerlly
                </div>
              </div>
              <div className={classes.payment}>
                <BlueButton
                  onClick={addToCartHandler}
                  buttonText={"Add To Cart"}
                ></BlueButton>
                <BlueButton
                  buttonText={"Go Back"}
                  mt={"10px"}
                  backgroundColor={"black"}
                  onClick={goBack}
                ></BlueButton>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="About-Us">
        <div className={classes.aboutUsSection}>
          <div className={classes.aboutUsHeaderWrapper}>
            <div className={classes.aboutUsHeader}>
              You're in a good company
            </div>
            <div className={classes.aboutUsMiniHeader}>
              It's still early days, but here's some words of Customers so you
              know you're in the right place
            </div>
          </div>
          <div className={classes.aboutUsBlock}>
            <Comment
              img={CommentAvatar2}
              alt="Sunny bolt"
              value={4.5}
              text="As soon as I opened the package, I immediately fell in love. The attention to detail in these coats is impecable and the jog with of fabric is just perfect for blocking out any blustery day."
              date="Jan 2,  2022"
            />
            <Comment
              img={CommentAvatar1}
              alt="Alexey Davidov"
              value={5}
              text="Design X is the place to go for all-leather boots and coats. I find their collection of shirts to be lackluster and unimaginative though. The majority of their sizing is really narrow and reading the reviews from other customers, I understand why so many people return products there."
              date="May 15, 2022"
            />
            <Comment
              img={CommentAvatar3}
              alt="Monika Stat"
              value={4.5}
              text="Design-X knew exactly what I wanted and communicated excellently with me. It was so easy to explain what I wanted, and the end product was amazing - even better than how I had imagined it. "
              date="Sep 14, 2022"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetail;

//------------------------------------------------------------------------------------
// myObj = productData.category , description , gender , name , price , images , _id ,
// {productObj.price.toFixed(2)}
