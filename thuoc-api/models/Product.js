const db = require('../config/db');

const Product = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM tl_thuoc', (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },

  getById: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM tl_thuoc WHERE id = ?', [id], (err, result) => {
        if (err) return reject(err);
        resolve(result[0]);
      });
    });
  },

  create: (data) => {
    const { tenthuoc, gia, mota, nhom } = data;
    return new Promise((resolve, reject) => {
      db.query(
        'INSERT INTO tl_thuoc (tl_tenthuc, tl_gia, tl_mota, tl_nhom) VALUES (?, ?, ?, ?)',
        [tl_tenthuc, tl_gia, tl_mota, tl_nhom],
        (err, result) => {
          if (err) return reject(err);
          resolve({ id: result.insertId, ...data });
        }
      );
    });
  },

  update: (id, data) => {
    const { tl_tenthuc, tl_gia, tl_mota, tl_nhom } = data;
    return new Promise((resolve, reject) => {
      db.query(
        'UPDATE tl_thuoc SET tl_tenthuc = ?, tl_gia = ?, tl_mota = ?, tl_nhom = ? WHERE tl_mathuoc = ?',
        [tl_tenthuc, tl_gia, tl_mota, tl_nhom, id],
        (err) => {
          if (err) return reject(err);
          resolve({ id, ...data });
        }
      );
    });
  },

  remove: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM tl_thuoc WHERE id = ?', [id], (err) => {
        if (err) return reject(err);
        resolve({ message: 'Đã xoá thành công', id });
      });
    });
  },
};

module.exports = Product;
