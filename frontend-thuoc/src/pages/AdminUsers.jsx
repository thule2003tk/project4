import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({
    tl_username: "",
    tl_email: "",
    tl_password: "",
    tl_fullname: "",
    tl_phonenumber: "",
    tl_address: "",
    tl_role: "customer",
    tl_makh: "",
  });
  const [editingId, setEditingId] = useState(null);

  const fetchUsers = () => {
    axios.get("http://localhost:3000/api/users")
      .then((res) => {
        setUsers(res.data);
        console.log("✅ Lấy danh sách user:", res.data);
      })
      .catch((err) => {
        console.error("❌ Lỗi lấy user:", err);
        alert("❌ Không thể tải danh sách người dùng.");
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Xác nhận xoá người dùng này?")) {
      axios.delete(`http://localhost:3000/api/users/${id}`)
        .then(() => {
          alert("✅ Xoá user thành công!");
          fetchUsers();
        })
        .catch((err) => {
          console.error("❌ Lỗi xoá user:", err);
          alert("❌ Không thể xoá user.");
        });
    }
  };

  const handleEdit = (user) => {
    setForm({
      tl_username: user.tl_username,
      tl_email: user.tl_email,
      tl_password: "",
      tl_fullname: user.tl_fullname,
      tl_phonenumber: user.tl_phonenumber,
      tl_address: user.tl_address,
      tl_role: user.tl_role,
      tl_makh: user.tl_makh || "",
    });
    setEditingId(user.tl_mauser);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { ...form };

    if (!editingId && !dataToSend.tl_password) {
      alert("Mật khẩu không được để trống khi thêm mới.");
      return;
    }

    if (!dataToSend.tl_makh || dataToSend.tl_makh.trim() === "") {
      dataToSend.tl_makh = null;
    }

    try {
      if (!editingId) {
        console.log("📤 Thêm user:", dataToSend);
        await axios.post("http://localhost:3000/api/users", dataToSend);
        alert("✅ Thêm user thành công!");
      } else {
        if (!dataToSend.tl_password) delete dataToSend.tl_password;
        console.log("🛠 Cập nhật user:", dataToSend);
        await axios.put(`http://localhost:3000/api/users/${editingId}`, dataToSend);
        alert("✅ Cập nhật user thành công!");
      }

      setForm({
        tl_username: "",
        tl_email: "",
        tl_password: "",
        tl_fullname: "",
        tl_phonenumber: "",
        tl_address: "",
        tl_role: "customer",
        tl_makh: "",
      });
      setEditingId(null);
      fetchUsers();
    } catch (error) {
      console.error("❌ Lỗi gửi form:", error.response?.data || error);
      alert("❌ Gửi form thất bại. Kiểm tra dữ liệu đầu vào.");
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">Quản lý người dùng</h2>

      <form
        onSubmit={handleSubmit}
        className="row row-cols-1 row-cols-md-2 g-3 mb-5 border p-4 rounded shadow-sm bg-light"
      >
        <div className="col">
          <input
            className="form-control"
            placeholder="Username"
            value={form.tl_username}
            onChange={(e) => setForm({ ...form, tl_username: e.target.value })}
            required
          />
        </div>

        <div className="col">
          <input
            className="form-control"
            placeholder="Email"
            value={form.tl_email}
            onChange={(e) => setForm({ ...form, tl_email: e.target.value })}
            required
          />
        </div>

        <div className="col">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={form.tl_password}
            onChange={(e) => setForm({ ...form, tl_password: e.target.value })}
            required={!editingId}
          />
        </div>

        <div className="col">
          <input
            className="form-control"
            placeholder="Họ tên"
            value={form.tl_fullname}
            onChange={(e) => setForm({ ...form, tl_fullname: e.target.value })}
          />
        </div>

        <div className="col">
          <input
            className="form-control"
            placeholder="Số điện thoại"
            value={form.tl_phonenumber}
            onChange={(e) => setForm({ ...form, tl_phonenumber: e.target.value })}
          />
        </div>

        <div className="col">
          <input
            className="form-control"
            placeholder="Địa chỉ"
            value={form.tl_address}
            onChange={(e) => setForm({ ...form, tl_address: e.target.value })}
          />
        </div>

        <div className="col">
          <select
            className="form-select"
            value={form.tl_role}
            onChange={(e) => setForm({ ...form, tl_role: e.target.value })}
          >
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="col">
          <input
            className="form-control"
            placeholder="Mã khách hàng (nếu có)"
            value={form.tl_makh}
            onChange={(e) => setForm({ ...form, tl_makh: e.target.value })}
          />
        </div>

        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100">
            {editingId ? "Cập nhật người dùng" : "Thêm mới người dùng"}
          </button>
        </div>
      </form>

      <table className="table table-bordered table-striped table-hover">
        <thead className="table-dark">
          <tr>
            <th>Mã</th>
            <th>Username</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>SĐT</th>
            <th>Địa chỉ</th>
            <th>Vai trò</th>
            <th>Mã KH</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.tl_mauser}>
              <td>{u.tl_mauser}</td>
              <td>{u.tl_username}</td>
              <td>{u.tl_fullname}</td>
              <td>{u.tl_email}</td>
              <td>{u.tl_phonenumber}</td>
              <td>{u.tl_address}</td>
              <td>{u.tl_role}</td>
              <td>{u.tl_makh || "–"}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning me-2"
                  onClick={() => handleEdit(u)}
                >
                  Sửa
                </button>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => handleDelete(u.tl_mauser)}
                >
                  Xoá
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 🔙 Nút quay lại trang quản trị */}
      <div className="text-center mt-4">
        <Link to="/admin" className="btn btn-outline-secondary">
          ⬅ Quay lại trang quản trị
        </Link>
      </div>
    </div>
  );
}

export default AdminUsers;
// This code defines an AdminUsers component that allows administrators to manage users in a pharmacy application.