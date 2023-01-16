import "./PromoBanner.css";
import React from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";

const PromoBanner = () => {
  let promo = [
    {
      title:
        "Save 5% on Apple products with a new Apple Card through December 25. Only at Apple. Exclusions and terms apply.",
      direct: " ",
    },
    {
      title: "Get your holiday gifts on time.",
      direct: " ",
    },
  ];
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 100000,
  };
  return (
    <div className="promo">
      <Slider {...settings}>
        {promo.map((promo, i) => {
          return (
            <Typography className="promo-div">
              {promo.title}
              <Link to="#" underline="none">
                {promo.direct}
              </Link>
            </Typography>
          );
        })}
      </Slider>
    </div>
  );
};

export default PromoBanner;
