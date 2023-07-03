import React, { useState, useEffect } from "react";
import { Container, Typography, CircularProgress } from "@mui/material";
import "./Products.css";
import EcomDataService from "../../services/ecom.js";
import Calendar from "./images/prop-calendar.png";
import Shipping from "./images/icon-shipping.png";
import AppleIcon from "./images/icon-apple.png";
import { Link } from "react-router-dom";
import Skeleton from '@mui/material/Skeleton';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading,setLoading] = useState(false);

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
    return <div className="loading" style={{minHeight: '60vh'}}>{error}</div>;
  }

  if(loading) {
    return (
       <Container maxWidth="lg" style={{minHeight: '50vh'}}>
          <p className="loading" style={{marginTop: '50px'}}>Please wait...</p>
         <Skeleton height={100} animation="wave"/>
         <Skeleton height={100} animation="wave"/>
         <Skeleton height={100} animation="wave"/>
       </Container>
    )
  }

  return (
    <div className="products">
      <Container maxWidth="xl">
        <div className="header">
          <Typography variant="h3">
            Save on a new Mac or iPad.
          </Typography>
          <Typography variant="body1">
            Available to current and newly accepted college students and their
            parents, as well as faculty, staff, and homeschool teachers of all
            grade levels.
          </Typography>
        </div>
        <div className="products-category">
          {products.length > 0 ? (
            products
              .reduce((categories, item, key) => {
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
              ))
          ) : (
            <div className="loading">
              <CircularProgress />
            </div>
          )}
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
