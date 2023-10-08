import React from "react";
import { Typography } from "@mui/material";
import "./Ads.css";

const Ads = () => {
  return (
    <>
      <div className="refurbished">
        <div className="info">
          <Typography variant="h4">
            Get special savings with Apple Certified Refurbished.
          </Typography>
        </div>
        <div className="refurbished-img-holder"></div>
      </div>
      <div className="apple-tv">
        <div className="info">
          <Typography variant="h4">
            Apple Music Student Plan now comes with Apple TV+ for free.
          </Typography>
        </div>
        <div className="apple-tv-img-holder"></div>
      </div>
    </>
  );
};

export default Ads;
