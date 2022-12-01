import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import ShopNav from "../../../components/Ecom-Comp/Navbar/ShopNav";
import CategoryHero from "../../../components/Ecom-Comp/CategoryHero/CategoryHero";
import Card from "../../../components/Ecom-Comp/SingleCard/SingleCard";
import Footer from "../../../components/Ecom-Comp/Footer/Footer";

import classes from "./Category.module.css";

const Category = () => {
  const [productsData, setProductsData] = useState([]);

  //Get the category ID from the URL
  const params = useParams();
  const categoryId = params.catId;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.post("/api/v1/products/getProductsByCetegory", {
          categoryId,
        });
        setProductsData(res.data.products);
      } catch (err) {
        console.log(err);
      }
    };

    getProducts();
  }, [categoryId]);

  return (
    <div className={classes.wrap}>
      <ShopNav />
      <CategoryHero />
      <section>
        <div className={classes.flexWrapper}>
          {productsData.map((product) => {
            return (
              <Card
                key={product._id}
                name={product.name}
                price={product.price}
                img={`/img/products/${product.images[0]}`}
              />
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Category;
