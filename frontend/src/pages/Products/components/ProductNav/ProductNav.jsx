import "./ProductNav.css";
import React from "react";
import Slider from "react-slick";
import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";
import MAC from "../../images/store-card-13-mac-nav-202203.png";
import iPhone from "../../images/store-card-13-iphone-nav-202209_GEO_US.png";
import iPad from "../../images/store-card-13-ipad-nav-202210.png";

const ProductNav = () => {
  let productList = [
    {
      category: "MAC",
      img: MAC,
    },
    {
      category: "iPhone",
      img: iPhone,
    },
    {
      category: "iPad",
      img: iPad,
    },
  ];
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="product-slider">
      <Slider {...settings} className="product-card">
        {productList.map((product, i) => {
          return (
            <Card sx={{ maxWidth: 100 , border: "none", boxShadow: "none",}} >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="70"
                  image={product.img}
                  alt={"all" + product.category}
                />
                <CardContent>
                  <Typography gutterBottom variant="body2" >
                    {product.category}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          );
        })}
      </Slider>
    </div>
  );
};

export default ProductNav;
