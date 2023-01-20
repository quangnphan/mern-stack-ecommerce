import {
  Container,
  Grid,
  Typography,
  FormControl,
  Button,
  stepContentClasses,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { LightBox, InTheBox } from "../../components";
import "./ProductDetail.css";
import EcomDataService from "../../services/ecom.js";
import { useParams } from "react-router-dom";
import { display } from "@mui/system";

const ProductDetail = () => {
  const params = useParams();
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [selectedProduct, setSelectedProduct] = useState();

  const getProduct = async () => {
    const response = await EcomDataService.get(params.id);
    setSelectedProduct(response.data?.skus);
  };

  const handleModelChange = (event) => {
    setModel(event.target.value);
  };
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Model: ${model}`);
  };

  useEffect(() => {
    getProduct();
    console.log(selectedProduct);
  }, [params.id]);

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
            <Grid item xs={12} md={7} className="product-slider">
              <LightBox />
            </Grid>
            <Grid item xs={12} md={5}>
              <div className="product-selection">                
                <form className="ipad-form" onSubmit={handleSubmit}>
                  <FormControl>                    
                    {selectedProduct?.variants.display && (
                      <>
                        <Typography variant="h4">
                          <span>Model.</span> Choose your settings
                        </Typography>
                        {selectedProduct?.variants?.display.map(
                          (display, index) => {
                            let monthlyPayment = ((selectedProduct.price.base + display.price) / 12).toFixed(2);
                            return (
                              <label for={display.size}>
                                <input
                                  type="radio"
                                  id={display.size}
                                  name="radio-group"
                                  value={display.size}
                                  onClick={handleModelChange}
                                />
                                <div id="selectable-display">
                                  <span>
                                    <span>
                                      <span>
                                        <strong>{display.size} display</strong>
                                      </span>
                                    </span>

                                    <span>
                                      <span>
                                        <span>
                                          From ${selectedProduct.price?.base}
                                        </span>
                                        <span>or ${monthlyPayment}/mo.</span>
                                        <span>for 12 months</span>
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </label>
                            );
                          }
                        )}
                      </>
                    )}

                    {selectedProduct?.variants.colors && (
                      <>
                        <Typography variant="h4">
                          <span>Finish.</span> Pick your favorite color
                        </Typography>
                        <Typography variant="h4">
                                Color <span >{color.toUpperCase()}</span>
                        </Typography>
                        {selectedProduct?.variants?.colors.map(
                          (color, index) => { 
                            let divStyle = {
                              backgroundColor: "red",
                              
                         }                           
                            return (
                              <>                                                        
                              <label for={color}>
                                <input
                                  type="radio"
                                  id={color}
                                  name="radio-group"
                                  value={color}
                                  onClick={handleColorChange}
                                />                                 
                                <div id="selectable-color" style={divStyle}>
                                  
                                </div>
                              </label>
                              </>);
                          }
                        )}
                      </>
                    )}
                  </FormControl>
                  <Button type="submit">Submit</Button>
                </form>

                {/* {selectedProduct?.variants?.display?.length > 1 ? (
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
                    )} */}
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
