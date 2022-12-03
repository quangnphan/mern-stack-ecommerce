import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppleIcon from "@mui/icons-material/Apple";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  return (
    <div className="navbar">
      <Container maxWidth="md">
        <Box className="nav-container">
          <Link to="/">
            <AppleIcon />
          </Link>
          <ul>
            <li>
              <Link to="/products">Store</Link>
            </li>
            <li>
              <Link to="/">Mac</Link>
            </li>
            <li>
              <Link to="/">iPad</Link>
            </li>
            <li>
              <Link to="/">iPhone</Link>
            </li>
          </ul>
          <div className="cart">
            <ShoppingCartIcon />
          </div>
        </Box>
      </Container>
    </div>
  );
};

export default Navbar;
