const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET = process.env.JWT_SECRET || 'mysecret';

exports.register = (req, res) => {
  const { hoten, email, password, diachi, sodienthoai } = req.body;

  if (!email || !password || !hoten) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin' });
  }

  User.findByEmail(email, (err, results) => {
    if (results.length > 0) {
      return res.status(400).json({ message: 'Email đã được đăng ký' });
    }

    const hashedPassword = bcrypt.hashSync(password, 10);

    User.create({ hoten, email, password: hashedPassword, diachi, sodienthoai }, (err, result) => {
      if (err) return res.status(500).json({ message: 'Lỗi server' });
      return res.status(201).json({ message: 'Đăng ký thành công' });
    });
  });
};

exports.login = (req, res) => {
  const { tl_email, tl_password } = req.body;

  User.findByEmail(tl_email, (err, results) => {
    if (results.length === 0) {
      return res.status(401).json({ message: 'Sai email hoặc mật khẩu' });
    }

    const user = results[0];
    const isMatch = bcrypt.compareSync(tl_password, user.tl_password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Sai email hoặc mật khẩu' });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET, { expiresIn: '1d' });
    return res.json({ message: 'Đăng nhập thành công', token });
  });
};
