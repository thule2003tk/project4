const db = require('../config/db');

const Admin = {
  getAll: (callback) => {
    db.query('SELECT tl_maadmin, tl_tenadmin, tl_email FROM tl_admin', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT tl_maadmin, tl_tenadmin, tl_email FROM tl_admin WHERE tl_maadmin = ?', [id], callback);
  },

  create: (admin, callback) => {
    const { tl_maadmin, tl_tenadmin, tl_email, tl_matkhau } = admin;
    db.query(
      'INSERT INTO tl_admin (tl_maadmin, tl_tenadmin, tl_email, tl_matkhau) VALUES (?, ?, ?, ?)',
      [tl_maadmin, tl_tenadmin, tl_email, tl_matkhau],
      callback
    );
  },

  update: (id, admin, callback) => {
    const { tl_tenadmin, tl_email, tl_matkhau } = admin;
    db.query(
      'UPDATE tl_admin SET tl_tenadmin = ?, tl_email = ?, tl_matkhau = ? WHERE tl_maadmin = ?',
      [tl_tenadmin, tl_email, tl_matkhau, id],
      callback
    );
  },

  delete: (id, callback) => {
    db.query('DELETE FROM tl_admin WHERE tl_maadmin = ?', [id], callback);
  },
};

module.exports = Admin;
