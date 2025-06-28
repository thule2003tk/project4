// routes/orders.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// GET tất cả đơn hàng
router.get('/', orderController.getAllOrders);

// GET đơn hàng theo mã
router.get('/:id', orderController.getOrderById);

// DELETE đơn hàng
router.delete('/:id', orderController.deleteOrder);

// (Tuỳ chọn) Thêm PUT/PATCH nếu muốn cập nhật trạng thái

module.exports = router;
