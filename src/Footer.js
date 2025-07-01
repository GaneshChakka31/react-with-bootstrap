import React from "react";
import { FaFacebook,FaYoutube,FaWhatsapp,FaTwitter,FaLinkedinIn,FaArrowRight   } from "react-icons/fa";
import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container ">
        <div className="footer-column connect ms-3 ">
          <h4 className="mt-5">CONNECT WITH US</h4>
          <div className="subscribe-box bg-light">
            <input type="email" placeholder="Enter Email ID" className="bg-light" />
            <button className="bg-dark text-light"><FaArrowRight /></button>
          </div>
          <div className="social-icons">
            <div className="icon-facebook"><FaFacebook /></div>
      <div className="icon-youtube"><FaYoutube /></div>
      <div className="icon-whatsapp"><FaWhatsapp /></div>
      <div className="icon-twitter"><FaTwitter /></div>
      <div className="icon-linkedin"><FaLinkedinIn /></div>
          </div>
        </div>

        <div className="footer-column text-center">
          <h4>USEFUL LINKS</h4>
          <ul className="fw-bold">
            <li>About Croma</li>
            <li>Help And Support</li>
            <li>FAQs</li>
            <li>Buying Guide</li>
            <li>Return Policy</li>
            <li>B2B Orders</li>
            <li>Store Locator</li>
            <li>E-Waste</li>
            <li>Franchise Opportunity</li>
          </ul>
        </div>

        <div className="footer-column text-center">
          <ul className="fw-bold">
            <li>Site Map</li>
            <li>Careers At Croma</li>
            <li>Terms Of Use</li>
            <li>Disclaimer</li>
            <li>Privacy Policy</li>
            <li>Unboxed</li>
            <li>Gift Card</li>
            <li>Croma E-Star</li>
          </ul>
        </div>

        <div className="footer-column text-center">
          <h4>PRODUCTS</h4>
          <ul className="fw-bold">
            <li>Televisions & Accessories</li>
            <li>Home Appliances</li>
            <li>Phones & Wearables</li>
            <li>Computers & Tablets</li>
            <li>Kitchen Appliances</li>
            <li>Audio & Video</li>
            <li>Health & Fitness</li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;