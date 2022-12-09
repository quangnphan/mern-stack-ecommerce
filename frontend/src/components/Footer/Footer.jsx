import React from "react";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import "./Footer.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from "@mui/icons-material/Apple";
import { links } from "../../utils/links";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <Container maxWidth="md">
        <div className="footer-wrapper">
          <div className="footer-top">
            <AppleIcon />
            <ul className="links">
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li key={id}>
                    <Link className="link" to={url}>
                      {text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <p className="about">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="footer-bottom">
            <p>Copyright {year}. All rights reserved</p>
            <div className="social-links">
              <ul className="links">
                <li>
                  <a href="#facebook">
                    <FacebookIcon />
                  </a>
                </li>
                <li>
                  <a href="#instagram">
                    <InstagramIcon />
                  </a>
                </li>
                <li>
                  <a href="#twitter">
                    <TwitterIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
