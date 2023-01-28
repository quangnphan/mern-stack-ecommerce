import {
  Container,
  Grid,
  Typography,
  FormControl,
  Button,
} from "@mui/material";
import React, { useEffect, useState, } from "react";
import { LightBox, InTheBox } from "../../components";
import "./ProductDetail.css";
import EcomDataService from "../../services/ecom.js";
import { useParams } from "react-router-dom";


const ProductDetail = () => {
  const params = useParams();
  const [category, setCategory] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(); 
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [storage, setStorage] = useState("");
  const [baseStorage, setbaseStorage] = useState(0);
  const [totalStorage, setTotalStorage] = useState(0);
  const [base, setBase] = useState(0);
  const [totalDisplay, setTotalDisplay] = useState(0);
  const [connectivity, setConnectivity] = useState("");
  const [baseConnecivity, setBaseConnectivity] = useState(0);
  const [totalConnectivity, setTotalConnectivity] = useState(0);
  const [total, setTotal] = useState(0) ;
  const [paymentType, setPaymentType] = useState("");

  const getProduct = async () => {
    const response = await EcomDataService.get(params.id);
    setCategory(response.data?.category);
    setSelectedProduct(response.data?.skus); 
    setBase(response.data?.skus.price.base); 
  };  
  const handleModelChange = (event) => {
    setModel(event.target.value.split(",")[0]);
    setTotalDisplay(base + parseInt(event.target.value.split(",")[1]));    
  };
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };
  const handleStorageChange = (event) => {    
    setStorage(event.target.value.split(",")[0]);
    setbaseStorage(parseInt(event.target.value.split(",")[1]));
    setTotalStorage(parseInt(event.target.value.split(",")[2]));
  };
  const handleConnectivityChange = (event) => {    
    setConnectivity(event.target.value.split(",")[0]);
    setBaseConnectivity(parseInt(event.target.value.split(",")[1]));
    setTotalConnectivity(parseInt(event.target.value.split(",")[2]));
  };
  const handlePaymentChange = (event) => {
    setPaymentType(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();    
    console.log(`Model: ${model}`);
    console.log(`Color: ${color}`);
    console.log(`Storage: ${storage}`);
    console.log(`Connectivity: ${connectivity}`);
    console.log(`Total Display: ${totalDisplay}`);
    console.log(`Total Storage: ${totalStorage}`);
    console.log(`Total Connectivity: ${totalConnectivity}`);
    console.log(totalDisplay); 
    console.log(baseStorage);   
    console.log(baseConnecivity); 
    console.log(`Total: ${total}`);
  };

  useEffect(() => {
    getProduct();    
    console.log(selectedProduct);
    console.log(category);
    console.log(totalDisplay); 
    console.log(baseStorage);   
    console.log(baseConnecivity);  
    setTotal(totalDisplay+baseStorage+baseConnecivity);
  }, [params.id,totalDisplay,totalStorage,totalConnectivity,total]);

  return (
    <div className="product-detail">
      <Container maxWidth="lg">
        <div className="product-detail-header">
          <div className="detail-header-left">
            <span>New</span>
            <Typography variant="h3">Buy {selectedProduct?.name}</Typography>
            <p>From ${selectedProduct?.price.base} or ${(selectedProduct?.price.base/12).toFixed(2)}/mo. for 12 mo.</p>
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
                        <Typography variant="h4" className="form-typography">
                          Model. <span>Choose your settings</span>
                        </Typography>
                        {selectedProduct?.variants?.display.map(
                          (display, index) => {
                            let basePrice = (selectedProduct.price.base + display.price);
                            let monthlyPayment = ((selectedProduct.price.base + display.price) / 12).toFixed(2);
                            return (
                              <label for={display.size}>
                                <input
                                  type="radio"                                  
                                  id={display.size}
                                  name="radio-group1"
                                  value={[display.size, display.price]}
                                  onClick={handleModelChange}                                 
                                  required
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
                                          From ${basePrice}
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
                        <Typography variant="h4" className="form-typography">
                          Finish.<span> Pick your favorite color</span>
                        </Typography>
                        <Typography variant="h4">
                                Color <span className="hide">{color.toUpperCase()}</span>
                        </Typography>
                        {selectedProduct?.variants?.colors.map(
                          (color, index) => { 
                            let divStyle = {
                              backgroundColor: color==="Scarlet"? "red" : color,                              
                         }                           
                            return (
                              <>                                                        
                              <label for={color}>
                                <input
                                  type="radio"
                                  id={color}
                                  name="radio-group2"
                                  value={color}
                                  onClick={handleColorChange}                                
                                  key={index}
                                  required
                                />                                 
                                <div id="selectable-color" style={divStyle}>
                                  
                                </div>
                              </label>
                              </>);
                          }
                        )}
                      </>
                    )}

                    {selectedProduct?.variants.storages && (
                      <>
                        <Typography variant="h4" className="form-typography">
                          Storage. <span>How much space do you need</span>
                        </Typography>
                        {selectedProduct?.variants?.storages.map(
                          (storage, index) => {
                            let basePrice = (totalDisplay + storage.price);
                            let monthlyPayment = ((basePrice) / 12).toFixed(2);
                            return (
                              <label for={storage.unit}>
                                <input
                                  type="radio"                                  
                                  id={storage.unit}
                                  name="radio-group3"
                                  value={[storage.unit, storage.price, basePrice]}
                                  onClick={handleStorageChange}                                  
                                  required                                
                                  
                                />
                                <div id="selectable-display">
                                  <span>
                                    <span>
                                      <span>
                                        <strong>{storage.unit}</strong>
                                      </span>
                                    </span>

                                    <span>
                                      <span>
                                        <span>
                                          From ${basePrice}
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

                    {selectedProduct?.variants.connectivity && category === "iPad" && (
                      <>
                        <Typography variant="h4" className="form-typography">
                          Connectivity. <span>Choose how you'd stay connected</span>
                        </Typography>
                        {selectedProduct?.variants?.connectivity.map(
                          (connect, index) => {
                            let basePrice = (totalDisplay+ baseStorage + connect.price);
                            let monthlyPayment = ((basePrice) / 12).toFixed(2);
                            return (
                              <label for={connect.type}>
                                <input
                                  type="radio"                                  
                                  id={connect.type}
                                  name="radio-group4"
                                  value={[connect.type, connect.price, basePrice]}
                                  onClick={handleConnectivityChange}                                  
                                  required
                                />
                                <div id="selectable-display">
                                  <span>
                                    <span>
                                      <span>
                                        {connect.type === 1 ? (<strong>Wi-fi</strong>) 
                                        : (<strong>Wi-fi + Cellular</strong>)}                                        
                                      </span>
                                    </span>

                                    <span>
                                      <span>
                                        <span>
                                          From ${basePrice}
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

                    {category === "iPhone" && (
                      <>
                        <Typography variant="h4" className="form-typography">
                          Connectivity. <span>International unlock - Carrier worried free</span>
                        </Typography>                        
                      </>
                    )} 

                    {selectedProduct?.variants.connectivity && category === "iPad" && (
                      // let monthlyPayment = ((basePrice) / 12).toFixed(2);
                      <>
                        <Typography variant="h4" className="form-typography">
                          Payment options. <span>Select one that works for you.</span>
                        </Typography>   
                              <label for="payment">
                                <input
                                  type="radio"                                  
                                  id="payment"
                                  name="radio-group5"
                                  value={total}
                                  onClick={handlePaymentChange}                                  
                                  required
                                />
                                <div id="selectable-display">
                                  <span>
                                    <span>
                                      <span>
                                       <strong>Buy</strong>                                       
                                      </span>
                                    </span>

                                    <span>
                                      <span>
                                        <span>
                                          From ${total}
                                        </span>
                                        <br/>
                                        <hr/>
                                        <ul>
                                          <li>Pay the total amount today</li>
                                        </ul>                                        
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </label>   
                      </>
                    )}


                  </FormControl>
                  <Button type="submit">Add to Bag</Button>
                </form>

                
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
