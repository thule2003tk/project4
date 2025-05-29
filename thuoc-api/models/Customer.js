const db = require('../config/db'); // file config kết nối DB

const Customer = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT tl_makh, tl_tenkh, tl_email, tl_sdt, tl_diachi FROM tl_khachhang';
      db.query(sql, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      const sql = 'SELECT tl_makh, tl_tenkh, tl_email, tl_sdt, tl_diachi FROM tl_khachhang WHERE tl_makh = ?';
      db.query(sql, [id], (err, results) => {
        if (err) reject(err);
        else resolve(results[0]);
      });
    });
  },

  create: (customer) => {
    return new Promise((resolve, reject) => {
      const sql = 'INSERT INTO tl_khachhang (tl_makh, tl_tenkh, tl_email, tl_sdt, tl_diachi, tl_matkhau) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(sql, [customer.tl_makh, customer.tl_tenkh, customer.tl_email, customer.tl_sdt, customer.tl_diachi, customer.tl_matkhau], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },

  update: (id, customer) => {
    return new Promise((resolve, reject) => {
      const sql = 'UPDATE tl_khachhang SET tl_tenkh = ?, tl_email = ?, tl_sdt = ?, tl_diachi = ?, tl_matkhau = ? WHERE tl_makh = ?';
      db.query(sql, [customer.tl_tenkh, customer.tl_email, customer.tl_sdt, customer.tl_diachi, customer.tl_matkhau, id], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },

  delete: (id) => {
    return new Promise((resolve, reject) => {
      const sql = 'DELETE FROM tl_khachhang WHERE tl_makh = ?';
      db.query(sql, [id], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  },
};

module.exports = Customer;
