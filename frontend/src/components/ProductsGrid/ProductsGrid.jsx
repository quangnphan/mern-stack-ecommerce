import React from "react";
import { Container, Grid,Typography } from "@mui/material";
import './ProductsGrid.css';

const ProductsGrid = () => {
  return (
    <div className="products-grid">
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} md={6} className="grid-1">
            <Typography variant="h3">
              iPhone 14 Pro
            </Typography>
            <Typography variant="body1">
              Pro. Beyond.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="grid-2">
          <Typography variant="h3">
              iPad
            </Typography>
            <Typography variant="body1">
              Loveable. Drawable. Magical.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="grid-3">
          <Typography variant="h3">
              iMac
            </Typography>
            <Typography variant="body1">
              Nothing.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} className="grid-4">
          <Typography variant="h3">
              iPad Pro
            </Typography>
            <Typography variant="body1">
              Supercharged by M2.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ProductsGrid;
