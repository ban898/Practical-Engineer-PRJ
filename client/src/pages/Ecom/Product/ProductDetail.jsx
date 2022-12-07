import React from "react";
import { useParams } from "react-router";

import ShopNav from "../../../components/Ecom-Comp/Navbar/ShopNav";
import Footer from "../../../components/Ecom-Comp/Footer/Footer";

const ProductDetail = () => {
  //Get the category ID from the URL
  const params = useParams();
  const product = params.prodId;

  return (
    <div>
      <ShopNav />
      <section>
        <h3>Product ID : {product}</h3>
        <h3>Product ID : {product}</h3>
        <h3>Product ID : {product}</h3>
        <h3>Product ID : {product}</h3>
        <h3>Product ID : {product}</h3>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetail;

//------------------------------------------------------------------------------------
