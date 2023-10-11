import React, { useState, useEffect } from "react";
import { Container, Typography } from "@mui/material";
import "./Products.css";
import EcomDataService from "../../services/ecom.js";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import Benefits from "../../components/Benefits/Benefits";
import Ads from "../../components/Ads/Ads";
import Slider from "react-slick";
import SearchBar from "../../components/SearchBar/SearchBar";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const settings = {
    speed: 700,
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: "unslick",
      },
    ],
  };

  const fetchData = async (searchTerm = "") => {
    try {
      setLoading(true);

      // Define your search parameter (replace 'mysearchparam' with your actual search term)
      const searchParam = searchTerm;

      // Append the search parameter to the URL if it's provided
      const response = await EcomDataService.getAll(searchParam);

      let allProducts = response.data?.products;

      setProducts(allProducts);
      setLoading(false);
    } catch (error) {
      setError("Failed to fetch products");
      setLoading(false);
      console.log(error);
    }
  };

  const getProducts = () => {
    fetchData();
  };

  const handleSearch = (searchTerm) => {
    fetchData(searchTerm);
  };

  useEffect(() => {
    setLoading(false);
    setError("");
    getProducts();
    // eslint-disable-next-line
  }, []);

  if (error) {
    return (
      <div className="loading" style={{ minHeight: "60vh" }}>
        {error}
      </div>
    );
  }

  return (
    <div className="products">
      <Container maxWidth="xl">
        <Container maxWidth="lg">
          <div className="header">
            <Typography variant="h3">
              <span>Store.</span> The best way to buy the products you love.
            </Typography>
          </div>
          <div className="search-wrapper">
          <SearchBar onSearch={handleSearch} />
          </div>
          {!loading ? (
            <div className="products-category">
              {products.length > 0 ? (
                products
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
                        <Typography variant="h5">
                          Shop {category.name}
                        </Typography>
                      </div>
                      <div className="products-list">
                        <Slider {...settings}>
                          {category.items.map((product, productKey) => {
                            const lowestPrice = Math.min(
                              ...product.sizes.flatMap((size) =>
                                size.storages.map((storage) => storage.price)
                              )
                            );
                            return (
                              <Link
                                key={productKey}
                                to={`/product/${product._id}`}
                              >
                                <div className="product-box">
                                  <img src={product.images[0]} alt="" />
                                  <div>
                                    <Typography variant="h5">
                                      {product.name}
                                    </Typography>
                                    <Typography>From ${lowestPrice}</Typography>
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </Slider>
                      </div>
                    </div>
                  ))
              ) : (
                <Typography style={{ textAlign: "center", margin: "30px 0" }}>
                  No products found.
                </Typography>
              )}
            </div>
          ) : (
            <Loading />
          )}
        </Container>
        <Benefits />
        <Ads />
      </Container>
    </div>
  );
};

export default Products;
