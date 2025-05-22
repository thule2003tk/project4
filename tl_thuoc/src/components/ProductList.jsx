// src/components/ProductList.jsx
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from './ProductCard';

// Dữ liệu mẫu
const sampleProducts = [
  {
    id: 1,
    name: 'Paracetamol 500mg',
    price: 15000,
    image: 'https://via.placeholder.com/200',
    description: 'Thuốc hạ sốt, giảm đau nhẹ.',
  },
  {
    id: 2,
    name: 'Vitamin C 500mg',
    price: 20000,
    image: 'https://via.placeholder.com/200',
    description: 'Tăng sức đề kháng, bổ sung vitamin.',
  },
  {
    id: 3,
    name: 'Kháng sinh Amoxicillin',
    price: 35000,
    image: 'https://via.placeholder.com/200',
    description: 'Chỉ dùng theo chỉ định bác sĩ.',
  },
];

function ProductList() {
  return (
    <Container className="my-4">
      <h2 className="text-center mb-4">📦 Danh sách thuốc</h2>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {sampleProducts.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ProductList;
