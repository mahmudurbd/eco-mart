import React from "react";
import "./Footer.scss";
import { Row, Col } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-top">
        <Row gutter={24}>
          <Col xs={24} sm={12} md={6}>
            <h3>E-Mart</h3>
            <p>
              Your one-stop shop for all your needs. Quality products,
              exceptional service, and great deals.
            </p>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#products">Products</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h4>Customer Service</h4>
            <ul>
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#returns">Returns</a>
              </li>
              <li>
                <a href="#shipping">Shipping Info</a>
              </li>
              <li>
                <a href="#support">Support</a>
              </li>
            </ul>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <h4>Follow Us</h4>
            <div className="social-icons">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookOutlined />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterOutlined />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramOutlined />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinOutlined />
              </a>
            </div>
          </Col>
        </Row>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} E-Mart. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
