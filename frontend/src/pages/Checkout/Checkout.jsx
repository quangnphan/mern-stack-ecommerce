import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import { Link, } from "react-router-dom";
import "./Checkout.css";
import { StripePayment } from "../../components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector,useDispatch } from "react-redux";
import EcomDataService from "../../services/ecom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.REACT_APP_STRIPE_SECRET
);

const Checkout = () => {
  const dispatch = useDispatch();
  const amount = useSelector((state) => state.cart.total);
  const [clientSecret, setClientSecret] = useState();
  const [errorMsg, setErrorMsg] = useState();

  const options = {
    clientSecret: clientSecret,
  };

  useEffect(() => {
    async function getClientSecret(total) {
      try {
        const params = {
          total: total,
        };
        const { data } = await EcomDataService.createStripePayment(params);
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.log(error);
        setErrorMsg(error.message);
      }
    }
    getClientSecret(amount);
  }, [amount]);

  return (
    <div className="checkout">
      <Container maxWidth="lg">
        <div className="checkout-header">
          <Typography variant="h4">Checkout</Typography>
          <Link to="/cart">
            Order Summary: <span>${amount}</span>
          </Link>
        </div>
        <Link className="back-btn" to="/cart">
          <ArrowBackIosIcon />
          Back to Cart
        </Link>
        {clientSecret && (
          <Elements stripe={stripePromise} options={options}>
            <StripePayment
              clientSecret={clientSecret}
              errorMsg={errorMsg}
              setErrorMsg={setErrorMsg}
              dispatch={dispatch}
            />
          </Elements>
        )}
      </Container>
    </div>
  );
};

export default Checkout;
