import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import ShopNav from "../../../components/Ecom-Comp/Navbar/ShopNav";
import Comment from "../../../components/Ecom-Comp/Comment/Comment";
import Footer from "../../../components/Ecom-Comp/Footer/Footer";

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
  Typography,
} from "@mui/material";
import Rating from "@mui/material/Rating";

import classes from "./ProductDetail.module.css";
import BlueButton from "../../../components/Ecom-Comp/BlueButton/BlueButton";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ProductDetail = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpen = () => setModalOpen(true);
  const handleClose = () => setModalOpen(false);

  //Get the category ID from the URL
  const params = useParams();
  const product = params.prodId;

  const [productObj, setProductObj] = useState([]);
  const [size, setSize] = useState(null);

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(`/api/v1/products/${product}`);
        setProductObj(res.data.product);
        console.log(productObj);
      } catch (err) {
        console.log(err);
      }
    };

    getProduct();
  }, []);

  let price = productObj.price?.toFixed(2);

  return (
    <div>
      <ShopNav />
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
                        <Typography
                          id="modal-modal-title"
                          variant="h6"
                          component="h2"
                        >
                          Text in a modal
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                          Duis mollis, est non commodo luctus, nisi erat
                          porttitor ligula.
                        </Typography>
                      </Box>
                    </Modal>
                  </div>
                  for shoes and jewerlly
                </div>
              </div>
              <div className={classes.payment}>
                <BlueButton buttonText={"Add To Cart"}></BlueButton>
                <BlueButton
                  buttonText={"Here Another Payment (Steve)"}
                  mt={"10px"}
                  backgroundColor={"black"}
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
