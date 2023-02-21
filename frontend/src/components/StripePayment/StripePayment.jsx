import React, { useState } from "react";
import {
  CardElement,
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { Button, FormControl, Input, Container, Grid, TextField } from "@mui/material";
import "./StripePayment.css";

const StripePayment = ({ clientSecret, errorMsg, setErrorMsg }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements || errorMsg) {
      console.log('haha')
      return;
    } else {
      setProcessing(true);
      await stripe
        .confirmCardPayment(clientSecret, {
          payment_method: {
            card: elements.getElement(CardElement),
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
    //FormControl does not work, try to use Formik
    <form style={{marginTop: '50px'}} onSubmit={paymentHandler}>
      {/* <Grid container spacing={2} style={{marginBottom: '20px'}}>
        <Grid item xs={6}>
          <TextField required label="First Name" />
        </Grid>
        <Grid item xs={6}>
          <TextField required label="Last Name" />
        </Grid>
        <Grid item xs={12}>
          <TextField required label="Address" />
        </Grid>
        <Grid item xs={6}>
          <TextField required label="City" />
        </Grid>
        <Grid item xs={6}>
          <TextField required label="Zipcode" type="number" />
        </Grid>
      </Grid> */}
      <CardElement />
      {errorMsg && <div className="errorMsg">{errorMsg}</div>}
      <Button
        type="submit"
        className="pay-btn"
        variant="contained"
        disabled={!stripe || !elements || processing || success}
      >
        Pay Now
      </Button>
    </form>
  );
};

export default StripePayment;
