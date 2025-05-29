// models/Order.js
const db = require('../config/db'); // nếu bạn dùng kết nối db này

const Order = {
  create: (orderData, callback) => {
    // Viết query INSERT vào bảng tl_hoadon
  },
  findByUser: (userId, callback) => {
    // Viết query SELECT * FROM tl_hoadon WHERE userId = ?
  },
  // thêm các phương thức khác nếu cần
};

module.exports = Order;
