import React, { useState } from "react";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button, FormControl } from "@mui/material";

const StripePayment = ({ clientSecret, errorMsg, setErrorMsg }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || errorMsg) {
      return;
    } else {
      setProcessing(true);
      await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(PaymentElement),
          },
        })
        .then(({ paymentIntent }) => {
          setErrorMsg(false);
          setProcessing(false);
          setSuccess(true);
        })
        .catch((error) => {
          console.log(error);
          setErrorMsg(error.message);
          setProcessing(false);
          setSuccess(false);
        });
    }
  };

  return (
    <FormControl onSubmit={paymentHandler}>
      
      <PaymentElement />
      {errorMsg && <div className="errorMsg">{errorMsg}</div>}
      <Button className="pay-btn" variant="contained" disabled={!stripe || !elements || processing || success}>
        Pay Now
      </Button>
    </FormControl>
  );
};

export default StripePayment;
