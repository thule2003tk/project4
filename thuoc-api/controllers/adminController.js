const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

exports.getAllAdmins = (req, res) => {
  Admin.getAll((err, results) => {
    if (err) return res.status(500).json({ message: 'Lỗi lấy danh sách admin' });
    res.json(results);
  });
};

exports.getAdminById = (req, res) => {
  const id = req.params.id;
  Admin.getById(id, (err, results) => {
    if (err || results.length === 0) return res.status(404).json({ message: 'Không tìm thấy admin' });
    res.json(results[0]);
  });
};

exports.createAdmin = (req, res) => {
  const { tl_maadmin, tl_tenadmin, tl_email, tl_matkhau } = req.body;
  const hashedPassword = bcrypt.hashSync(tl_matkhau, 10);

  Admin.create({ tl_maadmin, tl_tenadmin, tl_email, tl_matkhau: hashedPassword }, (err, result) => {
    if (err) return res.status(500).json({ message: 'Lỗi tạo admin', error: err });
    res.status(201).json({ message: 'Tạo admin thành công' });
  });
};

exports.updateAdmin = (req, res) => {
  const id = req.params.id;
  const { tl_tenadmin, tl_email, tl_matkhau } = req.body;
  const hashedPassword = bcrypt.hashSync(tl_matkhau, 10);

  Admin.update(id, { tl_tenadmin, tl_email, tl_matkhau: hashedPassword }, (err, result) => {
    if (err) return res.status(500).json({ message: 'Lỗi cập nhật admin' });
    res.json({ message: 'Cập nhật thành công' });
  });
};

exports.deleteAdmin = (req, res) => {
  const id = req.params.id;
  Admin.delete(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Lỗi xóa admin' });
    res.json({ message: 'Xóa thành công' });
  });
};
