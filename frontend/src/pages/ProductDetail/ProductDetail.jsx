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
import { useDispatch } from "react-redux";
import { addProduct } from "../../app/slices/cartSlice";


const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [name, setName] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(); 
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");
  const [storage, setStorage] = useState("");
  const [baseStorage, setbaseStorage] = useState(0);
  // const [totalStorage, setTotalStorage] = useState(0);
  const [base, setBase] = useState(0);
  const [totalDisplay, setTotalDisplay] = useState(0);
  const [connectivity, setConnectivity] = useState("");
  const [baseConnecivity, setBaseConnectivity] = useState(0);
  // const [totalConnectivity, setTotalConnectivity] = useState(0);
  const [price, setPrice] = useState(0) ;
  const [quantity, setQuantity] = useState(1);
  const [paymentType, setPaymentType] = useState("");

  const getProduct = async () => {
    const response = await EcomDataService.get(params.id);
    setCategory(response.data?.category);
    setName(response.data?.skus.name);
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
    // setTotalStorage(parseInt(event.target.value.split(",")[2]));
  };
  const handleConnectivityChange = (event) => {    
    setConnectivity(event.target.value.split(",")[0]);
    setBaseConnectivity(parseInt(event.target.value.split(",")[1]));
    // setTotalConnectivity(parseInt(event.target.value.split(",")[2]));
  };
  const handlePaymentChange = (event) => {
    setPaymentType(event.target.value);
  }
  const handleQuantityChange = (event) => {
    setQuantity (currentQuantity => {
      return currentQuantity + event
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault(); 
    console.log(`Name: ${name}`);   
    console.log(`Model: ${model}`);
    console.log(`Color: ${color}`);
    console.log(`Storage: ${storage}`);
    console.log(`Connectivity: ${connectivity}`);
    console.log(quantity);
    console.log(`Price: ${price}`);
    dispatch (
      addProduct({ name, model, color, storage, price, quantity})
    );
  };

  useEffect(() => {
    getProduct();    
    setPrice(totalDisplay+baseStorage+baseConnecivity);
  }, [params.id,totalDisplay,baseStorage,baseConnecivity,price]);

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
                              backgroundColor: color==="Scarlet"? "#BB0000" : color==="Midnight" ? "#302E41" :  color==="Starlight" ? "#F8F9EC": color ,                              
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

                    {(                      
                      <>
                        <Typography variant="h4" className="form-typography">
                          Payment options. <span>Select one that works for you.</span>
                        </Typography>   
                              <label for="payment">
                                <input
                                  type="radio"                                  
                                  id="payment"
                                  name="radio-group5"
                                  value={price}
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
                                          From ${price}
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
                              <label for="payment-monthly">
                                <input
                                  type="radio"                                  
                                  id="payment-monthly"
                                  name="radio-group5"
                                  value={(price / 12).toFixed(2)}
                                  onClick={handlePaymentChange}                                  
                                  required
                                />
                                <div id="selectable-display">
                                  <span>
                                    <span>
                                      <span>
                                       <strong>Finance</strong>                                       
                                      </span>
                                    </span>

                                    <span>
                                      <span>
                                        <span>
                                          Apple Card Monthly Installments
                                        </span>
                                        <span>
                                          From $ {(price / 12).toFixed(2)}/mo. for 12 mo.
                                        </span>
                                        <span>
                                          {price} Total
                                        </span>
                                        <br/>
                                        <hr/>
                                        <ul>
                                          <li>Pay for your iPad with Apple Card Monthly Installments</li>
                                          <li>Financed at 0% APR◇</li>
                                        </ul>                                        
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </label>   
                      </>
                    )}

                        <Typography variant="h4" className="form-typography">
                          Quantity. <span>You might need more than one.</span>
                          <br/>
                          <button onClick={() => handleQuantityChange(-1)}>-</button>
                          {quantity}
                          <button onClick={() => handleQuantityChange(1)}>+</button>
                          <br/>
                          Each from ${price} or ${(price / 12).toFixed(2)}/mo.per month for 12 mo.
                        </Typography>  


                  </FormControl>
                  <Button type="submit">CONTINUE</Button>
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
