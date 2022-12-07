import React from "react";
import Slider from "react-slick";
import img01 from '../../images/imac.jpeg';
import img02 from '../../images/ipad-pro.jpeg';
import img03 from '../../images/ipad.jpeg';
import img04 from '../../images/iphone-14-pro.jpeg';
import './Carousel.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
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
          <div>
            <img src={img01} alt="img-slider"/>
          </div>
          <div>
            <img src={img02} alt="img-slider"/>
          </div>
          <div>
            <img src={img03} alt="img-slider"/>
          </div>
          <div>
            <img src={img04} alt="img-slider"/>
          </div>
        </Slider>
  </div>
  );
};

export default Carousel;
