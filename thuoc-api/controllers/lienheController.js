const db = require('../config/db');

exports.createContact = (req, res) => {
  const { ten, email, noidung } = req.body;
  const query = 'INSERT INTO lienhe (ten, email, noidung) VALUES (?, ?, ?)';
  db.query(query, [ten, email, noidung], (err, result) => {
    if (err) {
      console.error('Lỗi khi thêm liên hệ:', err);
      return res.status(500).json({ message: 'Lỗi server' });
    }
    res.status(201).json({ message: 'Thêm liên hệ thành công' });
  });
};

exports.getAllContacts = (req, res) => {
  db.query('SELECT * FROM lienhe ORDER BY id DESC', (err, result) => {
    if (err) {
      console.error('Lỗi khi lấy danh sách liên hệ:', err);
      return res.status(500).json({ message: 'Lỗi server' });
    }
    res.status(200).json(result);
  });
};
exports.replyContact = (req, res) => {
  const { id } = req.params;
  const { traloi } = req.body;

  const query = 'UPDATE lienhe SET traloi = ?, trangthai = "Đã trả lời" WHERE id = ?';
  db.query(query, [traloi, id], (err, result) => {
    if (err) {
      console.error('Lỗi khi trả lời liên hệ:', err);
      return res.status(500).json({ message: 'Lỗi server' });
    }
    res.json({ message: 'Đã trả lời liên hệ' });
  });
};
exports.deleteContact = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM lienhe WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      console.error('Lỗi khi xóa liên hệ:', err);
      return res.status(500).json({ message: 'Lỗi server' });
    }
    res.json({ message: 'Đã xóa liên hệ' });
  });
};
