import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import ProductForm from './pages/ProductForm';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/admin/product/add" element={<ProductForm />} />
        <Route path="/admin/product/edit/:id" element={<ProductForm />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
