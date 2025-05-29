const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.getAllUsers = (req, res) => {
  User.getAll((err, users) => {
    if (err) return res.status(500).json({ message: 'Lỗi lấy danh sách user' });
    res.json(users);
  });
};

exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.getById(id, (err, result) => {
    if (err || result.length === 0) return res.status(404).json({ message: 'Không tìm thấy user' });
    res.json(result[0]);
  });
};

exports.createUser = (req, res) => {
  const user = req.body;
  user.tl_password = bcrypt.hashSync(user.tl_password, 10);

  User.create(user, (err, result) => {
    if (err) return res.status(500).json({ message: 'Lỗi tạo user', error: err });
    res.status(201).json({ message: 'Tạo user thành công' });
  });
};

exports.updateUser = (req, res) => {
  const id = req.params.id;
  const user = req.body;
  user.tl_password = bcrypt.hashSync(user.tl_password, 10);

  User.update(id, user, (err, result) => {
    if (err) return res.status(500).json({ message: 'Lỗi cập nhật user' });
    res.json({ message: 'Cập nhật user thành công' });
  });
};

exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.delete(id, (err, result) => {
    if (err) return res.status(500).json({ message: 'Lỗi xóa user' });
    res.json({ message: 'Xóa user thành công' });
  });
};
