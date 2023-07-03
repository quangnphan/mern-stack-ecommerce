import React, { useEffect, useState } from "react";
import "./ProductList.css";
import { Button, CircularProgress, Container } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import EcomDataService from "../../services/ecom.js";

const ProductList = () => {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setError("");
    setLoading(true);
    getProducts();
    // eslint-disable-next-line
  }, [params.category]);

  const getProducts = async () => {
    try {
      const response = await EcomDataService.getProductsByCategory(
        params.category
      );
      const products = response.data?.products;

      setProducts(products);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch products");
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="error">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="product-list">
      <div className="product-list-ribbon">Get your gifts on time.</div>
      <Container maxWidth="lg">
        <div className="product-list-grid">
          {products.map((product, key) => {
            return (
              <div key={key} className="product-list-box">
                <div>
                  <div className="product-list-box-img">
                    <img src={product.images[0]} alt="product img" />
                  </div>
                  <div className="product-list-box-info">
                    <div>
                      <h4>Apple</h4>
                      <h3>{product.name}</h3>
                      <ul>
                        {product.description.map((item, index) => {
                          return <li key={index}>{item}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
                <div>
                  <Link to={`/product/${product._id}`}>
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
