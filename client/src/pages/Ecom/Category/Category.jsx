import { React, useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

import ShopNav from "../../../components/Ecom-Comp/Navbar/ShopNav";
import CategoryHero from "../../../components/Ecom-Comp/CategoryHero/CategoryHero";
import Card from "../../../components/Ecom-Comp/SingleCard/SingleCard";
import Footer from "../../../components/Ecom-Comp/Footer/Footer";

import classes from "./Category.module.css";
import WarningModal from "../../../components/Ecom-Comp/WarningModal/WarningModal";
import BlueButton from "../../../components/Ecom-Comp/BlueButton/BlueButton";

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

    const getOneTimeCart = async () => {
      await getCart();
    };

    getOneTimeCart();
    getProducts();
  }, [categoryId]);

  const [cart, setCart] = useState(undefined);
  const [itemsInCart, setItemsInCart] = useState("0");
  const [totalAmount, setTotalAmount] = useState("0");
  const [isLogin, setIsLogin] = useState(true);

  const warningLoginOpenHandler = () => {
    setIsLogin(false);
  };
  const warningLoginCloseHandler = () => {
    setIsLogin(true);
  };

  const getCart = async () => {
    try {
      const res = await axios.get("/api/v1/cart");

      if (res.data.length !== 0) {
        setItemsInCart(res.data.itemsInCart);
        setTotalAmount(res.data.total);
        setCart(res.data.cart);
      } else {
        setItemsInCart("0");
        setTotalAmount("0");
        setCart(null);
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={classes.wrap}>
      {!isLogin && (
        <WarningModal onHide={warningLoginCloseHandler}>
          <h2>You need to login</h2>
          <br />
          <BlueButton
            buttonText="Close"
            padding="7px"
            fontSize="13.3px"
            width="100px"
            backgroundColor="#247bfe"
            onClick={warningLoginCloseHandler}
          />
        </WarningModal>
      )}
      <ShopNav
        getCart={getCart}
        cart={cart}
        itemsInCart={itemsInCart}
        totalAmount={totalAmount}
      />
      <CategoryHero />
      <section id="Products">
        <div className={classes.flexWrapper}>
          {productsData.map((product) => {
            return (
              <Card
                openWarning={warningLoginOpenHandler}
                closeWarning={warningLoginCloseHandler}
                getCart={getCart}
                prodId={product._id}
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
