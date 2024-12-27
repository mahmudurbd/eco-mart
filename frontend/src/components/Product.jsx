import React from "react";
import "./Product.scss";
import { Button, Card, Image } from "antd";
import { Link } from "react-router-dom";
import { trimName } from "../Utils";
import Ratings from "./Ratings";

const Product = ({ product }) => {
  return (
    <Link to={`/product/${product._id}`}>
      <Card
        hoverable
        cover={<Image preview={false} alt={product.name} src={product.image} />}
        className="product-card"
      >
        <h3 className="product-name" title={product.name}>
          {trimName(product.name)}
        </h3>
        <Ratings
          value={product.rating}
          text={`${product.numReviews} reviews`}
          justifyContent="center"
          // fontSize="14px"
        />
        <p className="product-price">${product.price}</p>
        <Button type="primary">Buy Now</Button>
      </Card>
    </Link>
  );
};

export default Product;
