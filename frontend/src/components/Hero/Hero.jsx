import React from 'react';
import {Container,Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import './Hero.css';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
            <Link to="/product/64a20676c0b0ab3f55eba0b5">
                Learn more <span><ArrowForwardIosIcon /></span>
            </Link>
            </Typography>
        </Container>
    </div>
  )
}

export default Hero