import React from "react";
import "./ProductList.css";
import { Button, Container } from "@mui/material";
import ipadProIcon from "../../assets/header-icons/ipad-pro-icon.svg";
import ipadAirIcon from "../../assets/header-icons/ipad-air-icon.svg";
import ipadProImg from "../../assets/products/ipad-pro.jpeg";

const ProductList = () => {
  return (
    <div className="product-list">
      <Container maxWidth="md">
        <div className="product-list-header-wrapper">
          <div className="product-list-icon">
            <img src={ipadProIcon} alt="product-icon" />
            <span>iPad Pro</span>
          </div>
          <div className="product-list-icon">
            <img src={ipadAirIcon} alt="product-icon" />
            <span>iPad Air</span>
          </div>
        </div>
      </Container>
      <div className="product-list-ribbon">Get your holiday gifts on time.</div>
      <Container maxWidth="lg">
        <div className="product-list-grid">
          <div className="product-list-box">
            <div className="product-list-box-img">
              <img src={ipadProImg} alt="product img" />
            </div>
            <div>
              <h4>Apple</h4>
              <h3>iPad Pro</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad.
              </p>
              <Button variant="contained">
                Select
              </Button>
            </div>
          </div>
          <div className="product-list-box">
            <div className="product-list-box-img">
              <img src={ipadProImg} alt="product img" />
            </div>
            <div>
              <h4>Apple</h4>
              <h3>iPad Pro</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad.
              </p>
              <Button variant="contained">
                Select
              </Button>
            </div>
          </div>
          <div className="product-list-box">
            <div className="product-list-box-img">
              <img src={ipadProImg} alt="product img" />
            </div>
            <div>
              <h4>Apple</h4>
              <h3>iPad Pro</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad.
              </p>
              <Button variant="contained">
                Select
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
