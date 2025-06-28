const db = require('../config/db');
const moment = require('moment');

// 📦 Model quản lý User
const User = {
  // 📌 Lấy tất cả người dùng
  getAll: (callback) => {
    db.query('SELECT * FROM tl_user', callback);
  },

  // 📌 Lấy user theo ID
  getById: (id, callback) => {
    db.query('SELECT * FROM tl_user WHERE tl_mauser = ?', [id], callback);
  },

  // 📌 Lấy user theo email
  getByEmail: (email, callback) => {
    db.query('SELECT * FROM tl_user WHERE tl_email = ?', [email], callback);
  },

  // ✅ Thêm user mới (bao gồm thêm vào tl_khachhang nếu là customer)
  create: (user, callback) => {
    const {
      tl_username,
      tl_email,
      tl_password,
      tl_fullname,
      tl_role,
      tl_phonenumber,
      tl_address
    } = user;

    const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');

    // 🔢 Lấy số lượng user để tạo mã user
    db.query('SELECT COUNT(*) AS total FROM tl_user', (err1, result1) => {
      if (err1) return callback(err1);

      const total = result1[0].total + 1;
      const tl_mauser = 'U' + total.toString().padStart(3, '0');
      let tl_makh = null;

      // Nếu là customer, tạo mã khách hàng và thêm vào bảng tl_khachhang
      const handleInsertUser = () => {
        const sqlUser = `
          INSERT INTO tl_user (
            tl_mauser, tl_username, tl_email, tl_password,
            tl_fullname, tl_role, tl_phonenumber, tl_address,
            tl_created_at, tl_updated_at, tl_makh
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        db.query(sqlUser, [
          tl_mauser,
          tl_username,
          tl_email,
          tl_password,
          tl_fullname,
          tl_role,
          tl_phonenumber,
          tl_address,
          createdAt,
          createdAt,
          tl_makh
        ], (err2, result2) => {
          if (err2) return callback(err2);
          callback(null, result2);
        });
      };

      // Nếu role là customer → tạo mã KH và thêm vào tl_khachhang
      if (tl_role === 'customer') {
        db.query('SELECT COUNT(*) AS total FROM tl_khachhang', (errKH, resultKH) => {
          if (errKH) return callback(errKH);

          const totalKH = resultKH[0].total + 1;
          tl_makh = 'KH' + totalKH.toString().padStart(3, '0');

          // ➕ Thêm vào bảng tl_khachhang
          const sqlKH = `
            INSERT INTO tl_khachhang (
              tl_makh, tl_tenkh, tl_email, tl_sdt, tl_diachi, tl_matkhau
            ) VALUES (?, ?, ?, ?, ?, ?)
          `;

          db.query(sqlKH, [
            tl_makh,
            tl_fullname,
            tl_email,
            tl_phonenumber,
            tl_address,
            tl_password // đã mã hoá bcrypt rồi
          ], (errKHInsert) => {
            if (errKHInsert) return callback(errKHInsert);
            handleInsertUser(); // thêm user sau khi KH đã tạo xong
          });
        });
      } else {
        handleInsertUser(); // không phải customer thì thêm user luôn
      }
    });
  },

  // ✏️ Cập nhật thông tin user
  update: (id, user, callback) => {
    const {
      tl_username,
      tl_email,
      tl_password,
      tl_fullname,
      tl_role,
      tl_phonenumber,
      tl_address,
      tl_makh
    } = user;

    const sql = `
      UPDATE tl_user SET
        tl_username = ?,
        tl_email = ?,
        tl_password = ?,
        tl_fullname = ?,
        tl_role = ?,
        tl_phonenumber = ?,
        tl_address = ?,
        tl_makh = ?,
        tl_updated_at = NOW()
      WHERE tl_mauser = ?
    `;

    db.query(sql, [
      tl_username,
      tl_email,
      tl_password,
      tl_fullname,
      tl_role,
      tl_phonenumber,
      tl_address,
      tl_makh || null,
      id
    ], callback);
  },

  // 🗑️ Xoá user
  delete: (id, callback) => {
    db.query('DELETE FROM tl_user WHERE tl_mauser = ?', [id], callback);
  }
};

module.exports = User;
// This code defines a User model for managing user data in a database.