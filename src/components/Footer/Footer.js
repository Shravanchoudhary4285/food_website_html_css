import React from "react";
import "./Footer.css";
import { assets } from "../../Assets/assets";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
            molestiae, necessitatibus nesciunt nobis voluptatibus quod sapiente
            maiores commodi nisi praesentium iste qui accusantium libero
            aliquid, ratione consectetur! Doloremque, sed cum!
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="facebook-icon" />
            <img src={assets.twitter_icon} alt="twitter-icon" />
            <img src={assets.linkedin_icon} alt="linkedin-icon" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>+1-212-456-789</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        copyright 2024 &copy; Tomato.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
