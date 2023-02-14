import React from 'react';
import {Container,Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <Container maxWidth="lg">
            <Typography variant='h1'>
                iPhone 14
            </Typography>
            <Typography variant='h4'>
                Big and bigger.
            </Typography>
            <Typography variant="h5">
            <Link to="/product/iPhone/iPhone14_Main">
                Learn more
            </Link>
            </Typography>
        </Container>
    </div>
  )
}

export default Hero