import React from "react";
import { useParams } from "react-router";

import { Card, CardContent, CardMedia } from "@mui/material";

import ShopNav from "../../components/Ecom-Comp/ShopNav";
import Footer from "../../components/Ecom-Comp/Footer";

import classes from "./Category.module.css";
import CoatBg from "../../img/ShopImg/cobg.jpg";
import img1 from "../../img/ShopImg/11.png";

const Category = () => {
  //Get the category ID from the URL
  const params = useParams();
  const categoryId = params.catId;

  //Each Category will get Another image
  let heroHeaderBackground;

  if (categoryId === "Coats") {
    heroHeaderBackground = CoatBg;
  }

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
