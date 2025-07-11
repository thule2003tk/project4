import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Home.css';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />

      <div className="container py-4">
        <h1 className="mb-4 text-primary fw-bold">💊 Danh sách thuốc</h1>
        <div className="row g-4">
          {products.map(product => (
            <div className="col-md-4" key={product.tl_mathuoc}>
              <div className="card h-100 shadow-sm product-card">
                <img
                  src={product.tl_hinhanh}
                  alt={product.tl_tenthuc}
                  className="card-img-top product-img"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.tl_tenthuc}</h5>
                  <p className="card-text">
                    {product.tl_congdung
                      ? product.tl_congdung.substring(0, 100) + '...'
                      : 'Không có mô tả'}
                  </p>
                </div>
                <div className="card-footer bg-transparent border-0 d-flex gap-2">
                  <Link to={`/product/${product.tl_mathuoc}`} className="btn btn-outline-primary w-50">
                    Xem chi tiết
                  </Link>
                  <Link to="/cart" className="btn btn-primary w-50">
                    🛒 Mua ngay
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === Về nhà thuốc === */}
      <section className="mt-5 bg-light py-5">
        <div className="container text-center">
          <h2 className="text-primary fw-bold mb-4">🏥 Giới thiệu về Nhà thuốc TL</h2>
          <p className="text-muted fs-5">
            Nhà thuốc TL là địa chỉ tin cậy chuyên cung cấp các loại thuốc chất lượng cao,
            với đội ngũ dược sĩ chuyên môn và tận tâm.
          </p>
        </div>
      </section>

      {/* === Hỗ trợ khách hàng === */}
      <section className="py-5 bg-white border-top">
        <div className="container text-center">
          <h2 className="text-primary fw-bold mb-4">📞 Hỗ trợ khách hàng</h2>
          <div className="row justify-content-center g-4">
            <div className="col-md-4">
              <div className="border p-4 rounded shadow-sm h-100">
                <h5 className="fw-bold mb-2">Tư vấn trực tiếp</h5>
                <p>Chat qua Zalo, Messenger hoặc gọi trực tiếp với dược sĩ.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border p-4 rounded shadow-sm h-100">
                <h5 className="fw-bold mb-2">Hotline 24/7</h5>
                <p>Gọi ngay: <strong>0989.199.535</strong></p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="border p-4 rounded shadow-sm h-100">
                <h5 className="fw-bold mb-2">Email hỗ trợ</h5>
                <p>Gửi câu hỏi: <strong>support@thuocTL.vn</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* === Kiến thức sức khỏe === */}
      <section className="py-5 bg-light border-top">
        <div className="container text-center">
          <h2 className="text-primary fw-bold mb-4">📚 Kiến thức sức khỏe</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="bg-white p-3 rounded shadow-sm h-100">
                <h6 className="fw-bold mb-2">Phân biệt thuốc thật - giả</h6>
                <p className="text-muted">Cách nhận biết tem, bao bì và nguồn gốc thuốc chính hãng.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-3 rounded shadow-sm h-100">
                <h6 className="fw-bold mb-2">Cách dùng thuốc an toàn</h6>
                <p className="text-muted">Không tự ý dùng thuốc, tuân thủ đúng chỉ định bác sĩ.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="bg-white p-3 rounded shadow-sm h-100">
                <h6 className="fw-bold mb-2">Bổ sung đề kháng</h6>
                <p className="text-muted">Tăng cường vitamin C, luyện tập thể thao, giữ tinh thần lạc quan.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
// import React, { useEffect, useState } from 'react';