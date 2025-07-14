import React from 'react';
import { useCart } from '../components/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert("✅ Đặt hàng thành công!");
    clearCart();
    navigate('/');
  };

  const formatCurrency = (value) => {
    return parseInt(value).toLocaleString() + ' VNĐ';
  };

  const total = cartItems.reduce(
    (acc, item) => acc + item.quantity * parseInt(item.tl_giaban),
    0
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-primary fw-bold">🧾 Xác nhận đơn hàng</h2>

      <table className="table table-bordered align-middle">
        <thead className="table-light">
          <tr>
            <th>Hình ảnh</th>
            <th>Tên thuốc</th>
            <th>Số lượng</th>
            <th>Giá bán</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item, idx) => (
            <tr key={idx}>
              <td>
                <img
                  src={item.tl_hinhanh}
                  alt={item.tl_tenthuc}
                  style={{ width: '80px', borderRadius: '5px' }}
                />
              </td>
              <td>{item.tl_tenthuc}</td>
              <td>{item.quantity}</td>
              <td>{formatCurrency(item.tl_giaban)}</td>
              <td>{formatCurrency(item.quantity * item.tl_giaban)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="text-end mt-3">
        <h4>Tổng cộng: <span className="text-danger">{formatCurrency(total)}</span></h4>
      </div>

      <div className="mt-4 d-flex gap-3">
        <button className="btn btn-success" onClick={handlePlaceOrder}>
          ✅ Xác nhận đặt hàng
        </button>
        <button className="btn btn-outline-secondary" onClick={() => navigate('/cart')}>
          🔙 Quay lại giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default Checkout;
