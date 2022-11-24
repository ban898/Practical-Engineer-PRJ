import React from "react";

import classes from "./LandingPage.module.css";
import ShopNav from "./ShopNav";
import TransparentButton from "../../components/TransparentButton";
import mainImg from "../../img/ShopImg/main.jpg";
import Coat from "../../img/ShopImg/coatMain.jpg";
import Shoes from "../../img/ShopImg/shoeV.jpg";
import Jeans from "../../img/ShopImg/denims.jpg";
import Shirt from "../../img/ShopImg/shirts.jpg";
import Hoodie from "../../img/ShopImg/hoodieV.jpg";
import Amber from "../../img/ShopImg/d1.jpg";

import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { FaTiktok } from "react-icons/fa";
import { AiOutlineGoogle } from "react-icons/ai";

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
          <div className={classes.gridItemMain}>
            <div className={classes.browse}>browse our collections</div>
            <div className={classes.gridHeader}>
              <TransparentButton
                buttonText="Coats"
                fontSize="18px"
                fontWeight="400"
                padding="7px"
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
              />
            </div>
            <img src={Hoodie} alt="test" />
          </div>
        </div>
      </section>
      <footer>
        <div className={classes.upperFooter}>
          <YouTubeIcon />
          <TwitterIcon />
          <FacebookIcon />
          <InstagramIcon />
          <div className={classes.tiktok}>
            <FaTiktok size="2x" />
          </div>
          <div className={classes.google}>
            <AiOutlineGoogle size="2x" />
          </div>
        </div>
      </footer>
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
