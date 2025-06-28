const express = require("express");
const router = express.Router();
const db = require("../config/db");
const bcrypt = require("bcrypt");
const moment = require("moment");

// 📌 Lấy tất cả user
router.get("/", (req, res) => {
  db.query("SELECT * FROM tl_user", (err, results) => {
    if (err) return res.status(500).json({ message: "Lỗi truy vấn", error: err });
    res.json(results);
  });
});
// ✅ Thêm user
router.post("/", async (req, res) => {
  const {
    tl_username,
    tl_email,
    tl_password,
    tl_fullname,
    tl_phonenumber,
    tl_address,
    tl_role
  } = req.body;

  if (!tl_username || !tl_email || !tl_password) {
    return res.status(400).json({ message: "Thiếu thông tin bắt buộc" });
  }

  try {
    const hashedPassword = await bcrypt.hash(tl_password, 10);
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");

    db.query("SELECT COUNT(*) AS total FROM tl_user", (err, result) => {
      if (err) return res.status(500).json({ message: "Lỗi đếm user", error: err });

      const total = result[0].total + 1;
      const mauser = "U" + total.toString().padStart(3, "0");
      const makh = (tl_role === "customer")
        ? "KH" + total.toString().padStart(3, "0")
        : null;

      const sql = `
        INSERT INTO tl_user (
          tl_mauser, tl_username, tl_email, tl_password,
          tl_fullname, tl_phonenumber, tl_address, tl_role,
          tl_created_at, tl_updated_at, tl_makh
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      db.query(sql, [
        mauser,
        tl_username,
        tl_email,
        hashedPassword,
        tl_fullname,
        tl_phonenumber,
        tl_address,
        tl_role,
        createdAt,
        createdAt,
        makh
      ], (err2) => {
        if (err2) {
          console.error("❌ Lỗi thêm user:", err2);
          return res.status(500).json({ message: "Lỗi tạo user", error: err2 });
        }

        // ✅ Nếu là customer, thêm tiếp vào bảng tl_khachhang
        if (tl_role === "customer") {
          const sqlKH = `
            INSERT INTO tl_khachhang (
              tl_makh, tl_tenkh, tl_email, tl_sdt, tl_diachi, tl_matkhau
            ) VALUES (?, ?, ?, ?, ?, ?)
          `;

          db.query(sqlKH, [
            makh,
            tl_fullname,
            tl_email,
            tl_phonenumber,
            tl_address,
            tl_password // ⚠️ lưu rõ ràng, có thể chuyển sang mã hóa nếu muốn
          ], (err3) => {
            if (err3) {
              console.error("❌ Lỗi thêm khách hàng:", err3);
              return res.status(500).json({ message: "Tạo user thành công nhưng lỗi tạo khách hàng", error: err3 });
            }

            return res.status(200).json({ message: "✅ Thêm user và khách hàng thành công!" });
          });
        } else {
          res.status(200).json({ message: "✅ Thêm user thành công!" });
        }
      });
    });
  } catch (error) {
    console.error("❌ Lỗi server:", error);
    return res.status(500).json({ message: "Lỗi server", error });
  }
});

// ✏️ Cập nhật user
router.put("/:id", async (req, res) => {
  const {
    tl_username,
    tl_email,
    tl_password,
    tl_fullname,
    tl_phonenumber,
    tl_address,
    tl_role,
    tl_makh // nếu cần sửa luôn makh
  } = req.body;

  try {
    const sql = `
      UPDATE tl_user SET
        tl_username = ?, tl_email = ?, 
        ${tl_password ? "tl_password = ?," : ""}
        tl_fullname = ?, tl_phonenumber = ?, tl_address = ?, tl_role = ?, 
        tl_makh = ?, 
        tl_updated_at = NOW()
      WHERE tl_mauser = ?
    `;

    const params = tl_password
      ? [
          tl_username,
          tl_email,
          await bcrypt.hash(tl_password, 10),
          tl_fullname,
          tl_phonenumber,
          tl_address,
          tl_role,
          tl_makh || null,
          req.params.id
        ]
      : [
          tl_username,
          tl_email,
          tl_fullname,
          tl_phonenumber,
          tl_address,
          tl_role,
          tl_makh || null,
          req.params.id
        ];

    db.query(sql, params, (err) => {
      if (err) return res.status(500).json({ message: "Cập nhật thất bại", error: err });
      res.status(200).json({ message: "✅ Cập nhật thành công!" });
    });
  } catch (error) {
    res.status(500).json({ message: "Lỗi server", error });
  }
});

// ❌ Xoá user
router.delete("/:id", (req, res) => {
  db.query("DELETE FROM tl_user WHERE tl_mauser = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json({ message: "Xoá thất bại", error: err });
    res.status(200).json({ message: "🗑️ Xoá thành công!" });
  });
});

module.exports = router;
// Compare this snippet from thuoc-api/routes/userRoutes.js: