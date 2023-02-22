import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import {
  Button,
  Container,
  Stepper,
  Step,
  StepLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import InfoIcon from "@mui/icons-material/Info";
import PaymentIcon from "@mui/icons-material/Payment";
import "./StripePayment.css";

const StripePayment = ({ clientSecret, errorMsg, setErrorMsg }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  const stepIcons = (props) => {
    const { active, completed } = props;
    const icons = {
      1: <ContactMailIcon />,
      2: <InfoIcon />,
      3: <PaymentIcon />,
    };

    return (
      <div className={active ? "active" : completed ? "active" : ""}>
        {icons[String(props.icon)]}
      </div>
    );
  };

  const StepContent = ({ step }) => {
    switch (step) {
      case 0:
        return (
          <>
            <Typography variant="h5">Contact Information</Typography>
            <br />
            <Grid container spacing={2} style={{ marginBottom: "20px" }}>
              <Grid item xs={6}>
                <TextField required label="First Name" />
              </Grid>
              <Grid item xs={6}>
                <TextField required label="Last Name" />
              </Grid>
              <Grid item xs={6}>
                <TextField required label="Email" />
              </Grid>
              <Grid item xs={6}>
                <TextField required label="Phone Number" />
              </Grid>
            </Grid>
          </>
        );
      case 1:
        return (
          <>
            <Typography variant="h5">Address Information</Typography>
            <br />
            <Grid container spacing={2} style={{ marginBottom: "20px" }}>
              <Grid item xs={12}>
                <TextField required label="Street Address" />
              </Grid>
              <Grid item xs={4}>
                <TextField required label="City" />
              </Grid>
              <Grid item xs={4}>
                <TextField required label="State" />
              </Grid>
              <Grid item xs={4}>
                <TextField required label="Zipcode" type="number" />
              </Grid>
            </Grid>
          </>
        );
      case 2:
        return (
          <>
            <Typography variant="h5">Card Information</Typography>
            <br />
            <CardElement />
            {errorMsg && <div className="errorMsg">{errorMsg}</div>}
          </>
        );
      default:
        return <></>;
    }
  };

  const handleNext = () => setActiveStep((prev) => prev + 1);

  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleReset = () => setActiveStep(0);

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

  return (
    <Container maxWidth="md" style={{ marginTop: "50px" }}>
      <Stepper activeStep={activeStep}>
        {[1, 2, 3].map((e) => (
          <Step key={e}>
            <StepLabel StepIconComponent={stepIcons} />
          </Step>
        ))}
      </Stepper>

      <form style={{ marginTop: "50px" }} onSubmit={paymentHandler}>
        {activeStep === 3 ? (
          <Button onClick={handleReset}>Reset</Button>
        ) : (
          <>
            <form>
              <StepContent step={activeStep} />
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={!stripe || !elements || processing || success}
              >
                {activeStep === 2 ? "Pay" : "Next"}
              </Button>
            </form>
          </>
        )}
      </form>
    </Container>
  );
};

export default StripePayment;
