import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminDrugs() {
  const [drugs, setDrugs] = useState([]);
  const [form, setForm] = useState({
    tl_mathuoc: '',
    tl_tenthuc: '',
    tl_loai: '',
    tl_congdung: '',
    tl_giaban: '',
    tl_soluongton: '',
    tl_mancc: '',
    tl_hinhanh: ''
  });
  const [editingId, setEditingId] = useState(null);

  const fetchDrugs = () => {
    axios.get('http://localhost:3000/api/products')
      .then(res => setDrugs(res.data))
      .catch(err => console.error('❌ Lỗi khi load thuốc:', err));
  };

  useEffect(() => {
    fetchDrugs();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      tl_giaban: Number(form.tl_giaban),
      tl_soluongton: Number(form.tl_soluongton),
    };

    if (editingId) {
      delete payload.tl_mathuoc;
      axios.put(`http://localhost:3000/api/products/${editingId}`, payload)
        .then(() => {
          fetchDrugs();
          resetForm();
        })
        .catch(err => {
          console.error('❌ Lỗi sửa thuốc:', err);
          alert('❌ Sửa thuốc thất bại');
        });
    } else {
      axios.post('http://localhost:3000/api/products', payload)
        .then(() => {
          fetchDrugs();
          resetForm();
        })
        .catch(err => {
          console.error('❌ Lỗi thêm thuốc:', err);
          alert('❌ Thêm thuốc thất bại. Kiểm tra mã thuốc hoặc nhà cung cấp!');
        });
    }
  };

  const handleEdit = (thuoc) => {
    setForm({ ...thuoc });
    setEditingId(thuoc.tl_mathuoc);
  };

  const handleDelete = (id) => {
    if (window.confirm("Bạn có chắc muốn xoá thuốc này không?")) {
      axios.delete(`http://localhost:3000/api/products/${id}`)
        .then(() => fetchDrugs())
        .catch(err => {
          console.error('❌ Lỗi xoá thuốc:', err);
          alert('❌ Không thể xoá thuốc!');
        });
    }
  };

  const resetForm = () => {
    setForm({
      tl_mathuoc: '',
      tl_tenthuc: '',
      tl_loai: '',
      tl_congdung: '',
      tl_giaban: '',
      tl_soluongton: '',
      tl_mancc: '',
      tl_hinhanh: ''
    });
    setEditingId(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">{editingId ? '🛠 Sửa thuốc' : '➕ Thêm thuốc mới'}</h2>

      <form onSubmit={handleSubmit} className="row row-cols-1 row-cols-md-2 g-3 mb-5 border rounded p-4 bg-light shadow-sm">
        <div className="col">
          <input
            className="form-control"
            placeholder="Mã thuốc"
            value={form.tl_mathuoc}
            onChange={e => setForm({ ...form, tl_mathuoc: e.target.value })}
            required
            disabled={!!editingId}
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            placeholder="Tên thuốc"
            value={form.tl_tenthuc}
            onChange={e => setForm({ ...form, tl_tenthuc: e.target.value })}
            required
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            placeholder="Loại thuốc"
            value={form.tl_loai}
            onChange={e => setForm({ ...form, tl_loai: e.target.value })}
            required
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            placeholder="Công dụng"
            value={form.tl_congdung}
            onChange={e => setForm({ ...form, tl_congdung: e.target.value })}
            required
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="Giá bán"
            value={form.tl_giaban}
            onChange={e => setForm({ ...form, tl_giaban: e.target.value })}
            required
          />
        </div>
        <div className="col">
          <input
            type="number"
            className="form-control"
            placeholder="Số lượng tồn"
            value={form.tl_soluongton}
            onChange={e => setForm({ ...form, tl_soluongton: e.target.value })}
            required
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            placeholder="Mã nhà cung cấp"
            value={form.tl_mancc}
            onChange={e => setForm({ ...form, tl_mancc: e.target.value })}
            required
          />
        </div>
        <div className="col">
          <input
            className="form-control"
            placeholder="Link ảnh (tuỳ chọn)"
            value={form.tl_hinhanh}
            onChange={e => setForm({ ...form, tl_hinhanh: e.target.value })}
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success w-100">
            {editingId ? '💾 Lưu thay đổi' : '➕ Thêm thuốc'}
          </button>
        </div>
        {editingId && (
          <div className="col">
            <button type="button" onClick={resetForm} className="btn btn-secondary w-100">
              ❌ Huỷ
            </button>
          </div>
        )}
      </form>

      <h4 className="mb-3">📋 Danh sách thuốc ({drugs.length})</h4>
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Mã</th>
              <th>Ảnh</th>
              <th>Tên</th>
              <th>Loại</th>
              <th>Công dụng</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Nhà CC</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {drugs.map(drug => (
              <tr key={drug.tl_mathuoc}>
                <td>{drug.tl_mathuoc}</td>
                <td>
                  {drug.tl_hinhanh ? (
                    <img src={drug.tl_hinhanh} alt={drug.tl_tenthuc} style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                  ) : (
                    <span className="text-muted">Không có ảnh</span>
                  )}
                </td>
                <td>{drug.tl_tenthuc}</td>
                <td>{drug.tl_loai}</td>
                <td>{drug.tl_congdung}</td>
                <td>{drug.tl_giaban.toLocaleString()}₫</td>
                <td>{drug.tl_soluongton}</td>
                <td>{drug.tl_mancc}</td>
                <td>
                  <button onClick={() => handleEdit(drug)} className="btn btn-warning btn-sm me-2">✏️ Sửa</button>
                  <button onClick={() => handleDelete(drug.tl_mathuoc)} className="btn btn-danger btn-sm">🗑️ Xoá</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Nút quay lại trang admin */}
      <div className="text-center mt-4">
        <Link to="/admin" className="btn btn-outline-secondary">
          ⬅ Quay lại trang quản trị
        </Link>
      </div>
    </div>
  );
}

export default AdminDrugs;
// This code defines an AdminDrugs component that allows administrators to manage drugs in a pharmacy application.