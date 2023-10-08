import React from 'react';
import { Typography } from '@mui/material';
import Calendar from "./images/prop-calendar.png";
import Shipping from "./images/icon-shipping.png";
import AppleIcon from "./images/icon-apple.png";
import "./Benefits.css";

const Benefits = () => {
  return (
    <div className="benefits-flex">
    <div className="benefit">
      <img src={Calendar} alt="" />
      <Typography variant="h5">
        Get 3% Daily Cash back with Apple Card
      </Typography>
      <Typography variant="body1">
        And pay over time, interest-free when you choose to check out with
        Apple Card Monthly Installments.
      </Typography>
    </div>
    <div className="benefit">
      <img src={Shipping} alt="" />
      <Typography variant="h5">Fast, free delivery</Typography>
      <Typography variant="body1">
        Or pick up available items at an Apple Store.
      </Typography>
    </div>
    <div className="benefit">
      <img src={AppleIcon} alt="" />
      <Typography variant="h5">AppleCare+</Typography>
      <Typography variant="body1">
        Get additional service and support. Save with education pricing on
        AppleCare+ for Mac.
      </Typography>
    </div>
  </div>
  )
}

export default Benefits