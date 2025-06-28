// config/db.js
const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME, // ✅ Sửa đúng tên biến môi trường
});

db.connect((err) => {
  if (err) {
    console.error('❌ Kết nối DB thất bại:', err.message);
    return;
  }
  console.log('✅ Kết nối MySQL thành công!');
});

module.exports = db;
