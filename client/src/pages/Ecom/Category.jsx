import React from "react";
import { useParams } from "react-router";
import classes from "./Category.module.css";
import ShopNav from "../../components/Ecom-Comp/ShopNav";
import Footer from "../../components/Ecom-Comp/Footer";

const Category = () => {
  //Get the category ID from the URL
  const params = useParams();
  const categoryId = params.catId;

  return (
    <div>
      <ShopNav />

      <div className={classes.test}>
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
        <p> {categoryId}</p>
        <p> {categoryId}</p>
      </div>
      <Footer />
    </div>
  );
};

export default Category;
