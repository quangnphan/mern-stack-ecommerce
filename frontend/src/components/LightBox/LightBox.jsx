import React from "react";
import "./LightBox.css";
import Product1 from "../../assets/products/ipad-pro.jpeg";
import Product2 from "../../assets/products/ipad-pro-02.jpeg";
import Product3 from "../../assets/products/ipad-pro.jpeg";
import Product4 from "../../assets/products/ipad-pro-02.jpeg";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LightBox = () => {
  const images = [Product1, Product2, Product3, Product4];

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosNewIcon />,
  };

  return (
    <div className="lightbox-wrapper">
      <Slider {...settings}>
        {images.map((image, index) => {
          return <img key={index} src={image} alt="img-slider" />;
        })}
      </Slider>
    </div>
  );
};

export default LightBox;
