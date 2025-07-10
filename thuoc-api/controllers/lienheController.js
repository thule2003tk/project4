const db = require('../config/db');

// ✅ 1. Tạo liên hệ mới
exports.createContact = (req, res) => {
  const { ten, email, noidung } = req.body;

  if (!ten || !email || !noidung) {
    return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin' });
  }

  const query = 'INSERT INTO lienhe (ten, email, noidung, trangthai) VALUES (?, ?, ?, "Chưa trả lời")';
  db.query(query, [ten, email, noidung], (err, result) => {
    if (err) {
      console.error('❌ Lỗi khi thêm liên hệ:', err);
      return res.status(500).json({ message: 'Lỗi server khi thêm liên hệ' });
    }
    res.status(201).json({ message: '✅ Thêm liên hệ thành công' });
  });
};

// ✅ 2. Lấy danh sách tất cả liên hệ
exports.getAllContacts = (req, res) => {
  const query = 'SELECT * FROM lienhe ORDER BY id DESC';
  db.query(query, (err, result) => {
    if (err) {
      console.error('❌ Lỗi khi lấy danh sách liên hệ:', err);
      return res.status(500).json({ message: 'Lỗi server khi lấy liên hệ' });
    }
    res.status(200).json(result);
  });
};

// ✅ 3. Trả lời liên hệ
exports.replyContact = (req, res) => {
  const { id } = req.params;
  const { traloi } = req.body;

  if (!traloi || traloi.trim() === '') {
    return res.status(400).json({ message: 'Nội dung phản hồi không được để trống' });
  }

  const query = 'UPDATE lienhe SET traloi = ?, trangthai = "Đã trả lời" WHERE id = ?';
  db.query(query, [traloi, id], (err, result) => {
    if (err) {
      console.error('❌ Lỗi khi trả lời liên hệ:', err);
      return res.status(500).json({ message: 'Lỗi server khi trả lời liên hệ' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy liên hệ để trả lời' });
    }
    res.json({ message: '✅ Đã trả lời liên hệ' });
  });
};

// ✅ 4. Xoá liên hệ
exports.deleteContact = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM lienhe WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('❌ Lỗi khi xoá liên hệ:', err);
      return res.status(500).json({ message: 'Lỗi server khi xoá liên hệ' });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Không tìm thấy liên hệ để xoá' });
    }
    res.json({ message: '✅ Đã xoá liên hệ' });
  });
};
