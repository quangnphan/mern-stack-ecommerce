import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppleIcon from "@mui/icons-material/Apple";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleHamburger = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="navbar">
      <Container maxWidth="md">
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
            <ShoppingBagIcon />
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Navbar;
