const express = require('express');
const router = express.Router();
const cartController = require('../controllers/CartController');

// Có thể thêm middleware xác thực user nếu cần, ví dụ:
// const authenticate = require('../middlewares/authenticate');
// router.use(authenticate);

router.get('/', cartController.getCart);
router.post('/add', cartController.addToCart);
router.put('/update', cartController.updateCartItem);
router.delete('/remove/:productId', cartController.removeFromCart);
router.delete('/clear', cartController.clearCart);
router.post('/checkout', cartController.checkout);
router.post('/apply-coupon', cartController.applyCoupon);
router.post('/remove-coupon', cartController.removeCoupon);

module.exports = router;
