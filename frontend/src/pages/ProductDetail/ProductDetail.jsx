import { Container,Grid,Typography } from "@mui/material";
import React from "react";
import { LightBox } from "../../components";
import "./ProductDetail.css";

const ProductDetail = () => {
  return (
    <div className="product-detail">
      <Container maxWidth="lg">
        <div className="product-detail-header">
          <div className="detail-header-left">
            <span>New</span>
            <Typography variant="h3">
              Buy iPad Pro
            </Typography>
            <p>
              From $799 or $66.58/mo. for 12 mo.
            </p>
          </div>
          <div className="detail-header-right">
            <div className="detail-promotion">
              Get $30-$200 for your trade-in with Apple.
            </div>
            <div className="detail-promotion">
              Get 3% Daily Cash back with Apple Card.
            </div>
          </div>
        </div>
        <div className="product-detail-main">
         <Grid container spacing={2}>
            <Grid item xs={7}>
            <LightBox />
            </Grid>
            <Grid item xs={5}>
            <div className="product-selection">selection</div>
            </Grid>
         </Grid>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
