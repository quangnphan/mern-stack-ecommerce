import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./Success.css";
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Success = () => {
  const purchaserData = useSelector(
    (state) => state.update_purchaser_data.purchaserData
  );
  useEffect(() => {
    console.log(purchaserData);
  }, [purchaserData]);
  return (
    <div className="success-container">
      <Container maxWidth="lg">
        <Typography variant="h5">
          Thank you for your purchase, {purchaserData.first_name}!
        </Typography>
        <Typography variant="body2">
          We have received your purchase and are preparing it for shipment. We
          will ship your order to:
        </Typography>
        <Typography variant="body2">{purchaserData.address}</Typography>
        <Link to="/">
          <Button style={{ marginTop: "15px" }}>Back to Homepage</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Success;
