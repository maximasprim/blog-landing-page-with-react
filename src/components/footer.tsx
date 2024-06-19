// src/components/Footer.js

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logoFooter">
        <img src="src\assets\logo.svg" alt="Blogr Logo" className="logo" />
      </div>
      <div className="footer-links">
        <div className="productContainer">
          <h3>Product</h3>
          <ul className="product">
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </div>
        <div className="companyContainer">
          <h3>Company</h3>
          <ul className="company">
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="connectContainer">
          <h3>Connect</h3>
          <ul className="connect">
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
