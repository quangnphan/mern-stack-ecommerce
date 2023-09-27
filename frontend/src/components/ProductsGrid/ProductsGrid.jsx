import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductsGrid.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ProductsGrid = () => {
  return (
    <div className="products-grid">
      {/* <Container maxWidth="lg"> */}
      <Grid container>
        <Grid item xs={12} md={5.93} className="grid-1">
          <Typography variant="h3">iPhone 14 Pro Max</Typography>
          <Typography variant="body1">Pro. Beyond.</Typography>
          <Link to="/product/649b54f46431c73f75170176">
                Learn more <span><ArrowForwardIosIcon /></span>
            </Link>
        </Grid>
        <Grid item xs={12} md={5.93} className="grid-2">
          <Typography variant="h3">iPad Air</Typography>
          <Typography variant="body1">Loveable. Drawable. Magical.</Typography>
          <Link to="/product/64a2086dc0b0ab3f55eba0ca">
                Learn more <span><ArrowForwardIosIcon /></span>
            </Link>
        </Grid>
        <Grid item xs={12} md={5.93} className="grid-3">
          <Typography variant="h3">Macbook does <span>that.</span></Typography>
          <Typography variant="body1">Beautiful. Magical. Bigger Screen.</Typography>
          <Link to="/product/64a204f6c0b0ab3f55eba0a8">
                Learn more <span><ArrowForwardIosIcon /></span>
            </Link>
        </Grid>
        <Grid item xs={12} md={5.93} className="grid-4">
          <Typography variant="h3">iPad Pro</Typography>
          <Typography variant="body1">Supercharged by M2.</Typography>
          <Link to="/product/649b53636431c73f7517016a">
                Learn more <span><ArrowForwardIosIcon /></span>
            </Link>
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  );
};

export default ProductsGrid;
