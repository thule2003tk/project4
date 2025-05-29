const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// Lấy danh sách khách hàng
router.get('/', customerController.getAllCustomers);

// Lấy 1 khách hàng theo ID
router.get('/:id', customerController.getCustomerById);

// Tạo mới khách hàng
router.post('/', customerController.createCustomer);

// Cập nhật khách hàng
router.put('/:id', customerController.updateCustomer);

// Xóa khách hàng
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
