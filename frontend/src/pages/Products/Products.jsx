import React, { useState, useEffect } from "react";
// import PromoBanner from './components/PromoBanner/PromoBanner'
// import ShopAndChat from './components/ShopAndChat/ShopAndChat'
// import ProductNav from './components/ProductNav/ProductNav'
// import CardShelf from './components/CardShelf/CardShelf'
import { Container, Typography, CircularProgress } from "@mui/material";
import "./Products.css";
import EcomDataService from "../../services/ecom.js";
import Calendar from "./images/prop-calendar.png";
import Shipping from "./images/icon-shipping.png";
import AppleIcon from "./images/icon-apple.png";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const response = await EcomDataService.getAll();
    let allProducts = response.data?.products;

    setProducts(allProducts);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div className="products">
      <Container maxWidth="xl">
        {/* <PromoBanner />
      <ShopAndChat />
      <ProductNav />
      <CardShelf /> */}
        <div className="header">
          <Typography variant="h3">
            Save on a new Mac or iPad
            <br />
            with Apple education pricing.
          </Typography>
          <Typography variant="body1">
            Available to current and newly accepted college students and their
            parents, as well as faculty, staff, and homeschool teachers of all
            grade levels.
          </Typography>
        </div>
        <div className="products-category">
          {products.length > 0
            ? products.map((item) => {
                return (
                  <div className="category">
                    <div className="category-name">
                      <Typography variant="h5">{item.category}</Typography>
                      <Typography className="body1">
                        Pricing shown for all {item.category} models.
                      </Typography>
                    </div>
                    <div className="products-list">
                      {item.skus.map((product) => {
                        return (
                          <Link to={`/product/${item.category}/${product.sku}`}>
                            <div className="product-box">
                              <img src={product.variants.images[0]} alt="" />
                              <Typography variant="h5">
                                {product.name}
                              </Typography>
                              <Typography>
                                From ${product.price?.base}
                              </Typography>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            : <CircularProgress />}
        </div>
        <div className="benefits-flex">
          <div className="benefit">
            <img src={Calendar} alt="" />
            <Typography variant="h5">
              Get 3% Daily Cash back with Apple Card
            </Typography>
            <Typography variant="body1">
              And pay over time, interest-free when you choose to check out with
              Apple Card Monthly Installments.
            </Typography>
          </div>
          <div className="benefit">
            <img src={Shipping} alt="" />
            <Typography variant="h5">Fast, free delivery</Typography>
            <Typography variant="body1">
              Or pick up available items at an Apple Store.
            </Typography>
          </div>
          <div className="benefit">
            <img src={AppleIcon} alt="" />
            <Typography variant="h5">AppleCare+</Typography>
            <Typography variant="body1">
              Get additional service and support. Save with education pricing on
              AppleCare+ for Mac.
            </Typography>
          </div>
        </div>
        <div className="refurbished">
          <div className="info">
            <Typography variant="h4">
              Get special savings with Apple Certified Refurbished.
            </Typography>
            <Typography>
              Your favorite products for less, backed by our standard one-year
              warranty.
            </Typography>
          </div>
          <div className="refurbished-img-holder"></div>
        </div>
        <div className="apple-tv">
          <div className="info">
            <Typography variant="h4">
              Apple Music Student Plan now comes with Apple TV+ for free.
            </Typography>
          </div>
          <div className="apple-tv-img-holder"></div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
