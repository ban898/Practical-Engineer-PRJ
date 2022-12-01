import { React, useState } from "react";

import classes from "./SingleCard.module.css";

import { Box, Card, CardContent, CardMedia } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { grey } from "@mui/material/colors";

import LazyLoad from "react-lazy-load";

const SingleCard = ({ name, price, img }) => {
  const [hasOverlay, setHasOverlay] = useState(false);

  const handleMouseEnter = () => {
    setHasOverlay(true);
  };

  const handleMouseLeave = () => {
    setHasOverlay(false);
  };

  return (
    <LazyLoad offset={200}>
      <Card
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        sx={{
          maxWidth: 245,
          mt: 5,
          cursor: "pointer",
        }}
      >
        <Box sx={{ position: "relative" }}>
          <CardMedia component="img" alt="1" image={img} />
          <CardContent
            sx={{
              height: 120,
              maxHeight: 200,
              position: "relative",
            }}
          >
            <div className={classes.desc}>
              <div className={classes.name}>{name}</div>
              <div className={classes.priceW}>
                <div className={classes.button}>View Product</div>
                <div className={classes.price}>{price}$</div>
              </div>
            </div>
          </CardContent>
          {hasOverlay && (
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0,0,0,0.5)",
              }}
            >
              <ShoppingCartIcon
                sx={{ color: grey[100], mt: "70%", ml: "45%", scale: "2" }}
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
