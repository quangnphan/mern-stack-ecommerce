import { Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import "./Checkout.css";
import { Stripejs } from "../../components";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector } from "react-redux";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51MbEP2J0BezhDIqMiucxOQuyBA31bqGKccfRdxLnzZKjb0GkTYNUeRkOhLE69P7WoneutNYX3YpBKbikJQecvR1x00eOKx6OmZ"
);

const Checkout = () => {
  const amount = useSelector((state)=>state.cart.total);
  console.log(amount);
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'sk_test_51MbEP2J0BezhDIqMM57Nk4XZzesmZWeErdI2l4j7ZIg8TwiSItnnqdPJNYRiX4EQAUNfGittqjoeH2TkcNgjChl000VbfMVSk9',
  };
  return (
    <div className="checkout">
      <Container maxWidth="lg">
        <div className="checkout-header">
          <Typography>Checkout</Typography>
          <Link to="/cart">Order Summary: ${amount}</Link>
        </div>
        <div className="stripejs">
          <Elements stripe={stripePromise} options={options}>
            <Stripejs amount={amount}/>
          </Elements>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
