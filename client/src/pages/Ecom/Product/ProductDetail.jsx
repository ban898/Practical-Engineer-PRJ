import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import ShopNav from "../../../components/Ecom-Comp/Navbar/ShopNav";
import Footer from "../../../components/Ecom-Comp/Footer/Footer";

import Rating from "@mui/material/Rating";

import classes from "./ProductDetail.module.css";

const ProductDetail = () => {
  //Get the category ID from the URL
  const params = useParams();
  const product = params.prodId;

  const [productObj, setProductObj] = useState([]);

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
            </div>
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
