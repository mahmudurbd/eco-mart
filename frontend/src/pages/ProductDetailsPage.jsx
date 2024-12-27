import React, { useState } from "react";
import { Row, Col, Button, InputNumber, Typography, Tabs, Tag } from "antd";
import "./ProductDetailsPage.scss";
import { Link, useParams } from "react-router-dom";
import Ratings from "../components/Ratings";

const { Title, Paragraph } = Typography;

const products = [
  {
    _id: "1",
    name: "Airpods Wireless Bluetooth Headphones",
    image: "/images/airpods.jpg",
    description:
      "Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working",
    brand: "Apple",
    category: "Electronics",
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: "2",
    name: "iPhone 11 Pro 256GB Memory",
    image: "/images/phone.jpg",
    description:
      "Introducing the iPhone 11 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life",
    brand: "Apple",
    category: "Electronics",
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    _id: "3",
    name: "Cannon EOS 80D DSLR Camera",
    image: "/images/camera.jpg",
    description:
      "Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design",
    brand: "Cannon",
    category: "Electronics",
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: "4",
    name: "Sony Playstation 4 Pro White Version",
    image: "/images/playstation.jpg",
    description:
      "The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music",
    brand: "Sony",
    category: "Electronics",
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: "5",
    name: "Logitech G-Series Gaming Mouse",
    image: "/images/mouse.jpg",
    description:
      "Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience",
    brand: "Logitech",
    category: "Electronics",
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
  },
  {
    _id: "6",
    name: "Amazon Echo Dot 3rd Generation",
    image: "../images/alexa.jpg",
    description:
      "Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space",
    brand: "Amazon",
    category: "Electronics",
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
  },
];

const ProductDetailsPage = () => {
  const { id: productId } = useParams();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((item) => item._id === productId);

  const handleQuantityChange = (value) => {
    setQuantity(value);
  };

  const handleBuyNow = () => {
    console.log("Buying", product.name, "Quantity:", quantity);
  };

  return (
    <div className="product-details">
      <Link to="/">
        <Button style={{ fontWeight: "600", marginBottom: "25px" }}>
          Go Back
        </Button>
      </Link>
      <Row gutter={[24, 24]} align="middle">
        {/* Image Gallery */}
        <Col xs={24} md={12} className="image-gallery">
          <img src={product.image} alt={product.name} className="main-image" />
        </Col>

        {/* Product Info */}
        <Col xs={24} md={12} className="product-info">
          <Title level={2} className="product-name">
            {product.name}
          </Title>
          <Ratings
            value={product.rating}
            justifyContent="start"
            fontSize="20px"
          />
          <Paragraph className="reviews-count">
            ({product.numReviews} reviews)
          </Paragraph>
          <Title level={3} className="product-price">
            ${product.price}
          </Title>
          {product.countInStock > 0 ? (
            <Tag color="green" className="stock-status">
              In Stock
            </Tag>
          ) : (
            <Tag color="red" className="stock-status">
              Out of Stock
            </Tag>
          )}
          <Paragraph className="product-description">
            {product.description}
          </Paragraph>

          <div className="actions">
            <InputNumber
              min={1}
              max={100}
              defaultValue={1}
              onChange={handleQuantityChange}
              className="quantity-selector"
            />
            <Button
              type="primary"
              size="large"
              onClick={handleBuyNow}
              disabled={product.countInStock === 0}
            >
              Buy Now
            </Button>
          </div>
        </Col>
      </Row>

      {/* Product Details Tabs */}
      {/* <div className="product-tabs">
        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Description" key="1">
            <Paragraph>{product.longDescription}</Paragraph>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Specifications" key="2">
            <ul>
              {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Reviews" key="3">
            <Paragraph>
              No reviews yet. Be the first to review this product!
            </Paragraph>
          </Tabs.TabPane>
        </Tabs>
      </div> */}
    </div>
  );
};

export default ProductDetailsPage;
