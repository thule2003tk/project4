const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");
const moment = require("moment");

// 🟩 Đăng ký
router.post("/register", async (req, res) => {
  const { username, email, password, fullname, phonenumber, address } = req.body;

  // 🟨 Kiểm tra dữ liệu đầu vào
  console.log("📥 Dữ liệu nhận từ frontend:", req.body);

  if (!username || !email || !password) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
  }

  try {
    // 🔐 Mã hoá mật khẩu
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
    const updatedAt = createdAt;
    const role = "customer";

    // 🔢 Tạo mã user tự động
    db.query("SELECT COUNT(*) AS total FROM tl_user", (err, result) => {
      if (err) return res.status(500).json({ message: "Lỗi đếm user", error: err });

      const total = result[0].total + 1;
      const mauser = "U" + total.toString().padStart(3, "0");

      // 🧩 Thực hiện INSERT
      const sql = `
        INSERT INTO tl_user (
          tl_mauser, tl_username, tl_email, tl_password,
          tl_fullname, tl_role, tl_phonenumber, tl_address,
          tl_created_at, tl_updated_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      db.query(sql, [
        mauser,
        username,
        email,
        hashedPassword,
        fullname,
        role,
        phonenumber,
        address,
        createdAt,
        updatedAt,
      ], (err) => {
        if (err) {
          console.error("❌ Lỗi khi đăng ký:", err);
          return res.status(500).json({ message: "Đăng ký thất bại", error: err });
        }

        console.log("✅ Tạo tài khoản thành công:", mauser);
        return res.status(200).json({ message: "Đăng ký thành công" });
      });
    });
  } catch (error) {
    console.error("❌ Lỗi server:", error);
    return res.status(500).json({ message: "Lỗi server", error });
  }
});
// 🟦 Đăng // 🟦 Đăng nhập
router.post("/login", async (req, res) => {
  const { tl_email, tl_password } = req.body;

  // ✅ Đặt ở đây mới đúng
  console.log("Dữ liệu gửi lên:", req.body);

  if (!tl_email || !tl_password) {
    return res.status(400).json({ message: "Thiếu email hoặc mật khẩu" });
  }

  const sql = "SELECT * FROM tl_user WHERE tl_email = ?";
  db.query(sql, [tl_email], async (err, results) => {
    if (err) return res.status(500).json({ message: "Lỗi truy vấn", error: err });

    if (results.length === 0) {
      return res.status(401).json({ message: "Email không tồn tại" });
    }

    const user = results[0];

    console.log("Mật khẩu client:", tl_password);
    console.log("Mật khẩu đã mã hóa trong DB:", user.tl_password);

    const match = await bcrypt.compare(tl_password, user.tl_password);

    if (!match) {
      return res.status(401).json({ message: "Sai mật khẩu" });
    }

    delete user.tl_password;

    res.status(200).json({
      message: "Đăng nhập thành công",
      user,
    });
  });
});

module.exports = router;
// Đảm bảo rằng router được export để sử dụng trong server.js
