import React from "react";
import "./Cart.css";
import { Typography, Container, Grid } from "@mui/material";
import iPadImg from "../../assets/products/ipad-pro.jpeg";
import { useSelector } from "react-redux";

const Cart = () => {
  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart);
  console.log(products);
  return (
    <div className="bag">
      <Container maxWidth="lg">
        <Typography variant="h3">Review your bag.</Typography>
        <Typography variant="body1">Free delivery and free returns.</Typography>
        {products.map((item)=>{
          return(
            <div className="bag-products">
          <Grid container className="bag-product">
            <Grid item sx={12} md={4} className="bag-images">
              <img src={iPadImg} alt="img" />
            </Grid>
            <Grid item sx={12} md={8} className="bag-info">
              <div>
                <Typography variant="h5">
                  {item.name} {item.storage}
                  <br />- {item.color}
                </Typography>
              </div>
              <div className="info-right">
                <span className="price">${item.price}</span>
                <button>Remove</button>
              </div>
            </Grid>
          </Grid>
          
        </div>
          )
        })}
        <div className="bag-payment">
          <Grid container className="bag-product">
            <Grid item sx={12} md={4} className="bag-images"></Grid>
            <Grid item sx={12} md={8} className="bag-info payment-info-right">
              <div>
                <Typography>Subtotal</Typography>
                <Typography>Shipping</Typography>
                <Typography>Estimated Tax</Typography>
              </div>
              <div className="payment-right">
                <Typography>$1,099.00</Typography>
                <Typography>$7.99</Typography>
                <Typography>$???</Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container className="bag-total">
            <Grid item sx={12} md={4}></Grid>
            <Grid item sx={12} md={8} className="bag-info">
              <div>
                <Typography variant="h5">Total</Typography>
              </div>
              <div>
                <Typography variant="h5">${cart.total}</Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
