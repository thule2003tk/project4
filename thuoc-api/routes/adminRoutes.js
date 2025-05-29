const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { authenticateToken, authorizeAdmin } = require('../middlewares/authMiddleware');

// Tất cả route trong này cần phải đăng nhập và là admin mới được truy cập
router.use(authenticateToken, authorizeAdmin);

// CRUD Admin ví dụ:
router.get('/', adminController.getAllAdmins);
router.post('/', adminController.createAdmin);
router.put('/:id', adminController.updateAdmin);
router.delete('/:id', adminController.deleteAdmin);

module.exports = router;

