import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppleIcon from "@mui/icons-material/Apple";
import { Popover, Button, Typography, Badge } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useSelector } from "react-redux";


const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const products = useSelector((state) => state.cart.products);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleHamburger = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleOpenCart = () => {
    setIsNavOpen(false);
    setIsCartOpen(!isCartOpen);
  };

  const handleClick = () => {
    setIsNavOpen(false);
  }

  return (
    <div className="navbar">
      <Container maxWidth="lg">
        <Box className="nav-container">
          <div
            class={`hamburger ${isNavOpen ? "open" : ""}`}
            onClick={handleHamburger}
          >
            <div class="line line-1">
              <div class="line-inner line-inner-1"></div>
            </div>
            <div class="line line-2">
              <div class="line-inner line-inner-2"></div>
            </div>
          </div>
          <div className="nav-icons">
            <Link onClick={handleClick} to="/">
              <AppleIcon />
            </Link>
          </div>
          <div className={`nav-list ${isNavOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link onClick={handleClick} to="/products">Store</Link>
              </li>
              <li>
                <Link  onClick={handleClick} to="/products/mac">Mac</Link>
              </li>
              <li>
                <Link  onClick={handleClick} to="/products/ipad">iPad</Link>
              </li>
              <li>
                <Link  onClick={handleClick} to="/products/iphone">iPhone</Link>
              </li>
            </ul>
          </div>
          <div className="cart nav-icons">
            <Badge badgeContent={quantity} color={"primary"}>
              <ShoppingBagIcon onClick={handleOpenCart} />
            </Badge>
            <Popover
              open={isCartOpen}
              onClose={() => setIsCartOpen(false)}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              disableScrollLock={true}
            >
              <div className="cart-popover-list">
                {products.length > 0 ? (
                  <ul>
                    {products.map((prod) => {
                      return (
                        <li>
                          <div className="cart-popover-flex">
                            <div>
                              <img
                                className="cart-popover-img"
                                src={prod.image}
                                alt="cart img"
                              />
                            </div>
                            <div style={{ textAlign: "left" }}>
                              {prod.name}
                              <br />x {prod.quantity}
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <Typography sx={{ p: 2 }}>Your cart is empty.</Typography>
                )}
              </div>
              <div className="cart-popover-btn">
                <Button
                  className={products.length > 0 ? "" : "disabled"}
                  disabled={products.length > 0 ? false : true}
                >
                  <Link to="/cart" onClick={() => setIsCartOpen(false)}>
                    View Cart
                  </Link>
                </Button>
              </div>
            </Popover>
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Navbar;
