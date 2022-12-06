import React from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  //Get the category ID from the URL
  const params = useParams();
  const product = params.prodId;

  return <div>{product}</div>;
};

export default ProductDetail;
