import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppleIcon from "@mui/icons-material/Apple";
import { Popover, Button, Typography } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const handleHamburger = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleOpenCart = () => {
    setIsCartOpen(!isCartOpen);
  };

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
            <Link to="/">
              <AppleIcon />
            </Link>
          </div>
          <div className={`nav-list ${isNavOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link to="/products">Store</Link>
              </li>
              <li>
                <Link to="/products/mac">Mac</Link>
              </li>
              <li>
                <Link to="/products/ipad">iPad</Link>
              </li>
              <li>
                <Link to="/products/iphone">iPhone</Link>
              </li>
            </ul>
          </div>
          <div className="cart nav-icons">
            <ShoppingBagIcon onClick={handleOpenCart} />
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
                <Typography sx={{ p: 2 }}>Your cart is empty.</Typography>
              </div>
              <div className="cart-popover-btn">
                <Button>
                  <Link to="/cart" onClick={() => setIsCartOpen(false)}>
                    {" "}
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
