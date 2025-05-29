const db = require('../config/db'); 

const Promotion = {
  getAll: (callback) => {
    const sql = 'SELECT * FROM tl_khuyenmai';
    db.query(sql, callback);
  },

  getActivePromotions: (callback) => {
    const sql = `SELECT * FROM tl_khuyenmai WHERE tl_trangthai = 'Đang hoạt động' OR tl_trangthai = 'Đang áp dụng'`;
    db.query(sql, callback);
  },

  getById: (makm, callback) => {
    const sql = 'SELECT * FROM tl_khuyenmai WHERE tl_makm = ?';
    db.query(sql, [makm], callback);
  }
};

module.exports = Promotion;
