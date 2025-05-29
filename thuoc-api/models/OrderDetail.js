// models/OrderDetail.js

const db = require('../config/db'); // Đảm bảo bạn có kết nối DB ở đây

const OrderDetail = {
  create: (data, callback) => {
    const sql = `INSERT INTO tl_cthoadon (mahd, mathuoc, soluong, dongia) VALUES (?, ?, ?, ?)`;
    db.query(sql, [data.mahd, data.mathuoc, data.soluong, data.dongia], callback);
  },

  findByOrderId: (mahd, callback) => {
    const sql = `SELECT * FROM tl_cthoadon WHERE mahd = ?`;
    db.query(sql, [mahd], callback);
  },
};

module.exports = OrderDetail;
