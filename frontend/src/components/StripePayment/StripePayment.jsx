import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";
import "./StripePayment.css";
import EcomDataService from "../../services/ecom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../app/slices/cartSlice";
import { updateInfo } from "../../app/slices/confirmationSlice";
import { useNavigate } from "react-router-dom";

const StripePayment = ({ clientSecret, errorMsg, setErrorMsg }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  const amount = useSelector((state) => state.cart.total);
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [purchaserData, setPurchaserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
  });

  const onChange = (e) => {
    const value = e.target.value;
    setPurchaserData({
      ...purchaserData,
      [e.target.name]: value,
    });
  };

  const objCheck = (obj) => {
    for (var key in obj) {
      if (obj[key] == null || obj[key] === "") return false;
    }
    return true;
  };

  const createOrder = async (data) => {
    try {
      await EcomDataService.createOrder(data);
    } catch (error) {
      console.log(error);
    }
  };

  const paymentHandler = async (e) => {
    e.preventDefault();

    const params = {
      first_name: purchaserData.first_name,
      last_name: purchaserData.last_name,
      email: purchaserData.email,
      phone_number: purchaserData.phone_number,
      address: purchaserData.address,
      city: purchaserData.city,
      state: purchaserData.state,
      zipcode: purchaserData.zipcode,
    };

    //get product id and quantity from product slice
    const order = Object.values(products).map(({ id, quantity }) => ({
      productId: id,
      quantity,
    }));

    const data = {
      ...params,
      products: order,
      total_amount: amount,
      shipping_address: purchaserData.address,
    };
    const check = objCheck(params);
    if (!stripe || !elements || check === false) {
      setErrorMsg("Please fill all required fields");
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
          //call api create order
          createOrder(data);

          setErrorMsg("Success!");
          setProcessing(false);
          if (paymentIntent) {
            dispatch(updateInfo(purchaserData));
            dispatch({ type: clearCart });
            setSuccess(true);
            navigate("/success");
          }
        })
        .catch((error) => {
          setErrorMsg(error.message);
          setProcessing(false);
          setSuccess(false);
        });
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <div className="contact">
        <Grid container spacing={2} style={{ marginBottom: "20px" }}>
          <Grid item xs={6}>
            <TextField
              value={purchaserData.first_name}
              onChange={onChange}
              required
              label="First Name"
              name="first_name"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={purchaserData.last_name}
              onChange={onChange}
              required
              label="Last Name"
              name="last_name"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={purchaserData.email}
              onChange={onChange}
              required
              label="Email"
              name="email"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={purchaserData.phone_number}
              onChange={onChange}
              required
              label="Phone Number"
              name="phone_number"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              value={purchaserData.address}
              onChange={onChange}
              required
              label="Street Address"
              name="address"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              value={purchaserData.city}
              onChange={onChange}
              required
              label="City"
              name="city"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              value={purchaserData.state}
              onChange={onChange}
              required
              label="State"
              name="state"
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              value={purchaserData.zipcode}
              onChange={onChange}
              required
              label="Zipcode"
              type="number"
              name="zipcode"
            />
          </Grid>
        </Grid>
      </div>
      <div>
        <form onSubmit={paymentHandler}>
          <Typography variant="h5">Card Information</Typography>
          <br />
          <CardElement />
          <br />
          {errorMsg && <div className="errorMsg">{errorMsg}</div>}
          <br />
          <Button
            className="pay-btn"
            variant="contained"
            color="primary"
            type="submit"
            disabled={!stripe || !elements || processing || success}
          >
            Pay
          </Button>
        </form>
      </div>
    </Container>
  );
};

export default StripePayment;
