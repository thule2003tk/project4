import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
      <Link className="navbar-brand" to="/">Pharmacy</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Trang chủ</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Danh sách thuốc</NavLink>
          </li>
          {user && (
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">Giỏ hàng</NavLink>
            </li>
          )}
        </ul>
        <ul className="navbar-nav ms-auto">
          {user ? (
            <>
              <li className="nav-item nav-link">Xin chào, {user.name || user.email}</li>
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={logout}>Đăng xuất</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item"><NavLink className="nav-link" to="/login">Đăng nhập</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/register">Đăng ký</NavLink></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
