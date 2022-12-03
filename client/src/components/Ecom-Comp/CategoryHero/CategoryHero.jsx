import React from "react";
import { useParams } from "react-router";
import { Link as ScrollLink } from "react-scroll";

import classes from "./CategoryHero.module.css";
import shoe from "../../../img/ShopImg/aa.jpg";
import coat from "../../../img/ShopImg/coat.jpg";
import jeans from "../../../img/ShopImg/jeans.jpg";
import jewerlly from "../../../img/ShopImg/j.jpg";
import shirt from "../../../img/ShopImg/shirt.jpg";
import hoodie from "../../../img/ShopImg/hoodieM.jpg";

const CategoryHero = () => {
  //Get the category ID from the URL
  const params = useParams();
  const categoryId = params.catId;

  if (categoryId === "Coats") {
    return (
      <section>
        <div className={classes.hero}>
          <img src={coat} alt="yellow coat" />
          <div className={classes.coatP}>Wear The Storm</div>
          <ScrollLink
            className={classes.coatLink}
            to="Products"
            smooth={true}
            offset={-30}
            duration={1000}
          >
            Shop Now
          </ScrollLink>
        </div>
      </section>
    );
  } else if (categoryId === "Shoes") {
    return (
      <section>
        <div className={classes.hero}>
          <img src={shoe} alt="shoes" />
          <div className={classes.shoeP}>Walk with us</div>
          <ScrollLink
            className={classes.shoeLink}
            to="Products"
            smooth={true}
            offset={-30}
            duration={1000}
          >
            Shop Now
          </ScrollLink>
        </div>
      </section>
    );
  } else if (categoryId === "Jeans") {
    return (
      <section>
        <div className={classes.hero}>
          <img src={jeans} alt="jeans" />
          <div className={classes.jeansP}>Your Design</div>
          <div className={classes.jeansP2}>Your Style</div>
          <ScrollLink
            className={classes.jeansLink}
            to="Products"
            smooth={true}
            offset={-30}
            duration={1000}
          >
            Shop Now
          </ScrollLink>
        </div>
      </section>
    );
  } else if (categoryId === "Jewerlly") {
    return (
      <section>
        <div className={classes.hero}>
          <img src={jewerlly} alt="jewerlly" />
          <div className={classes.jP}>
            Yours to <p>wear</p> , yours to <p>love </p>
          </div>
          <ScrollLink
            className={classes.jLink}
            to="Products"
            smooth={true}
            offset={-30}
            duration={1000}
          >
            Shop Now
          </ScrollLink>
        </div>
      </section>
    );
  } else if (categoryId === "Shirts") {
    return (
      <section>
        <div className={classes.hero}>
          <img src={shirt} alt="shirt" />
          <div className={classes.shirtP}>A style for every story</div>
          <ScrollLink
            className={classes.shirtLink}
            to="Products"
            smooth={true}
            offset={-30}
            duration={1000}
          >
            Shop Now
          </ScrollLink>
        </div>
      </section>
    );
  } else if (categoryId === "Hoodies") {
    return (
      <section>
        <div className={classes.hero}>
          <img src={hoodie} alt="hoodie" />
          <div className={classes.hoodieP}>Wear the swag</div>
          <ScrollLink
            className={classes.hoodieLink}
            to="Products"
            smooth={true}
            offset={-30}
            duration={1000}
          >
            Shop Now
          </ScrollLink>
        </div>
      </section>
    );
  }
};

export default CategoryHero;

//-------------------------------------------------------------------------------------
// <div className={classes.Hero}>
// <img
//   className={classes.headerImg}
//   src={heroHeaderBackground}
//   alt="Hero Header"
// />
// </div>

//-------------------------------------------------------------------------------------
// return (
//   <section>
//     <div className={classes.hero}>
//       <ScrollLink
//         className={classes.link}
//         to="Products"
//         smooth={true}
//         offset={-30}
//         duration={1000}
//       >
//         Shop Now
//       </ScrollLink>
//       <p>Wear The Storm</p>
//     </div>
//   </section>
// );
