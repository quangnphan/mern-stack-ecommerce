import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <Container maxWidth="md">
        <Box className="footer-list">
          <ul>
            <li>
              Shop and Learn
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Store</Link>
            </li>
            <li>
              <Link to="/">Mac</Link>
            </li>
            <li>
              <Link to="/">iPad</Link>
            </li>
            <li>
              <Link to="/">iPhone</Link>
            </li>
          </ul>
          <ul>
          <li>
              Services
            </li>
            <li>
              <Link>Apple Music</Link>
            </li>
            <li>
              <Link>Apple TV+</Link>
            </li>
            <li>
              <Link>Apple Fitness+</Link>
            </li>
            <li>
              <Link>Apple News+</Link>
            </li>
            <li>
              <Link>Apple Arcade</Link>
            </li>
            <li>
              <Link>Apple One</Link>
            </li>
            <li>
              <Link>Apple Books</Link>
            </li>
            <li>
              <Link>Apple Store</Link>
            </li>
          </ul>
          <ul>
          <li>
              Apple Store
            </li>
            <li>
              <Link>Find a Store</Link>
            </li>
            <li>
              <Link>Genius Bar</Link>
            </li>
            <li>
              <Link>Today at Apple</Link>
            </li>
            <li>
              <Link>Financing</Link>
            </li>
            <li>
              <Link>Order Status</Link>
            </li>
            <li>
              <Link>Shopping Help</Link>
            </li>
          </ul>
        </Box>
        <Box className="footer-bottom">
          <p style={{margin: '20px 0'}}>
            More ways to shop: Find an Apple Store or other retailer near you.
          </p>
          <div>© Apple, Inc. All rights reserved.</div>
          <div className="footer-end">
            <p>Community guidelines</p>
            <p>Terms</p>
            <p>Privacy policy</p>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
