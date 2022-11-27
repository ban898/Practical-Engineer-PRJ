import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

import img1 from "../../img/ShopImg/slider1.jpg";
import img2 from "../../img/ShopImg/slider2.jpg";
import img3 from "../../img/ShopImg/slider3.jpg";

const ImageSlider = () => {
  const images = [{ url: img1 }, { url: img2 }, { url: img3 }];

  return (
    <div>
      <SimpleImageSlider
        height={"100%"}
        width={"100%"}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  );
};

export default ImageSlider;
