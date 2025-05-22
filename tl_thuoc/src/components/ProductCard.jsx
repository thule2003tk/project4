// src/components/ProductCard.jsx - hiển thị 1 thuốc
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function ProductCard({ product }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Img variant="top" src={product.image} height="200px" style={{ objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          <strong>Giá:</strong> {product.price} đ<br />
          <small>{product.description}</small>
        </Card.Text>
        <Button variant="success">Thêm vào giỏ</Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
