import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/auth/login', formData)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        alert('Đăng nhập thành công!');
        navigate('/');
      })
      .catch(() => alert('Đăng nhập thất bại'));
  };

  return (
    <div className="container mt-4">
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Mật khẩu</label>
          <input type="password" className="form-control" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;
