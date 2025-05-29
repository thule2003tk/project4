const db = require('../config/db');

const User = {
  getAll: (callback) => {
    db.query('SELECT * FROM tl_user', callback);
  },

  getById: (id, callback) => {
    db.query('SELECT * FROM tl_user WHERE tl_mauser = ?', [id], callback);
  },

  getByEmail: (email, callback) => {
    db.query('SELECT * FROM tl_user WHERE tl_email = ?', [email], callback);
  },

  create: (user, callback) => {
    const {
      tl_mauser, tl_username, tl_email, tl_password,
      tl_fullname, tl_role, tl_phonenumber, tl_address, tl_makh
    } = user;

    db.query(`
      INSERT INTO tl_user (
        tl_mauser, tl_username, tl_email, tl_password,
        tl_fullname, tl_role, tl_phonenumber, tl_address, tl_makh
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      tl_mauser, tl_username, tl_email, tl_password,
      tl_fullname, tl_role, tl_phonenumber, tl_address, tl_makh
    ], callback);
  },

  update: (id, user, callback) => {
    const {
      tl_username, tl_email, tl_password, tl_fullname,
      tl_role, tl_phonenumber, tl_address, tl_makh
    } = user;

    db.query(`
      UPDATE tl_user SET
        tl_username = ?, tl_email = ?, tl_password = ?, tl_fullname = ?,
        tl_role = ?, tl_phonenumber = ?, tl_address = ?, tl_makh = ?
      WHERE tl_mauser = ?
    `, [
      tl_username, tl_email, tl_password, tl_fullname,
      tl_role, tl_phonenumber, tl_address, tl_makh, id
    ], callback);
  },

  delete: (id, callback) => {
    db.query('DELETE FROM tl_user WHERE tl_mauser = ?', [id], callback);
  },
};

module.exports = User;
