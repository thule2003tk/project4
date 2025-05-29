const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const customerRoutes = require('./routes/customerRoutes'); 
const cartRoutes = require('./routes/cartRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/customers', customerRoutes); 
app.use('/api/cart', cartRoutes);

// Route test cơ bản
app.get('/', (req, res) => {
  res.send('🚀 API tiệm thuốc hoạt động!');
});

app.listen(port, () => {
  console.log(`Server chạy tại http://localhost:${port}`);
});
