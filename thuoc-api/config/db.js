const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.tl_thuoc,
});

db.connect((err) => {
  if (err) throw err;
  console.log('✅ Kết nối MySQL thành công!');
});

module.exports = db;
