import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const array = [
    {
      name: "slide 1",
      background: "black",
    },
    {
      name: "slide 2",
      background: "white",
    },
    {
      name: "slide 3",
      background: "red",
    },
    {
      name: "slide 4",
      background: "blue",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="carousel">
      <Slider {...settings}>
        {array.map((item, index) => {
          return (
            <div key={index} className="slider-div">
              <div style={{background: item.background,minHeight:'400px'}}>
                {item.name}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
