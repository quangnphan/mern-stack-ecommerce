import React, { useEffect, useState } from "react";
import "./LightBox.css";
import Slider from "react-slick";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EcomDataService from "../../services/ecom.js";
import { useParams } from "react-router-dom";

const LightBox = () => {
  const params = useParams();
  const [selectedProduct, setSelectedProduct] = useState();
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ArrowForwardIosIcon />,
    prevArrow: <ArrowBackIosNewIcon />,
  };
  const getProduct = async () => {
    const response = await EcomDataService.get(params.id);
    setSelectedProduct(response.data?.skus);
  };

  useEffect(() => {    
    getProduct();
    // eslint-disable-next-line
    }, []);
  return (
    <div className="lightbox-wrapper">
      <Slider {...settings}>
        {selectedProduct?.variants?.images.map((img) => {
          return <img  src={img} alt="img-slider" />;
        })}
      </Slider>
    </div>
  );
};

export default LightBox;
