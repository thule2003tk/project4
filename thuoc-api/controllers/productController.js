const db = require('../config/db');

// Lấy tất cả thuốc
exports.getAllProducts = (req, res) => {
  db.query('SELECT * FROM tl_thuoc', (err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi server', error: err });
    res.json(results);
  });
};

// Lấy thuốc theo ID
exports.getProductById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM tl_thuoc WHERE maThuoc = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi server', error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Không tìm thấy thuốc' });
    res.json(results[0]);
  });
};

// Tạo mới thuốc
exports.createProduct = (req, res) => {
  const { maThuoc, tenThuoc, donGia, soLuong, moTa } = req.body;
  db.query(
    'INSERT INTO tl_thuoc (maThuoc, tenThuoc, donGia, soLuong, moTa) VALUES (?, ?, ?, ?, ?)',
    [maThuoc, tenThuoc, donGia, soLuong, moTa],
    (err, result) => {
      if (err) return res.status(500).json({ message: 'Lỗi thêm thuốc', error: err });
      res.status(201).json({ message: 'Thêm thuốc thành công', id: result.insertId });
    }
  );
};

// Cập nhật thuốc
exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const { tenThuoc, donGia, soLuong, moTa } = req.body;
  db.query(
    'UPDATE tl_thuoc SET tenThuoc=?, donGia=?, soLuong=?, moTa=? WHERE maThuoc=?',
    [tenThuoc, donGia, soLuong, moTa, id],
    (err) => {
      if (err) return res.status(500).json({ message: 'Lỗi cập nhật', error: err });
      res.json({ message: 'Cập nhật thuốc thành công' });
    }
  );
};

// Xóa thuốc
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM tl_thuoc WHERE maThuoc = ?', [id], (err) => {
    if (err) return res.status(500).json({ message: 'Lỗi xóa', error: err });
    res.json({ message: 'Xóa thuốc thành công' });
  });
};
