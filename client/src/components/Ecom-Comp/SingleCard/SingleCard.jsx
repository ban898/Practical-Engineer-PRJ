import { React, useState } from "react";
import { useNavigate, useParams } from "react-router";
import classes from "./SingleCard.module.css";

import { Box, Card, CardContent, CardMedia } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { grey } from "@mui/material/colors";

import LazyLoad from "react-lazy-load";
import axios from "axios";

const SingleCard = ({ prodId, name, price, img }) => {
  const [hasOverlay, setHasOverlay] = useState(false);

  const handleMouseEnter = () => {
    setHasOverlay(true);
  };

  const handleMouseLeave = () => {
    setHasOverlay(false);
  };

  const handleAddToCart = async () => {
    try {
      try {
        await axios.get("/api/v1/users/me");
      } catch (err) {
        alert("You need to login");
        return;
      }
      await axios.patch(`/api/v1/cart/addToCart/${prodId}`);
    } catch (err) {
      console.log(err.message);
    }
  };

  //Get the category ID from the URL
  const params = useParams();
  const categoryId = params.catId;

  const navigate = useNavigate();

  const handleViewProduct = () => {
    navigate(`/${categoryId}/${prodId}`);
  };

  return (
    <LazyLoad offset={200}>
      <Card
        sx={{
          maxWidth: 245,
          mt: 5,
        }}
      >
        <Box sx={{ position: "relative", cursor: "pointer" }}>
          <CardMedia
            component="img"
            alt="1"
            image={img}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleAddToCart}
          />
          <CardContent
            sx={{
              cursor: "default",
              height: 120,
              maxHeight: 200,
              position: "relative",
            }}
          >
            <div className={classes.desc}>
              <div className={classes.name}>{name}</div>
              <div className={classes.priceW} onClick={handleViewProduct}>
                <div className={classes.button}>View Product</div>
                <div className={classes.price}>{price}$</div>
              </div>
            </div>
          </CardContent>
          {hasOverlay && (
            <Box
              sx={{
                position: "absolute",
                bottom: 120,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0,0,0,0.5)",
                cursor: "pointer",
                pointerEvents: "none",
              }}
            >
              <ShoppingCartIcon
                sx={{ color: grey[100], mt: "100%", ml: "45%", scale: "2" }}
              />
            </Box>
          )}
        </Box>
      </Card>
    </LazyLoad>
  );
};

export default SingleCard;

//-------------------------------------------------------------------------------------
// {
//   "&:hover": {
//     backgroundColor: "red",
//     cursor: "pointer",
//   },
// },
