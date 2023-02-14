import React, { useEffect } from "react";
import "./Cart.css";
import { Typography, Container, Grid, Button } from "@mui/material";
import iPadImg from "../../assets/products/ipad-pro.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeProduct } from "../../app/slices/cartSlice";
import { Link } from "react-router-dom";
const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const cart = useSelector((state) => state.cart);
  // const [tax, setTax] = useState();
  // const [subTotal, setSubTotal] = useState();
  // const [total, setTotal] = useState();

  console.log(products);

  const handleRemove = (id) => {
    dispatch(removeProduct(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  useEffect(() => {
    console.log(products);
    // let subTotal = 0;
    // let tax = 0;
    // let total = 0;
    // let shipping = Number(7.99);
    // if (products.length > 0) {
    //   subTotal = products
    //     .map((product) => product.price * product.quantity)
    //     .reduce((a, b) => a + b);

    //   setSubTotal(subTotal);

    //   //meo nho tinh tax co + shipping vo luon ko :D
    //   tax = parseFloat((((subTotal+shipping)/100) * 8.25).toFixed(2));

    //   total = parseFloat((subTotal + tax + shipping)).toFixed(2);
    //   //Sai type, check dum cho nay ku, hinh nhu cai string cai number
    //   console.log(subTotal);
    //   console.log(tax);
    //   console.log(total);

    //   setTax(tax);
    //   setTotal(total);
    //}
  }, [products]);
  return (
    <div className="bag">
      <Container maxWidth="lg">
        <div className="cart-header-flex">
          <div>
            <Typography variant="h3">Review your bag.</Typography>
            <Typography variant="body1">
              Free delivery and free returns.
            </Typography>
          </div>
          <div>
            <Button onClick={handleClear}>Clear Cart</Button>
          </div>
        </div>
        {products.length > 0 ? (
          <>
            {products.map((item) => {
              return (
                <div className="bag-products">
                  <Grid container className="bag-product">
                    <Grid item sx={12} md={4} className="bag-images">
                      <img src={iPadImg} alt="img" />
                    </Grid>
                    <Grid item sx={12} md={8} className="bag-info">
                      <div>
                        <Typography variant="h5">
                          {item.name} {item.storage}
                          <br />- {item.color} x {item.quantity}
                        </Typography>
                      </div>
                      <div className="info-right">
                        <span className="price">${item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>
                          Remove
                        </button>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              );
            })}
            <div className="bag-payment">
              <Grid container className="bag-product">
                <Grid item sx={12} md={4} className="bag-images"></Grid>
                <Grid
                  item
                  sx={12}
                  md={8}
                  className="bag-info payment-info-right"
                >
                  <div>
                    <Typography>Subtotal</Typography>
                    <Typography>Shipping</Typography>
                    <Typography>Estimated Tax</Typography>
                  </div>
                  <div className="payment-right">
                    <Typography>${cart.subTotal}</Typography>
                    <Typography>${cart.shipping}</Typography>
                    <Typography>${cart.tax}</Typography>
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
              <Link className="checkout-btn" to="/checkout">
                <Button variant="contained">
                Checkout
                </Button>
              </Link>
          </>
        ) : (
          <Typography variant="h4">Your cart is empty.</Typography>
        )}
      </Container>
    </div>
  );
};

export default Cart;
