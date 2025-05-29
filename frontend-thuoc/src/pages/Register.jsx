import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, password }),
      });
      if (!res.ok) throw new Error('Đăng ký thất bại');
      alert('Đăng ký thành công! Vui lòng đăng nhập.');
      navigate('/login');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '400px' }}>
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Tên</label>
          <input
            type="text"
            className="form-control"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Tên của bạn"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="example@mail.com"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Mật khẩu</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Đăng ký</button>
      </form>
    </div>
  );
}
