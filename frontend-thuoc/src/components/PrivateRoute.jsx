import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

export default function PrivateRoute({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    alert('Bạn cần đăng nhập để thực hiện thao tác này!');
    return <Navigate to="/login" />;
  }

  return children;
}
//Route bảo vệ trang giỏ hàng
