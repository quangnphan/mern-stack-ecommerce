import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";

const Stripejs = (amount) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret,setClientSecret] = useState("");
  const [errorMsg,setErrorMsg] = useState("");

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    } else {
      console.log("checkout");
    }
  };

  useEffect(()=>{
    async function getClientSecret(total){
        try{
            const {data} = await axios.post(
                `/api/payment/create?total=${total * 100}`
            );
            setClientSecret(data.clientSecret);
            console.log(data);
        }catch(error){
            console.log(error);
            setErrorMsg(error.message);
        }
    }
    getClientSecret(amount);
  },[amount]);

  return (
    <form onSubmit={paymentHandler}>
      <CardElement />
      <button disabled={!stripe || !elements}>Pay now</button>
    </form>
  );
};

export default Stripejs;
