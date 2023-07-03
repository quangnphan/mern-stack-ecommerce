import React, { useEffect, useState } from "react";
import "./LightBox.css";
import Slider from "react-slick";
// import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LightBox = ({ images }) => {
  const [data, setData] = useState([]);
  
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    setData(images);
  }, [images]);

  return (
    <div className="lightbox-wrapper">
      <Slider {...settings}>
        {data?.map((img, key) => {
          return <img key={key} src={img} alt="img-slider" />;
        })}
      </Slider>
    </div>
  );
};

export default LightBox;
