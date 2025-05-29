import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!product) return <div>Đang tải...</div>;

  return (
    <div className="container mt-4">
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>Giá: {product.price} VND</p>

      <button
        className="btn btn-success me-2"
        onClick={() => {
          // Thêm vào giỏ hàng
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push({ ...product, quantity: 1 });
          localStorage.setItem('cart', JSON.stringify(cart));
          alert('Đã thêm vào giỏ hàng!');
        }}
      >
        Thêm vào giỏ hàng
      </button>

      <Link to="/" className="btn btn-secondary">Quay lại</Link>

      <button
        className="btn btn-warning ms-2"
        onClick={() => navigate(`/admin/product/edit/${id}`)}
      >
        Sửa thuốc
      </button>

      <button
        className="btn btn-danger ms-2"
        onClick={() => {
          if (window.confirm('Bạn có chắc muốn xóa thuốc này?')) {
            axios.delete(`http://localhost:3000/api/products/${id}`)
              .then(() => {
                alert('Xóa thành công');
                navigate('/');
              })
              .catch(() => alert('Lỗi xóa thuốc'));
          }
        }}
      >
        Xóa thuốc
      </button>
    </div>
  );
}

export default ProductDetail;
