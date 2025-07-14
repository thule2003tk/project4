import React from 'react';
import { useParams, Link } from 'react-router-dom';
import tuVanData from '../data/tuVanData';

function TuvanDetail() {
  const { id } = useParams();
  const item = tuVanData.find((t) => t.id === parseInt(id));

  if (!item) {
    return <div className="container mt-4">❌ Không tìm thấy thông tin tư vấn.</div>;
  }

  return (
    <div className="container mt-5" style={{ maxWidth: '800px' }}>
      <Link to="/tuvan" className="btn btn-secondary mb-4">
        ← Quay lại danh sách
      </Link>

      <h2 className="mb-4 text-center" style={{ color: '#2c3e50', fontWeight: 'bold' }}>
        {item.title}
      </h2>

      <img
        src={item.image}
        className="img-fluid rounded mb-4 d-block mx-auto"
        alt={item.title}
        style={{ maxHeight: '350px', objectFit: 'cover' }}
      />

      <p
        className="lead text-justify"
        style={{
          lineHeight: '1.8',
          fontSize: '17px',
          color: '#34495e',
          whiteSpace: 'pre-line',
          textAlign: 'justify',
        }}
      >
        {item.detail}
      </p>

      <div className="text-center mt-5">
        <Link to="/" className="btn btn-primary">
          🏠 Về trang chủ
        </Link>
      </div>
    </div>
  );
}

export default TuvanDetail;
