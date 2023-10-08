import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import "./Products.css";
import EcomDataService from "../../services/ecom.js";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Benefits from "../../components/Benefits/Benefits";
import Ads from "../../components/Ads/Ads";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const getProducts = async () => {
    try {
      setLoading(true);
      const response = await EcomDataService.getAll();
      let allProducts = response.data?.products;

      setProducts(allProducts);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch products");
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(false);
    setError("");
    getProducts();
  }, []);

  if (error) {
    return (
      <div className="loading" style={{ minHeight: "60vh" }}>
        {error}
      </div>
    );
  }

  if (loading) {
    return (
     <Loading />
    );
  }

  return (
    <div className="products">
      <Container maxWidth="xl">
        <div className="header">
          <Typography variant="h3">Save on a new Mac or iPad.</Typography>
          <Typography variant="body1">
            Available to current and newly accepted college students and their
            parents, as well as faculty, staff, and homeschool teachers of all
            grade levels.
          </Typography>
        </div>
        <div className="products-category">
          {products
            .reduce((categories, item) => {
              const category = item.category;
              const existingCategory = categories.find(
                (cat) => cat.name === category.name
              );

              if (!existingCategory) {
                categories.push({ name: category.name, items: [item] });
              } else {
                existingCategory.items.push(item);
              }

              return categories;
            }, [])
            .map((category, key) => (
              <div key={key} className="category">
                <div className="category-name">
                  <Typography variant="h5">{category.name}</Typography>
                  <Typography className="body1">
                    Pricing shown for all {category.name} models.
                  </Typography>
                </div>
                <div className="products-list">
                  {category.items.map((product, productKey) => {
                    const lowestPrice = Math.min(
                      ...product.sizes.flatMap((size) =>
                        size.storages.map((storage) => storage.price)
                      )
                    );
                    return (
                      <Link key={productKey} to={`/product/${product._id}`}>
                        <div className="product-box">
                          <img src={product.images[0]} alt="" />
                          <Typography variant="h5">{product.name}</Typography>
                          <Typography>From ${lowestPrice}</Typography>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
        </div>
        <Benefits />
        <Ads />
      </Container>
    </div>
  );
};

export default Products;
