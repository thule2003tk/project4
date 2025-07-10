import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [replyMap, setReplyMap] = useState({});

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/lienhe');
      setContacts(res.data);
    } catch (err) {
      console.error('❌ Lỗi tải danh sách liên hệ:', err);
    }
  };

  const handleReply = async (id) => {
    const traloi = replyMap[id];
    if (!traloi) return alert('⚠️ Vui lòng nhập nội dung trả lời');

    try {
      await axios.put(`http://localhost:3000/api/lienhe/${id}/traloi`, { traloi });
      alert('✅ Đã gửi phản hồi');
      setReplyMap(prev => ({ ...prev, [id]: '' }));
      fetchContacts();
    } catch (err) {
      console.error('❌ Lỗi khi trả lời:', err);
      alert('❌ Trả lời thất bại');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">📨 Quản lý liên hệ khách hàng</h2>

      {contacts.length === 0 ? (
        <p className="text-muted text-center">Không có liên hệ nào.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-dark text-center">
              <tr>
                <th>Họ tên</th>
                <th>Email</th>
                <th>Nội dung</th>
                <th>Trạng thái</th>
                <th>Phản hồi</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c.id}>
                  <td>{c.ten}</td>
                  <td>{c.email}</td>
                  <td>{c.noidung}</td>
                  <td className="text-center">
                    {c.trangthai === 'Đã trả lời' ? (
                      <span className="badge bg-success">Đã trả lời</span>
                    ) : (
                      <span className="badge bg-warning text-dark">Chưa trả lời</span>
                    )}
                  </td>
                  <td>
                    {c.trangthai === 'Đã trả lời' ? (
                      <div className="text-success">{c.traloi}</div>
                    ) : (
                      <>
                        <textarea
                          className="form-control mb-2"
                          rows="2"
                          placeholder="Nhập phản hồi..."
                          value={replyMap[c.id] || ''}
                          onChange={(e) =>
                            setReplyMap({ ...replyMap, [c.id]: e.target.value })
                          }
                        />
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={() => handleReply(c.id)}
                        >
                          Gửi phản hồi
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* 🔙 Nút quay lại */}
      <div className="text-center mt-4">
        <Link to="/admin" className="btn btn-outline-secondary">
          ⬅ Quay lại trang quản trị
        </Link>
      </div>
    </div>
  );
}
// This code defines an AdminContacts component that allows administrators to manage customer contacts in a pharmacy application.