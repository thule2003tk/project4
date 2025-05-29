const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authController = require('../controllers/authController');

// Đăng ký user
router.post('/register', [
  body('tl_email').isEmail().withMessage('Email không hợp lệ'),
  body('tl_password').isLength({ min: 6 }).withMessage('Mật khẩu tối thiểu 6 ký tự'),
  body('tl_username').notEmpty().withMessage('Username không được bỏ trống'),
  body('tl_fullname').notEmpty().withMessage('Họ tên không được bỏ trống'),
], authController.register);

// Đăng nhập user
router.post('/login', authController.login);

module.exports = router;

