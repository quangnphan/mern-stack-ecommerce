import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LightBox, InTheBox } from "../../components";
import "./ProductDetail.css";
import { Form, Formik, Field } from "formik";
import EcomDataService from "../../services/ecom.js";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  const [selectedProduct, setSelectedProduct] = useState();

  const getProduct = async () => {
    const response = await EcomDataService.find(params.category, "category");
    let category = response.data?.products[0]?.skus;
    console.log(category);
    category.forEach((sku) => {
      if (sku.sku === params.id) {
        console.log(sku);
        setSelectedProduct(sku);
        
      }
    });
  };

  useEffect(() => {
    getProduct();
    
  }, []);
  console.log(selectedProduct);
  return (
    <div className="product-detail">
      <Container maxWidth="lg">
        <div className="product-detail-header">
          <div className="detail-header-left">
            <span>New</span>
            <Typography variant="h3">Buy iPad Pro</Typography>
            <p>From $799 or $66.58/mo. for 12 mo.</p>
          </div>
          <div className="detail-header-right">
            <div className="detail-promotion">
              Get $30-$200 for your trade-in with Apple.
            </div>
            <div className="detail-promotion">
              Get 3% Daily Cash back with Apple Card.
            </div>
          </div>
        </div>
        <div className="product-detail-main">
          <Grid container spacing={2}>
            <Grid item xs={7} className="product-slider">
              <LightBox />
            </Grid>
            <Grid item xs={5}>
              <div className="product-selection">
                <Typography variant="h4">
                  <span>Model.</span> Choose your settings
                </Typography>
                <Formik>
                  <Form>
                {selectedProduct?.variants?.display?.length > 1 ? (
                      <>
                        {selectedProduct?.variants?.display?.map((display, index) => {
                          return(
                          <Grid item>
                            <Field
                              name="display"
                              type="checkbox"
                              // className="radio"
                              label="display"
                              // label={
                              //   <>
                              //     <Typography variant="h4">
                              //      {display} display
                              //     </Typography>
                              //   </>
                              // }
                            />
                          </Grid>)
                        })}
                      </>
                    ) : (
                      <></>
                    )}
                </Form>
                </Formik>
              </div>
            </Grid>
          </Grid>
          <div className="in-the-box-container">
            <InTheBox />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
