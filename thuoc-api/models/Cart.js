const db = require('../config/db'); // Đường dẫn đến kết nối MySQL

const Cart = {
    findByUserId: (userId, callback) => {
        const sql = `SELECT * FROM tl_giohang WHERE id_nguoidung = ?`;
        db.query(sql, [userId], callback);
    },

    findByUserAndProduct: (userId, productId, callback) => {
        const sql = `SELECT * FROM tl_giohang WHERE id_nguoidung = ? AND id_sanpham = ?`;
        db.query(sql, [userId, productId], callback);
    },

    create: (cartItem, callback) => {
        const sql = `INSERT INTO tl_giohang SET ?`;
        db.query(sql, cartItem, callback);
    },

    updateQuantity: (userId, productId, quantity, callback) => {
        const sql = `UPDATE tl_giohang SET soluong = ? WHERE id_nguoidung = ? AND id_sanpham = ?`;
        db.query(sql, [quantity, userId, productId], callback);
    },

    deleteByUserAndProduct: (userId, productId, callback) => {
        const sql = `DELETE FROM tl_giohang WHERE id_nguoidung = ? AND id_sanpham = ?`;
        db.query(sql, [userId, productId], callback);
    },

    deleteByUserId: (userId, callback) => {
        const sql = `DELETE FROM tl_giohang WHERE id_nguoidung = ?`;
        db.query(sql, [userId], callback);
    }
};

module.exports = Cart;
