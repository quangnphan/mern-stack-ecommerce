import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import "./Footer.css";
import { services, shopAndLearn, appleStore } from "../../utils/constants";

const Footer = () => {
  return (
    <div className="footer">
      <Container maxWidth="md">
        <Box className="footer-list">
          <ul>
            <li>Shop and Learn</li>
            {shopAndLearn.map((item, index) => (
              <li key={index}>
                <Link>{item}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>Services</li>
            {services.map((item, index) => (
              <li key={index}>
                <Link>{item}</Link>
              </li>
            ))}
          </ul>
          <ul>
            <li>Apple Store</li>
            {appleStore.map((item, index) => (
              <li key={index}>
                <Link>{item}</Link>
              </li>
            ))}
          </ul>
        </Box>
        <Box className="footer-bottom">
          <p style={{ margin: "20px 0" }}>
            More ways to shop: Find an Apple Store or other retailer near you.
          </p>
          <div style={{ marginBottom: "15px" }}>
            © Apple, Inc. All rights reserved.
          </div>
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
