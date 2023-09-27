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
                iPhone 15 Pro
            </Typography>
            <Typography variant='h4'>
                So strong. So light. So Pro.
            </Typography>
            <Typography variant="h5">
            <Link to="/product/65148403519bea5e638da713">
                Learn more <span><ArrowForwardIosIcon /></span>
            </Link>
            </Typography>
        </Container>
    </div>
  )
}

export default Hero