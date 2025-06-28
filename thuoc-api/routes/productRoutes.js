// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// CRUD cho thuốc
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.post('/', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
// Tìm kiếm thuốc
module.exports = router;
router.get('/search', productController.searchProducts);
// Lấy danh sách thuốc theo loại
