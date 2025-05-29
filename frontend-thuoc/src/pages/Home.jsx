import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container mt-4">
      <h1>Danh sách thuốc</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-3" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description?.substring(0, 100)}...</p>
                <Link to={`/product/${product.id}`} className="btn btn-primary">Xem chi tiết</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
