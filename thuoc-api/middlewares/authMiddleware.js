const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_secret_key'; // Giữ đồng bộ với key ở authController


// Middleware kiểm tra token và xác thực user
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

  if (!token) return res.status(401).json({ message: 'Token không được cung cấp' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token không hợp lệ hoặc hết hạn' });
    req.user = user; // payload trong token (id, role)
    next();
  });
}

// Middleware phân quyền admin
function authorizeAdmin(req, res, next) {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Bạn không có quyền truy cập' });
  }
  next();
}

module.exports = {
  authenticateToken,
  authorizeAdmin,
};
