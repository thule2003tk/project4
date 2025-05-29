import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleRemove = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) return (
    <div className="container mt-4">
      <h2>Giỏ hàng trống</h2>
      <Link to="/">Tiếp tục mua hàng</Link>
    </div>
  );

  return (
    <div className="container mt-4">
      <h2>Giỏ hàng</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Tên thuốc</th>
            <th>Số lượng</th>
            <th>Giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity} VND</td>
              <td>
                <button className="btn btn-danger btn-sm" onClick={() => handleRemove(idx)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Tổng: {total} VND</h4>
      <button className="btn btn-success" onClick={() => navigate('/checkout')}>Đặt thuốc</button>
    </div>
  );
}

export default Cart;
