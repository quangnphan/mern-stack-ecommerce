import "./CardShelf.css";
import React from "react";
import Slider from "react-slick";
import {
  Typography,
  CardActionArea,
  CardContent,
  Container,
} from "@mui/material";

import Card1 from "../../images/store-card-40-ipad-202210.jfif";
import Card2 from "../../images/store-card-40-iphone-14-pro-202209_FMT_WHH.jfif";
import Card3 from "../../images/store-card-40-iphone-14-202209_GEO_US.jfif";

const CardShelf = () => {
  let cardList = [
    {
      category: "IPAD",
      img: Card1,
      title: "Lovable. Drawable. Magical.",
      trade: 0,
      price: 449,
      monthlyPayment: 37.41,
      paymentPeriod: 12,
    },
    {
      category: "IPHONE 14 PRO",
      img: Card2,
      title: "Pro. Beyond.",
      trade: 1,
      price: 999.0,
      monthlyPayment: 41.62,
      paymentPeriod: 24,
    },
    {
      category: "IPHONE 14",
      img: Card3,
      title: "Big and bigger",
      trade: 1,
      price: 799,
      monthlyPayment: 33.29,
      paymentPeriod: 24,
    },
  ];
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
    responsive: [
      {
        breakpoint: 980,
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
    <Container maxWidth="md">
      <Typography className="card-slider-title" variant="h5">
        The latest. <span>Take a look at what's new, right now.</span>
      </Typography>
      <div className="card-slider">
        <Slider {...settings} className="card">
          {cardList.map((card, i) => {
            return (
              <CardActionArea
                className="card-background"
                sx={{
                  border: "none",
                  backgroundImage: `url(${card.img})`,
                  height: 400,                  
                }}
              >
                <CardContent>
                  {i % 2 === 0 ? (
                    <>
                      <Typography gutterBottom variant="body2">
                        {card.category}
                      </Typography>
                      <Typography gutterBottom variant="h5">
                        {card.title}
                      </Typography>
                      {card.trade === 1 ? (
                        <>
                          <Typography gutterBottom variant="body1">
                            From ${card.price} or ${card.monthlyPayment}/mo. for{" "}
                            {card.paymentPeriod} mo. before trade-in*
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography gutterBottom variant="body1">
                            From ${card.price} or ${card.monthlyPayment}/mo. for{" "}
                            {card.paymentPeriod} mo.*
                          </Typography>
                        </>
                      )}
                    </>
                  ) : (
                    <>
                      <Typography gutterBottom variant="body2" color="white">
                        {card.category}
                      </Typography>
                      <Typography gutterBottom variant="h5" color="white">
                        {card.title}
                      </Typography>
                      {card.trade === 1 ? (
                        <>
                          <Typography
                            gutterBottom
                            variant="body1"
                            color="white"
                          >
                            From ${card.price} or ${card.monthlyPayment}/mo. for{" "}
                            {card.paymentPeriod} mo. before trade-in*
                          </Typography>
                        </>
                      ) : (
                        <>
                          <Typography
                            gutterBottom
                            variant="body1"
                            color="white"
                          >
                            From ${card.price} or ${card.monthlyPayment}/mo. for{" "}
                            {card.paymentPeriod} mo.*
                          </Typography>
                        </>
                      )}
                    </>
                  )}
                </CardContent>
              </CardActionArea>
            );
          })}
        </Slider>
      </div>
    </Container>
  );
};

export default CardShelf;
