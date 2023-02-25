import {
  Container,
  Grid,
  Typography,
  FormControl,
  Button,
} from "@mui/material";
import React, { useEffect, useState } from "react";
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
  const [image, setImage] = useState("");
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
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(1);
  // eslint-disable-next-line
  const [paymentType, setPaymentType] = useState("");
  const [id, setId] = useState("");

  const getProduct = async () => {
    const response = await EcomDataService.get(params.id);
    setCategory(response.data?.category);
    setName(response.data?.skus.name);
    setSelectedProduct(response.data?.skus);
    setBase(response.data?.skus.price.base);
    setImage(response.data?.skus.variants.images[0]);
  };
  const handleModelChange = (event) => {
    setModel(event.target.value.split(",")[0]);
    setTotalDisplay(base + parseInt(event.target.value.split(",")[1]));
    const nextLabel = event.target.parentElement.nextSibling;
    if (nextLabel) {
      nextLabel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleColorChange = (event) => {
    setColor(event.target.value);
    const nextLabel = event.target.parentElement.nextSibling;
    if (nextLabel) {
      nextLabel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const handleStorageChange = (event) => {
    setStorage(event.target.value.split(",")[0]);
    setbaseStorage(parseInt(event.target.value.split(",")[1]));
    const nextLabel = event.target.parentElement.nextSibling;
    if (nextLabel) {
      nextLabel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // setTotalStorage(parseInt(event.target.value.split(",")[2]));
  };
  const handleConnectivityChange = (event) => {
    setConnectivity(event.target.value.split(",")[0]);
    setBaseConnectivity(parseInt(event.target.value.split(",")[1]));
    const nextLabel = event.target.parentElement.nextSibling;
    if (nextLabel) {
      nextLabel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    // setTotalConnectivity(parseInt(event.target.value.split(",")[2]));
  };
  const handlePaymentChange = (event) => {
    setPaymentType(event.target.value);
    const nextLabel = event.target.parentElement.nextSibling;
    if (nextLabel) {
      nextLabel.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const generateId = () => {
    setId(Date.now());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    generateId();
    dispatch(
      addProduct({
        ...selectedProduct,
        name,
        id,
        model,
        color,
        storage,
        price,
        quantity,
        image,
      })
    );
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    getProduct();
    generateId();
    setPrice(totalDisplay + baseStorage + baseConnecivity);
    // eslint-disable-next-line
  }, [params.id, totalDisplay, baseStorage, baseConnecivity, price]);

  return (
    <div className="product-detail">
      <Container maxWidth="lg">
        <div className="product-detail-header">
          <div className="detail-header-left">
            <span>New</span>
            <Typography variant="h3">Buy {selectedProduct?.name}</Typography>
            <p>
              From ${selectedProduct?.price.base} or $
              {(selectedProduct?.price.base / 12).toFixed(2)}/mo. for 12 mo.
            </p>
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
          <div className="product-detail-flex">
            <div className="product-slider">
              <LightBox />
            </div>
            <div className="product-selection">
              <div>
                <form className="ipad-form" onSubmit={handleSubmit}>
                  <FormControl>
                    {selectedProduct?.variants.display && (
                      <>
                        <Typography variant="h5" className="form-typography">
                          Model. <span>Choose your settings</span>
                        </Typography>
                        {selectedProduct?.variants?.display.map((display) => {
                          let basePrice =
                            selectedProduct.price.base + display.price;
                          let monthlyPayment = (
                            (selectedProduct.price.base + display.price) /
                            12
                          ).toFixed(2);
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
                                <span className="input-column">
                                  <span className="input-column-right">
                                    <span className="input-row-right">
                                      <strong>{display.size} display</strong>
                                    </span>
                                  </span>

                                  <span className="input-column-left">
                                    <span className="input-row-left detail-font">
                                      <span className="input-row-single">
                                        From ${basePrice}
                                      </span>
                                      <span className="input-row-single">
                                        or ${monthlyPayment}/mo.
                                      </span>
                                      <span className="input-row-single">
                                        for 12 months
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </label>
                          );
                        })}
                      </>
                    )}

                    {selectedProduct?.variants.colors && (
                      <>
                        <Typography variant="h5" className="form-typography">
                          Finish.<span> Pick your favorite color</span>
                        </Typography>
                        <Typography variant="h7">
                          Color{" "}
                          <span className="hide">{color.toUpperCase()}</span>
                        </Typography>
                        <div className="colors">
                          {selectedProduct?.variants?.colors.map(
                            (color, index) => {
                              let divStyle = {
                                backgroundColor:
                                  color === "Scarlet"
                                    ? "#BB0000"
                                    : color === "Midnight"
                                    ? "#302E41"
                                    : color === "Starlight"
                                    ? "#F8F9EC"
                                    : color,
                              };
                              return (
                                <div>
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
                                    <div
                                      className="color-select"
                                      id="selectable-color"
                                      style={divStyle}
                                    ></div>
                                  </label>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </>
                    )}

                    {selectedProduct?.variants.storages && (
                      <>
                        <Typography variant="h5" className="form-typography">
                          Storage. <span>How much space do you need</span>
                        </Typography>
                        {selectedProduct?.variants?.storages.map((storage) => {
                          let basePrice = totalDisplay + storage.price;
                          let monthlyPayment = (basePrice / 12).toFixed(2);
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
                                <span className="input-column">
                                  <span className="input-column-right">
                                    <span className="input-row-right">
                                      <strong>{storage.unit}</strong>
                                    </span>
                                  </span>

                                  <span className="input-column-left">
                                    <span className="input-row-left detail-font">
                                      <span className="input-row-single">
                                        From ${basePrice}
                                      </span>
                                      <span className="input-row-single ">
                                        or ${monthlyPayment}/mo.
                                      </span>
                                      <span className="input-row-single ">
                                        for 12 months
                                      </span>
                                    </span>
                                  </span>
                                </span>
                              </div>
                            </label>
                          );
                        })}
                      </>
                    )}

                    {selectedProduct?.variants.connectivity &&
                      category === "iPad" && (
                        <>
                          <Typography variant="h5" className="form-typography">
                            Connectivity.{" "}
                            <span>Choose how you'd stay connected</span>
                          </Typography>
                          {selectedProduct?.variants?.connectivity.map(
                            (connect) => {
                              let basePrice =
                                totalDisplay + baseStorage + connect.price;
                              let monthlyPayment = (basePrice / 12).toFixed(2);
                              return (
                                <label for={connect.type}>
                                  <input
                                    type="radio"
                                    id={connect.type}
                                    name="radio-group4"
                                    value={[
                                      connect.type,
                                      connect.price,
                                      basePrice,
                                    ]}
                                    onClick={handleConnectivityChange}
                                    required
                                  />
                                  <div id="selectable-display">
                                    <span className="input-column">
                                      <span className="input-column-right">
                                        <span className="input-row-right">
                                          {connect.type === 1 ? (
                                            <strong>Wi-fi</strong>
                                          ) : (
                                            <strong>Wi-fi + Cellular</strong>
                                          )}
                                        </span>
                                      </span>

                                      <span className="input-column-left">
                                        <span className="input-row-left detail-font">
                                          <span className="input-row-single ">
                                            From ${basePrice}
                                          </span>
                                          <span className="input-row-single ">
                                            or ${monthlyPayment}/mo.
                                          </span>
                                          <span className="input-row-single ">
                                            for 12 months
                                          </span>
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
                        <Typography variant="h5" className="form-typography">
                          Connectivity.{" "}
                          <span>
                            International unlock - Carrier worried free
                          </span>
                        </Typography>
                      </>
                    )}

                    {
                      <>
                        <Typography variant="h5" className="form-typography">
                          Payment options.{" "}
                          <span>Select one that works for you.</span>
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
                              <span className="input-row-left">
                                <span className="input-row-single left-align">
                                  <strong>Buy</strong>
                                </span>
                                <span className="input-row-single left-align detail-font">
                                  From ${price}
                                </span>
                              </span>

                              <span>
                                <span>
                                  <br />
                                  <hr />
                                  <br />
                                  <ul>
                                    <li className="detail-font">
                                      Pay the total amount today
                                    </li>
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
                              <span className="input-row-left">
                                <span className="input-row-single left-align">
                                  <strong>Finance</strong>
                                </span>
                                <span className="input-row-single left-align detail-font">
                                  Apple Card Monthly Installments
                                </span>
                                <span className="input-row-single left-align detail-font">
                                  From $ {(price / 12).toFixed(2)}/mo. for 12
                                  mo.
                                </span>
                                <span className="input-row-single left-align detail-font">
                                  ${price} Total
                                </span>
                              </span>

                              <span>
                                <span>
                                  <br />
                                  <hr />
                                  <br />
                                  <ul>
                                    <li className="detail-font">
                                      Pay for your iPad with Apple Card Monthly
                                      Installments
                                    </li>
                                    <li className="detail-font">
                                      Financed at 0% APR◇
                                    </li>
                                  </ul>
                                </span>
                              </span>
                            </span>
                          </div>
                        </label>
                      </>
                    }

                    <Typography variant="h5" className="form-typography">
                      Quantity. <span>You might need more than one.</span>
                    </Typography>
                    <div class="quantity-container">
                      <button
                        type="button"
                        class="decrease-button"
                        onClick={() => {
                          if (quantity === 1) {
                            return;
                          } else {
                            setQuantity(quantity - 1);
                          }
                        }}
                      >
                        -
                      </button>
                      <span type="text" class="quantity-input">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        class="increase-button"
                        onClick={() => setQuantity(quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    <Typography
                      style={{ marginTop: "10px" }}
                      variant="h7"
                      className="form-typography"
                    >
                      Each from ${price} or ${(price / 12).toFixed(2)}/mo.per
                      month for 12 mo.
                    </Typography>
                    <Button
                      className="continue-to-cart-btn"
                      variant="contained"
                      type="submit"
                    >
                      Add To Bag
                    </Button>
                  </FormControl>
                </form>
              </div>
            </div>
          </div>
          <div className="in-the-box-container">
            <InTheBox />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
