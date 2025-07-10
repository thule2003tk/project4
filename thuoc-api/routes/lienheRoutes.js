const express = require('express');
const router = express.Router();
const lienheController = require('../controllers/lienheController');

// Tạo mới liên hệ
router.post('/', lienheController.createContact);

// Lấy tất cả liên hệ
router.get('/', lienheController.getAllContacts);

// Xoá liên hệ
router.delete('/:id', lienheController.deleteContact);

// ❗ QUAN TRỌNG: Export router
module.exports = router;
