import React, { useState, useEffect } from "react";
import "./LightBox.css";
import Product1 from "../../assets/products/ipad-pro.jpeg";
import Product2 from "../../assets/products/ipad-pro-02.jpeg";
import Product3 from "../../assets/products/ipad-pro.jpeg";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const LightBox = () => {
  const images = [Product1, Product2, Product3];
  // eslint-disable-next-line
  const [image, setImage] = useState(images);
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex(index - 1);
  };

  const handleNext = () => {
    setIndex(index + 1);
  };

  const handleImageSelect = (i) => {
    setIndex(images.indexOf(i));
  };

  useEffect(() => {
    const lastIndex = image.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, image]);

  return (
    <div className="lightbox-wrapper">
      <div className="lightbox">
        <button className="prev" onClick={handlePrev}>
          <ArrowBackIosNewIcon />
        </button>
        <div className="lightbox-img-wrapper">
          <img className="lightbox-img" src={image[index]} alt="lightbox-img" />
        </div>
        <button className="next" onClick={handleNext}>
          <ArrowForwardIosIcon />
        </button>
      </div>
      <div className="images">
        {images.map((item) => {
          return (
            <div className="images-wrapper">
              <img
                onClick={() => handleImageSelect(item)}
                src={item}
                alt="img-select"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LightBox;
