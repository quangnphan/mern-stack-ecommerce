import React from "react";
import { Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductsGrid.css";

const ProductsGrid = () => {
  return (
    <div className="products-grid">
      {/* <Container maxWidth="lg"> */}
      <Grid container>
        <Grid item xs={12} md={5.93} className="grid-1">
          <Typography variant="h3">iPhone 14 Pro</Typography>
          <Typography variant="body1">Pro. Beyond.</Typography>
          <Link to="/product/iPhone/iPhone14_Pro">
                Learn more
            </Link>
        </Grid>
        <Grid item xs={12} md={5.93} className="grid-2">
          <Typography variant="h3">iPad</Typography>
          <Typography variant="body1">Loveable. Drawable. Magical.</Typography>
          <Link to="/product/iPad/iPad2022">
                Learn more
            </Link>
        </Grid>
        <Grid item xs={12} md={5.93} className="grid-3">
          <Typography variant="h3">iMac</Typography>
          <Typography variant="body1">Nothing.</Typography>
          <Link to="/product/MAC/MAC1">
                Learn more
            </Link>
        </Grid>
        <Grid item xs={12} md={5.93} className="grid-4">
          <Typography variant="h3">iPad Pro</Typography>
          <Typography variant="body1">Supercharged by M2.</Typography>
          <Link to="/product/iPad/iPadPro2022">
                Learn more
            </Link>
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  );
};

export default ProductsGrid;
