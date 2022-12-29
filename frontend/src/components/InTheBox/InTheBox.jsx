import { Container, Typography } from "@mui/material";
import React from "react";
import "./InTheBox.css";
import iPad from "../../assets/inthebox/ipad-pro-11.jpeg";
import Cable from "../../assets/inthebox/cable.jpeg";
import Adapter from "../../assets/inthebox/adapter.jpeg";

const InTheBox = () => {
  return (
    <div className="in-the-box">
      <Container maxWidth="lg">
        <Typography variant="h3">What's in the Box</Typography>
        <div className="box-wrapper">
          <div className="box-images">
            <div>
              <img className="img1" src={iPad} alt="inbox img" />
              <p className="p1">11-inch iPad Pro</p>
            </div>
            <div>
              <img className="img2" src={Cable} alt="inbox img" />
              <p className="p2">USB-C Charge Cable</p>
            </div>
            <div>
              <img className="img3" src={Adapter} alt="inbox img" />
              <p className="p3">20W USB-C Power Adapter</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InTheBox;
