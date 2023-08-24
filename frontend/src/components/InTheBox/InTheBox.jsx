import { Container, Typography } from "@mui/material";
import React from "react";
import "./InTheBox.css";

const InTheBox = ({ images }) => {
  return (
    <div className="in-the-box">
      <Container maxWidth="lg">
        <Typography variant="h3">What's in the Box</Typography>
        <div className="box-wrapper">
          <div className="box-images">
            {images
              ? images.map((image,i) => {
                  return (
                    <div key={i}>
                      <img src={image.image} alt="inbox img" />
                      <p>{image.item}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InTheBox;
