// src/components/HomePage.jsx
import React from 'react';

function HomePage() {
  return (
    <section className="homepage">
      <div className="hero">
        <div className="hero-text">
          <h1>Chào mừng đến với <span>Tiệm thuốc LHThu</span></h1>
          <p>Khám phá các loại thuốc chính hãng, tư vấn chuyên sâu và đặt hàng nhanh chóng ngay hôm nay!</p>
          <div className="hero-buttons">
            <button className="btn-primary">Xem danh sách thuốc</button>
            <button className="btn-secondary">Tư vấn ngay</button>
          </div>
        </div>
        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1588776814546-dbc18bc1a0f1?auto=format&fit=crop&w=600&q=80"
            alt="Tiệm thuốc LHThu"
          />
        </div>
      </div>

      <div className="features">
        <div className="feature">
          <h3>🛒 Mua thuốc dễ dàng</h3>
          <p>Đặt hàng nhanh chóng, giao hàng tận nơi.</p>
        </div>
        <div className="feature">
          <h3>👩‍⚕️ Tư vấn chuyên nghiệp</h3>
          <p>Đội ngũ dược sĩ tư vấn tận tâm, chính xác.</p>
        </div>
        <div className="feature">
          <h3>🔒 An toàn & Chính hãng</h3>
          <p>Sản phẩm đạt chuẩn, bảo đảm chất lượng.</p>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
