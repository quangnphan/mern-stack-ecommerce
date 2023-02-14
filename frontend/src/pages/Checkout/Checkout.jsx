import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import './Checkout.css';

const Checkout = () => {
  return (
    <div className='checkout'>
        <Container maxWidth="lg">
            <div className='checkout-header'>
                <Typography>Checkout</Typography>
                <Link to="/cart">Order Summary: $5000</Link>
            </div>
        </Container>
    </div>
  )
}

export default Checkout