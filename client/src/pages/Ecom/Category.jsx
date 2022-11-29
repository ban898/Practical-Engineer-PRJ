import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import { Card, CardContent, CardMedia } from "@mui/material";

import ShopNav from "../../components/Ecom-Comp/ShopNav";
import Footer from "../../components/Ecom-Comp/Footer";

import classes from "./Category.module.css";
import CoatBg from "../../img/ShopImg/cobg.jpg";
import img1 from "../../img/ShopImg/11.png";
import axios from "axios";

const Category = () => {
  const [productsData, setProductsData] = useState([]);

  //Get the category ID from the URL
  const params = useParams();
  const categoryId = params.catId;

  //Each Category will get Another image
  let heroHeaderBackground;

  if (categoryId === "Coats") {
    heroHeaderBackground = CoatBg;
  }

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.post("/api/v1/products/getProductsByCetegory", {
          categoryId,
        });
        console.log(res.data.products);
        setProductsData(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [categoryId]);

  return (
    <div className={classes.fix}>
      <ShopNav />

      <div>
        <div className={classes.Hero}>
          <img
            className={classes.headerImg}
            src={heroHeaderBackground}
            alt="Hero Header"
          />
        </div>
        <section>
          {productsData.map((product) => {
            return (
              <div key={product._id} className={classes.flexWrapper}>
                <Card sx={{ maxWidth: 245, mt: 5 }}>
                  <CardMedia
                    component="img"
                    alt="1"
                    image={`/img/products/${product.images[0]}`}
                  />
                  <CardContent>
                    <div className={classes.desc}>
                      <div className={classes.name}>{product.name}</div>
                      <div className={classes.price}>{product.price}$</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
          <div className={classes.flexWrapper}>
            <Card sx={{ maxWidth: 245, mt: 5 }}>
              <CardMedia component="img" alt="1" image={img1} />
              <CardContent>
                <div className={classes.desc}>
                  <div className={classes.name}>Orange Coat</div>
                  <div className={classes.price}>78.99$</div>
                </div>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 245, mt: 5 }}>
              <CardMedia component="img" alt="1" image={img1} />
              <CardContent>
                <div className={classes.desc}>
                  <div className={classes.name}>Orange Coat</div>
                  <div className={classes.price}>78.99$</div>
                </div>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 245, mt: 5 }}>
              <CardMedia component="img" alt="1" image={img1} />
              <CardContent>
                <div className={classes.desc}>
                  <div className={classes.name}>Orange Coat</div>
                  <div className={classes.price}>78.99$</div>
                </div>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 245, mt: 5 }}>
              <CardMedia component="img" alt="1" image={img1} />
              <CardContent>
                <div className={classes.desc}>
                  <div className={classes.name}>Orange Coat</div>
                  <div className={classes.price}>78.99$</div>
                </div>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 245, mt: 5 }}>
              <CardMedia component="img" alt="1" image={img1} />
              <CardContent>
                <div className={classes.desc}>
                  <div className={classes.name}>Orange Coat</div>
                  <div className={classes.price}>78.99$</div>
                </div>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 245, mt: 5 }}>
              <CardMedia component="img" alt="1" image={img1} />
              <CardContent>
                <div className={classes.desc}>
                  <div className={classes.name}>Orange Coat</div>
                  <div className={classes.price}>78.99$</div>
                </div>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 245, mt: 5 }}>
              <CardMedia component="img" alt="1" image={img1} />
              <CardContent>
                <div className={classes.desc}>
                  <div className={classes.name}>Orange Coat</div>
                  <div className={classes.price}>78.99$</div>
                </div>
              </CardContent>
            </Card>
            <Card sx={{ maxWidth: 245, mt: 5 }}>
              <CardMedia component="img" alt="1" image={img1} />
              <CardContent>
                <div className={classes.desc}>
                  <div className={classes.name}>Orange Coat</div>
                  <div className={classes.price}>78.99$</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
        <p> {categoryId}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
