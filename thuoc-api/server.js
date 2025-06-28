// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const customerRoutes = require('./routes/customerRoutes');
const cartRoutes = require('./routes/cartRoutes');
const lienheRoutes = require('./routes/lienheRoutes');
const orderRoutes = require('./routes/orderRoutes');

// Đăng ký các route
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/lienhe', lienheRoutes);
app.use('/api/orders', orderRoutes);

// Route test cơ bản
app.get('/', (req, res) => {
  res.send('🚀 API tiệm thuốc hoạt động!');
});

app.listen(port, () => {
  console.log(`✅ Server chạy tại http://localhost:${port}`);
});
module.exports = app;
// Đoạn mã này khởi tạo một ứng dụng Express, cấu hình CORS, và định nghĩa các route cho API của tiệm thuốc.
// Nó cũng lắng nghe trên cổng được chỉ định trong biến môi trường PORT hoặc cổng 3000 nếu không có biến môi trường nào được đặt.
