import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { Button, Container } from "@mui/material";
// import ipadProIcon from "../../assets/header-icons/ipad-pro-icon.svg";
// import ipadAirIcon from "../../assets/header-icons/ipad-air-icon.svg";
import DemoProduct from "../../assets/products/ipad-pro-03.jpeg";
import { Link, useParams } from "react-router-dom";
import EcomDataService from "../../services/ecom.js";

const ProductList = () => {
  const params = useParams();
  const [products, setProducts] = useState();
  const [category, setCategory] = useState();

  const getProducts = async () => {
    const response = await EcomDataService.getAll();
    let allProducts = response.data?.products;
    let productCate = allProducts.find(
      (i) => i.category.toUpperCase() === params.category.toUpperCase()
    );

    setProducts(productCate.skus);
    setCategory(productCate.category);
  };

  useEffect(() => {
    getProducts();
  }, [params.category]);

  return (
    <div className="product-list">
      {/* <Container maxWidth="md">
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
      </Container> */}
      <div className="product-list-ribbon">Get your gifts on time.</div>
      <Container maxWidth="lg">
        {products && (
          <div className="product-list-grid">
            {products.map((product) => {
              return (
                <div className="product-list-box">
                 <div>
                 <div className="product-list-box-img">
                    <img src={DemoProduct} alt="product img" />
                  </div>
                  <div className="product-list-box-info">
                    <div>
                      <h4>Apple</h4>
                      <h3>{product.name}</h3>
                      <ul>
                        {product.variants.features.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                 </div>
                  <div>
                      <Link to={`/product/${category}/${product.id}`}>
                        <Button variant="contained">Select</Button>
                      </Link>
                    </div>
                </div>
              );
            })}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ProductList;
