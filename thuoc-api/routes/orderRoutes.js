const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Lấy danh sách đơn hàng
router.get('/', orderController.getAllOrders);

// Lấy chi tiết đơn hàng
router.get('/:id', orderController.getOrderById);

// Tạo đơn hàng mới
router.post('/', orderController.createOrder);

// Cập nhật đơn hàng
router.put('/:id', orderController.updateOrder);

// Xóa đơn hàng
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
// Đảm bảo rằng các phương thức trong orderController đã được định nghĩa đúng và có thể xử lý các yêu cầu tương ứng.
