import { Container, Typography, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { LightBox, InTheBox } from "../../components";
import { Link } from "react-router-dom";
import "./ProductDetail.css";
import EcomDataService from "../../services/ecom.js";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addProduct } from "../../app/slices/cartSlice";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const ProductDetail = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [popupSuccess, setPopupSuccess] = useState(false);
  const [name, setName] = useState();
  const [images, setImages] = useState();
  const [colors, setColors] = useState();
  const [sizes, setSizes] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [lowestPrice, setLowestPrice] = useState(0);
  const [error, setError] = useState(false);

  const getProductLowestPrice = (product) => {
    if (
      !product ||
      !Array.isArray(product.sizes) ||
      product.sizes.length === 0
    ) {
      return null; // Return null or any other appropriate value if the data is invalid
    }

    let lowestPrice = Infinity;

    for (const size of product.sizes) {
      for (const storage of size.storages) {
        if (storage.price < lowestPrice) {
          lowestPrice = storage.price;
        }
      }
    }

    return lowestPrice;
  };

  const getProduct = async () => {
    try {
      const response = await EcomDataService.getProduct(params.id);
      const productData = response.data?.product;
      if (productData) {
        const price = getProductLowestPrice(productData);
        setLowestPrice(price);
        setName(productData.name);
        setImages(productData.images);
        setColors(productData.colors);
        setSizes(productData.sizes);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      name === "" ||
      selectedModel === "" ||
      selectedColor === "" ||
      selectedStorage === "" ||
      quantity === ""
    ) {
      setIsDialogOpen(true);
      return;
    }
    dispatch(
      addProduct({
        ...{},
        name,
        model: selectedModel.size,
        color: selectedColor,
        storage: selectedStorage.capacity,
        price: selectedStorage.price,
        quantity,
        images,
      })
    );
    setPopupSuccess(true);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setError(false);
    getProduct();
  }, [params.id]);

  if(error){
    return <div className="error">Failed to fetch product.</div>
  }

  return (
    <div className="product-detail">
      <Container maxWidth="lg">
        <Dialog open={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
          <DialogTitle>{"One or more options are not selected!"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please select all product options before adding it to your cart.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setIsDialogOpen(false)}>OK</Button>
          </DialogActions>
        </Dialog>

        <Dialog
          open={popupSuccess}
          // onClose={()=>setIsDialogOpen(false)}
        >
          <DialogTitle>
            {"Product successfully added to your shopping cart!"}
          </DialogTitle>
          <DialogActions>
            <Button variant="outlined">
              <Link to="/products" onClick={() => setPopupSuccess(false)}>
                CONTINUE SHOPPING
              </Link>
            </Button>
            <Button variant="contained">
              <Link
                style={{ color: "white" }}
                to="/cart"
                onClick={() => setPopupSuccess(false)}
              >
                PROCEED TO CHECKOUT
              </Link>
            </Button>
          </DialogActions>
        </Dialog>

        <div className="product-detail-header">
          <div className="detail-header-left">
            <span>New</span>
            <Typography variant="h3">Buy {name}</Typography>
            <p>
              From ${lowestPrice} or $ $
              {parseFloat(lowestPrice / 12).toFixed(2)}/mo. for 12 mo.
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
              <LightBox images={images} />
            </div>
            <div className="product-selection">
              <div>
                <form className="form" onSubmit={handleSubmit}>
                  <div>
                    <Typography variant="h5" className="form-typography">
                      Model. <span>Choose your settings</span>
                    </Typography>
                    {sizes?.map((sizeItem, key) => {
                      return (
                        <label key={key}>
                          <input
                            type="radio"
                            name="radio-group1"
                            onChange={() => {
                              setSelectedModel(sizeItem)
                              setSelectedStorage(null)
                            }}
                          />
                          <div id="selectable-display">
                            <span className="input-column">
                              <span className="input-column-right">
                                <span className="input-row-right">
                                  <strong>{sizeItem?.size} display</strong>
                                </span>
                              </span>

                              <span className="input-column-left">
                                <span className="input-row-left detail-font">
                                  <span className="input-row-single">
                                    From ${getProductLowestPrice(sizeItem)}
                                  </span>
                                  <span className="input-row-single">
                                    or $
                                    {parseFloat(
                                      getProductLowestPrice(sizeItem) / 12
                                    ).toFixed(2)}
                                    /mo.
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
                  </div>

                  {selectedModel && (
                    <div>
                      <Typography variant="h5" className="form-typography">
                        Finish.<span> Pick your favorite color</span>
                      </Typography>
                      <Typography variant="h7">
                        Color -{" "}
                        <span style={{ fontWeight: "700" }}>
                          {selectedColor?.toUpperCase()}
                        </span>
                      </Typography>
                      <div className="colors">
                        {colors?.map((color, key) => {
                          return (
                            <label key={key}>
                              <input
                                type="radio"
                                name="radio-group2"
                                onClick={() => setSelectedColor(color.des)}
                              />
                              <div
                                className="color-select"
                                id="selectable-color"
                                style={{ backgroundColor: `${color.hex}` }}
                              ></div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {selectedColor && (
                    <div>
                      <Typography variant="h5" className="form-typography">
                        Storage: <span>How much space do you need?</span>
                      </Typography>
                      {selectedModel?.storages?.map((storage, key) => {
                        return (
                          <label key={key} htmlFor={storage.capacity}>
                            <input
                              type="radio"
                              id={storage.capacity}
                              name="radio-group3"
                              checked={selectedStorage === storage}
                              onChange={() => setSelectedStorage(storage)}
                            />
                            <div id="selectable-display">
                              <span className="input-column">
                                <span className="input-column-right">
                                  <span className="input-row-right">
                                    <strong>{storage.capacity}</strong>
                                  </span>
                                </span>

                                <span className="input-column-left">
                                  <span className="input-row-left detail-font">
                                    <span className="input-row-single">
                                      Starting from ${storage.price}
                                    </span>
                                    <span className="input-row-single">
                                      or $
                                      {parseFloat(storage.price / 12).toFixed(
                                        2
                                      )}
                                      /mo.
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
                    </div>
                  )}

                  {selectedStorage && (
                    <div>
                      <Typography variant="h5" className="form-typography">
                        Quantity. <span>You might need more than one.</span>
                      </Typography>
                      <div className="quantity-container">
                        <button
                          type="button"
                          className="decrease-button"
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
                        <span type="text" className="quantity-input">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          className="increase-button"
                          onClick={() => setQuantity(quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  )}

                  <Typography
                    style={{ marginTop: "10px" }}
                    variant="h7"
                    className="form-typography"
                  >
                    Each from ${selectedStorage ? selectedStorage?.price : 0} or
                    $
                    {selectedStorage
                      ? (selectedStorage?.price / 12).toFixed(2)
                      : 0}{" "}
                    /mo.per month for 12 mo.
                  </Typography>

                 
                    <Button
                      className="continue-to-cart-btn"
                      variant="contained"
                      type="submit"
                      disabled={selectedModel && selectedStorage && selectedColor ? false : true}
                    >
                      Add To Bag
                    </Button>
            
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
