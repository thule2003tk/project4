// controllers/productController.js
const db = require('../config/db');

// 📥 Lấy tất cả thuốc
exports.getAllProducts = (req, res) => {
  db.query('SELECT * FROM tl_thuoc', (err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi server', error: err });
    res.json(results);
  });
};

// 📥 Lấy thuốc theo ID
exports.getProductById = (req, res) => {
  const id = req.params.id;
  db.query('SELECT * FROM tl_thuoc WHERE tl_mathuoc = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi server', error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Không tìm thấy thuốc' });
    res.json(results[0]);
  });
};

// ✅ Tạo mới thuốc
exports.createProduct = (req, res) => {
  const {
    tl_mathuoc,
    tl_tenthuc,
    tl_giaban,
    tl_soluongton,
    tl_congdung,
    tl_loai,
    tl_mancc,
    tl_hinhanh = '' // default rỗng nếu không có
  } = req.body;

  if (!tl_mathuoc || !tl_tenthuc || !tl_giaban || !tl_soluongton || !tl_congdung || !tl_loai || !tl_mancc) {
    return res.status(400).json({ message: '❌ Thiếu thông tin thuốc' });
  }

  const sql = `
    INSERT INTO tl_thuoc (
      tl_mathuoc, tl_tenthuc, tl_giaban, tl_soluongton,
      tl_congdung, tl_loai, tl_mancc, tl_hinhanh
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(sql, [tl_mathuoc, tl_tenthuc, tl_giaban, tl_soluongton, tl_congdung, tl_loai, tl_mancc, tl_hinhanh], (err, result) => {
    if (err) return res.status(500).json({ message: '❌ Lỗi thêm thuốc', error: err });
    res.status(201).json({ message: '✅ Thêm thuốc thành công', id: result.insertId });
  });
};

// ✏️ Cập nhật thuốc
exports.updateProduct = (req, res) => {
  const id = req.params.id;
  const {
    tl_tenthuc,
    tl_giaban,
    tl_soluongton,
    tl_congdung,
    tl_loai,
    tl_mancc,
    tl_hinhanh = ''
  } = req.body;

  if (!tl_tenthuc || !tl_giaban || !tl_soluongton || !tl_congdung || !tl_loai || !tl_mancc) {
    return res.status(400).json({ message: '❌ Thiếu thông tin thuốc để cập nhật' });
  }

  const sql = `
    UPDATE tl_thuoc SET 
      tl_tenthuc = ?, 
      tl_giaban = ?, 
      tl_soluongton = ?, 
      tl_congdung = ?, 
      tl_loai = ?, 
      tl_mancc = ?, 
      tl_hinhanh = ?
    WHERE tl_mathuoc = ?
  `;

  db.query(sql, [tl_tenthuc, tl_giaban, tl_soluongton, tl_congdung, tl_loai, tl_mancc, tl_hinhanh, id], (err) => {
    if (err) return res.status(500).json({ message: '❌ Lỗi cập nhật', error: err });
    res.json({ message: '✅ Cập nhật thuốc thành công' });
  });
};

// 🗑️ Xoá thuốc
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  db.query('DELETE FROM tl_thuoc WHERE tl_mathuoc = ?', [id], (err) => {
    if (err) return res.status(500).json({ message: '❌ Lỗi xóa', error: err });
    res.json({ message: '🗑️ Xoá thuốc thành công' });
  });
};

// 🔍 Tìm kiếm thuốc
exports.searchProducts = (req, res) => {
  const { query } = req.query;
  if (!query) return res.status(400).json({ message: 'Thiếu từ khóa tìm kiếm' });

  const sql = `
    SELECT * FROM tl_thuoc 
    WHERE tl_tenthuc LIKE ? OR tl_congdung LIKE ?
  `;

  db.query(sql, [`%${query}%`, `%${query}%`], (err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi tìm kiếm', error: err });
    res.json(results);
  });
};
// 📦 Lấy thuốc theo loại
exports.getProductsByCategory = (req, res) => {
  const category = req.params.category;
  db.query('SELECT * FROM tl_thuoc WHERE tl_loai = ?', [category], (err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi server', error: err });
    res.json(results);
  });
};
// 📦 Lấy thuốc theo nhà cung cấp
exports.getProductsBySupplier = (req, res) => {
  const supplierId = req.params.supplierId;
  db.query('SELECT * FROM tl_thuoc WHERE tl_mancc = ?', [supplierId], (err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi server', error: err });
    res.json(results);
  });
};
// 📦 Lấy thuốc theo tên
exports.getProductsByName = (req, res) => {
  const name = req.params.name;
  db.query('SELECT * FROM tl_thuoc WHERE tl_tenthuc LIKE ?', [`%${name}%`], (err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi server', error: err });
    res.json(results);
  });
};
// 📦 Lấy thuốc theo mã thuốc
exports.getProductsByCode = (req, res) => {
  const code = req.params.code;
  db.query('SELECT * FROM tl_thuoc WHERE tl_mathuoc = ?', [code], (err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi server', error: err });
    if (results.length === 0) return res.status(404).json({ message: 'Không tìm thấy thuốc' });
    res.json(results[0]);
  });
};
// 📦 Lấy thuốc theo giá
exports.getProductsByPrice = (req, res) => {
  const { min, max } = req.query;
  if (!min || !max) return res.status(400).json({ message: 'Thiếu thông tin giá' });

  db.query('SELECT * FROM tl_thuoc WHERE tl_giaban BETWEEN ? AND ?', [min, max], (err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi server', error: err });
    res.json(results);
  });
};
