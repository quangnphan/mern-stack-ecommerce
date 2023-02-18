import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const StripePayment = (amount) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState();
  const [errorMsg, setErrorMsg] = useState("");
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

  useEffect(() => {
    async function getClientSecret(total) {
      try {
        const { data } = await axios.post(
          `http://localhost:5000/api/ecom/payment`, {
            total: total
          }
        );
        setClientSecret(data.clientSecret);
        console.log(data);
      } catch (error) {
        console.log(error);
        setErrorMsg(error.message);
      }
    }
    getClientSecret(amount.amount);
  }, [amount]);

  return (
    <form onSubmit={paymentHandler}>
      <CardElement />
      {errorMsg && <div className="errorMsg">{errorMsg}</div>}
      <button disabled={!stripe || !elements || processing || success}>
        Pay Now
      </button>
    </form>
  );
};

export default StripePayment;
