import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const StripePayment = (amount) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState(
    "sk_test_51MbEP2J0BezhDIqMM57Nk4XZzesmZWeErdI2l4j7ZIg8TwiSItnnqdPJNYRiX4EQAUNfGittqjoeH2TkcNgjChl000VbfMVSk9"
  );
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
          `/api/payment/create?total=${total * 100}`
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
