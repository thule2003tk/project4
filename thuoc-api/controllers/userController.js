const bcrypt = require('bcryptjs');
const User = require('../models/User');

// 📌 Lấy tất cả user
exports.getAllUsers = (req, res) => {
  User.getAll((err, users) => {
    if (err) return res.status(500).json({ message: 'Lỗi lấy danh sách user', error: err });
    res.json({ message: '✅ Lấy danh sách user thành công', data: users });
  });
};

// 📌 Lấy user theo ID
exports.getUserById = (req, res) => {
  const id = req.params.id;
  User.getById(id, (err, result) => {
    if (err || result.length === 0)
      return res.status(404).json({ message: '❌ Không tìm thấy user', error: err });
    res.json({ message: '✅ Tìm thấy user', data: result[0] });
  });
};
// ✅ Thêm mới user (controller/userController.js)
exports.createUser = (req, res) => {
  const user = req.body;

  // ✅ Mã hóa mật khẩu
  if (user.tl_password) {
    user.tl_password = bcrypt.hashSync(user.tl_password, 10);
  }

  // ✅ Nếu tl_makh rỗng hoặc không có → gán null để tránh lỗi khóa ngoại
  if (!user.tl_makh || user.tl_makh.trim() === "") {
    user.tl_makh = null;
  }

  // ✅ Gọi model để thêm vào DB
  User.create(user, (err, result) => {
    if (err) {
      console.error('❌ Lỗi tạo user:', err);
      return res.status(500).json({ message: '❌ Lỗi tạo user', error: err });
    }

    res.status(201).json({
      message: '✅ Tạo user thành công',
      insertedId: result.insertId
    });
  });
};


// ✏️ Cập nhật user
exports.updateUser = (req, res) => {
  const id = req.params.id;
  const user = req.body;
  user.tl_password = bcrypt.hashSync(user.tl_password, 10);

  User.update(id, user, (err, result) => {
    if (err) {
      console.error('❌ Lỗi cập nhật user:', err);
      return res.status(500).json({ message: '❌ Lỗi cập nhật user', error: err });
    }
    res.json({ message: '✅ Cập nhật user thành công' });
  });
};

// 🗑️ Xóa user
exports.deleteUser = (req, res) => {
  const id = req.params.id;
  User.delete(id, (err, result) => {
    if (err) {
      console.error('❌ Lỗi xóa user:', err);
      return res.status(500).json({ message: '❌ Lỗi xóa user', error: err });
    }
    res.json({ message: '🗑️ Xóa user thành công' });
  });
};
