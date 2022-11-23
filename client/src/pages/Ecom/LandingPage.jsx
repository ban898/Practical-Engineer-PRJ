import React from "react";

import classes from "./LandingPage.module.css";
import ShopNav from "./ShopNav";
import TransparentButton from "../../components/TransparentButton";
import ImageSlider from "./ImageSlider";
import mainImg from "../../img/ShopImg/main.jpg";

const LandingPage = () => {
  return (
    <div>
      <div className={classes.heroHeader}>
        <ShopNav />
        <div className={classes.mainCont}>
          <img src={mainImg} width="100%" alt="Girl with red coat" />
          <div className={classes.mainText}>the black friday sale</div>
          <div className={classes.secText}>up to 60% off</div>
          <TransparentButton
            top="55%"
            left="14%"
            position="absolute"
            buttonText="Sign up"
            backgroundColor="#e03131"
            fontSize="25px"
            fontWeight="600"
          />
          <TransparentButton
            buttonText="Shop Now"
            backgroundColor="black"
            top="55%"
            left="24%"
            position="absolute"
            fontSize="25px"
            customHoverColor="#e03131"
            fontWeight="600"
          />
        </div>
      </div>
      <section>
        <div className={classes.sectionWrapper}>
          <div className={classes.landingImage}></div>
          <div className={classes.gift}>free</div>
          <div className={classes.landingText}>get a free hat</div>
          <div className={classes.landingSecText}>with purchase over 100$</div>
        </div>
      </section>
      <section>
        <div className={classes.gridWrapper}>
          <div className={classes.gridItem1}>A</div>
          <div className={classes.gridItem}>B</div>
          <div className={classes.gridItem}>C</div>
          <div className={classes.gridItem}>D</div>
          <div className={classes.gridItem}>E</div>
          <div className={classes.gridItem}>F</div>
        </div>
      </section>
      <div className={classes.slider}>
        <ImageSlider />
      </div>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
      <p>1</p>
      <p>2</p>
      <p>3</p>
      <p>4</p>
      <p>5</p>
      <p>6</p>
      <p>7</p>
      <p>8</p>
      <p>9</p>
      <section>
        {" "}
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
        <p>7</p>
        <p>8</p>
      </section>
    </div>
  );
};

export default LandingPage;
