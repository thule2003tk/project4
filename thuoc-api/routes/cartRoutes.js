const express = require('express');
const router = express.Router();

// Giả lập danh sách giỏ hàng
router.get('/', (req, res) => {
  res.json({ message: 'Lấy danh sách giỏ hàng' });
});

// Thêm sản phẩm vào giỏ
router.post('/', (req, res) => {
  const { productId, quantity } = req.body;
  res.json({ message: 'Đã thêm vào giỏ hàng', productId, quantity });
});

module.exports = router;
