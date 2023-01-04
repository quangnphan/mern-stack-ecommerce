import React from "react";
import "./ProductList.css";
import { Button, Container } from "@mui/material";
import ipadProIcon from "../../assets/header-icons/ipad-pro-icon.svg";
import ipadAirIcon from "../../assets/header-icons/ipad-air-icon.svg";
import ipadProImg from "../../assets/products/ipad-pro.jpeg";
import { Link } from "react-router-dom";

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: ipadProImg,
      name: "iPad Pro",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad.`,
    },
    {
      id: 2,
      image: ipadProImg,
      name: "iPad Pro",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad.`,
    },
    {
      id: 3,
      image: ipadProImg,
      name: "iPad Pro",
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
      enim ad.`,
    },
  ];

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
      <div className="product-list-ribbon">Get your gifts on time.</div>
      <Container maxWidth="lg">
        <div className="product-list-grid">
          {products.map((product) => {
            return (
              <div className="product-list-box">
                <div className="product-list-box-img">
                  <img src={product.image} alt="product img" />
                </div>
                <div>
                  <h4>Apple</h4>
                  <h3>{product.name}</h3>
                  <p>{product.desc}</p>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="contained">Select</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default ProductList;
