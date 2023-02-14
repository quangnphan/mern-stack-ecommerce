import React from "react";
import Slider from "react-slick";
import "./Carousel.css";
import YourHome from "../../assets/background/your-home.jpeg";
import Rooms from "../../assets/background/rooms.jpeg";
import Fitness from "../../assets/background/fitness-devices.jpeg";
import Lock from "../../assets/background/apple-security.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const array = [
    {
      name: "Your Home",
      background: YourHome,
    },
    {
      name: "Lock",
      background: Lock,
    },
    {
      name: "Rooms",
      background: Rooms,
    },
    {
      name: "Fitness",
      background: Fitness,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="carousel">
      <Slider {...settings}>
        {array.map((item, index) => {
          return <img key={index} src={item.background} alt="carousel img" />;
        })}
      </Slider>
    </div>
  );
};

export default Carousel;
