const db = require('../config/db'); // sử dụng mysql2

module.exports = {
  async getCart(req, res) {
    try {
      const [rows] = await db.query('SELECT * FROM tl_giohang WHERE user_id = ?', [req.user.id]);
      res.json(rows);
    } catch (err) {
      res.status(500).json({ message: 'Lỗi lấy giỏ hàng' });
    }
  },

  async addToCart(req, res) {
    const { productId, quantity } = req.body;
    try {
      await db.query(
        'INSERT INTO tl_giohang (user_id, product_id, quantity) VALUES (?, ?, ?) ON DUPLICATE KEY UPDATE quantity = quantity + ?',
        [req.user.id, productId, quantity, quantity]
      );
      res.json({ message: 'Đã thêm vào giỏ hàng' });
    } catch (err) {
      res.status(500).json({ message: 'Lỗi thêm vào giỏ hàng' });
    }
  },

  async updateCartItem(req, res) {
    const { quantity } = req.body;
    const itemId = req.params.id;
    try {
      await db.query('UPDATE tl_giohang SET quantity = ? WHERE id = ? AND user_id = ?', [quantity, itemId, req.user.id]);
      res.json({ message: 'Cập nhật thành công' });
    } catch (err) {
      res.status(500).json({ message: 'Lỗi cập nhật giỏ hàng' });
    }
  },

  async removeFromCart(req, res) {
    const itemId = req.params.id;
    try {
      await db.query('DELETE FROM tl_giohang WHERE id = ? AND user_id = ?', [itemId, req.user.id]);
      res.json({ message: 'Xoá thành công' });
    } catch (err) {
      res.status(500).json({ message: 'Lỗi xoá sản phẩm' });
    }
  }
};
