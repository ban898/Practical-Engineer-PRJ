import React from "react";
import { useParams } from "react-router";

import classes from "./CategoryHero.module.css";
// import CoatBg from "../../../img/ShopImg/t4.jpg";

const CategoryHero = () => {
  //Get the category ID from the URL
  const params = useParams();
  const categoryId = params.catId;

  //Each Category will get Another image
  // let heroHeaderBackground;

  if (categoryId === "Coats") {
    // heroHeaderBackground = CoatBg;
  }

  return (
    <section>
      <div className={classes.hero}>
        <button>Shop now</button>
        <p>Wear The Storm</p>
      </div>
    </section>
  );
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
