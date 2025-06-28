// controllers/customerController.js
const db = require('../config/db');

// 📌 Lấy tất cả khách hàng
exports.getAllCustomers = (req, res) => {
  db.query('SELECT * FROM tl_khachhang', (err, results) => {
    if (err) {
      console.error('Lỗi khi lấy danh sách khách hàng:', err);
      return res.status(500).json({ error: 'Lỗi khi truy vấn CSDL' });
    }
    res.json(results);
  });
};

// 📌 Lấy khách hàng theo ID
exports.getCustomerById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM tl_khachhang WHERE tl_makh = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ error: 'Lỗi truy vấn' });
    if (results.length === 0) return res.status(404).json({ error: 'Không tìm thấy khách hàng' });
    res.json(results[0]);
  });
};

// ✅ Thêm khách hàng mới
exports.createCustomer = (req, res) => {
  const { tl_makh, tl_tenkh, tl_email, tl_sdt, tl_diachi, tl_matkhau } = req.body;

  if (!tl_makh || !tl_tenkh || !tl_email) {
    return res.status(400).json({ error: 'Vui lòng nhập đầy đủ thông tin' });
  }

  db.query(
    `INSERT INTO tl_khachhang (tl_makh, tl_tenkh, tl_email, tl_sdt, tl_diachi, tl_matkhau)
     VALUES (?, ?, ?, ?, ?, ?)`,
    [tl_makh, tl_tenkh, tl_email, tl_sdt, tl_diachi, tl_matkhau],
    (err, result) => {
      if (err) {
        console.error('Lỗi khi thêm khách hàng:', err);
        return res.status(500).json({ error: 'Không thể thêm khách hàng' });
      }
      res.status(201).json({ message: 'Thêm khách hàng thành công' });
    }
  );
};

// ✏️ Cập nhật thông tin khách hàng
exports.updateCustomer = (req, res) => {
  const id = req.params.id;
  const { tl_tenkh, tl_email, tl_sdt, tl_diachi, tl_matkhau } = req.body;

  db.query(
    `UPDATE tl_khachhang SET
      tl_tenkh = ?, tl_email = ?, tl_sdt = ?, tl_diachi = ?, tl_matkhau = ?
     WHERE tl_makh = ?`,
    [tl_tenkh, tl_email, tl_sdt, tl_diachi, tl_matkhau, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Lỗi cập nhật khách hàng' });
      res.json({ message: 'Cập nhật thành công' });
    }
  );
};

// 🗑️ Xoá khách hàng
exports.deleteCustomer = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM tl_khachhang WHERE tl_makh = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Lỗi xóa khách hàng' });
    res.json({ message: 'Xóa thành công' });
  });
};
