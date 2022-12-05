import React from 'react';
import {Container,Typography} from "@mui/material";
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className='hero'>
        <Container maxWidth="lg">
            <Typography variant='h2'>
                iPhone 14
            </Typography>
            <Typography variant='body1'>
                Big and bigger.
            </Typography>
            <Link to="">
                Learn more
            </Link>
        </Container>
    </div>
  )
}

export default Hero