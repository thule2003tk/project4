const db = require('../config/db');

// Lấy tất cả đơn hàng
exports.getAllOrders = (req, res) => {
  db.query('SELECT * FROM tl_hoadon', (err, result) => {
    if (err) return res.status(500).json({ error: 'Lỗi truy vấn đơn hàng' });
    res.json(result);
  });
};

// Lấy đơn hàng theo ID
exports.getOrderById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM tl_hoadon WHERE tl_mahd = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Lỗi truy vấn' });
    if (result.length === 0) return res.status(404).json({ error: 'Không tìm thấy đơn hàng' });
    res.json(result[0]);
  });
};

// Tạo đơn hàng mới
exports.createOrder = (req, res) => {
  const { tl_mahd, tl_makh, tl_ngaydat, tl_tongtien, tl_trangthai, tl_makm } = req.body;

  db.query(
    'INSERT INTO tl_hoadon (tl_mahd, tl_makh, tl_ngaydat, tl_tongtien, tl_trangthai, tl_makm) VALUES (?, ?, ?, ?, ?, ?)',
    [tl_mahd, tl_makh, tl_ngaydat, tl_tongtien, tl_trangthai, tl_makm],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Thêm đơn hàng thất bại' });
      res.status(201).json({ message: 'Thêm đơn hàng thành công' });
    }
  );
};

// Cập nhật đơn hàng
exports.updateOrder = (req, res) => {
  const id = req.params.id;
  const { tl_makh, tl_ngaydat, tl_tongtien, tl_trangthai, tl_makm } = req.body;

  db.query(
    'UPDATE tl_hoadon SET tl_makh = ?, tl_ngaydat = ?, tl_tongtien = ?, tl_trangthai = ?, tl_makm = ? WHERE tl_mahd = ?',
    [tl_makh, tl_ngaydat, tl_tongtien, tl_trangthai, tl_makm, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: 'Cập nhật thất bại' });
      res.json({ message: 'Cập nhật đơn hàng thành công' });
    }
  );
};

// Xóa đơn hàng
exports.deleteOrder = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM tl_hoadon WHERE tl_mahd = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: 'Xóa đơn hàng thất bại' });
    res.json({ message: 'Đã xóa đơn hàng thành công' });
  });
};
