import React from "react";
import { useNavigate } from "react-router";

import classes from "./LandingPage.module.css";

import TransparentButton from "../../../components/TransparentButton/TransparentButton";
import ShopNav from "../../../components/Ecom-Comp/Navbar/ShopNav";
import Footer from "../../../components/Ecom-Comp/Footer/Footer";

import mainImg from "../../../img/ShopImg/main.jpg";
import Coat from "../../../img/ShopImg/coatMain.jpg";
import Shoes from "../../../img/ShopImg/shoeV.jpg";
import Jeans from "../../../img/ShopImg/denims.jpg";
import Shirt from "../../../img/ShopImg/shirts.jpg";
import Hoodie from "../../../img/ShopImg/hoodieV.jpg";
import Amber from "../../../img/ShopImg/d1.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  const moveToSignUp = () => {
    navigate("/shop/signup");
  };

  const navCoats = () => {
    navigate("/shop/Coats");
  };
  const navShoes = () => {
    navigate("/shop/Shoes");
  };
  const navJeans = () => {
    navigate("/shop/Jeans");
  };
  const navJewerlly = () => {
    navigate("/shop/Jewerlly");
  };
  const navShirts = () => {
    navigate("/shop/Shirts");
  };
  const navHoodies = () => {
    navigate("/shop/Hoodies");
  };

  return (
    <div id="Home">
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
            onClick={moveToSignUp}
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
      <section id="Discounts">
        <div className={classes.sectionWrapper}>
          <div className={classes.landingImage}></div>
          <div className={classes.gift}>free</div>
          <div className={classes.landingText}>get a free hat</div>
          <div className={classes.landingSecText}>with purchase over 100$</div>
        </div>
      </section>
      <section id="Categories">
        <div className={classes.gridWrapper}>
          <div className={classes.gridItemMain}>
            <div className={classes.browse}>browse our collections</div>
            <div className={classes.gridHeader}>
              <TransparentButton
                buttonText="Coats"
                fontSize="18px"
                fontWeight="400"
                padding="7px"
                onClick={navCoats}
              />
            </div>
            <img src={Coat} alt="test" />
          </div>
          <div className={classes.gridItemSec}>
            <div className={classes.gridHeaderSec}>
              <TransparentButton
                buttonText="Shoes"
                fontSize="18px"
                fontWeight="400"
                padding="7px"
                onClick={navShoes}
              />
            </div>
            <img src={Shoes} alt="test2" />
          </div>
          <div className={classes.gridItemThird}>
            <div className={classes.gridHeaderThird}>
              <TransparentButton
                buttonText="Jeans"
                fontSize="18px"
                fontWeight="400"
                padding="7px"
                onClick={navJeans}
              />
            </div>
            <img src={Jeans} alt="test" />
          </div>
          <div className={classes.gridItemFourth}>
            <div className={classes.gridHeaderFourth}>
              <TransparentButton
                buttonText="Shop Now"
                fontSize="18px"
                fontWeight="600"
                padding="20px"
                backgroundColor="#ae3ec9"
                onClick={navJewerlly}
              />
            </div>
            <div className={classes.discount}></div>
            <img src={Amber} alt="test" />
          </div>
          <div className={classes.gridItemFifth}>
            <div className={classes.gridHeaderFifth}>
              <TransparentButton
                buttonText="T-shirts"
                fontSize="18px"
                fontWeight="500"
                padding="17px"
                backgroundColor="#ffe066"
                onClick={navShirts}
              />
            </div>
            <img src={Shirt} alt="test" />
          </div>
          <div className={classes.gridItemSix}>
            <div className={classes.gridHeaderSix}>
              <TransparentButton
                buttonText="Hoodies"
                fontSize="16px"
                fontWeight="400"
                padding="7px"
                onClick={navHoodies}
              />
            </div>
            <img src={Hoodie} alt="test" />
          </div>
        </div>
      </section>
      <section id="About Us"></section>
      <Footer />
    </div>
  );
};

export default LandingPage;

//-------------------------------------------------------------------------------------
//import ImageSlider from "./ImageSlider";
// <section>
// <div className={classes.slider}>
//   <ImageSlider />
// </div>
// </section>
