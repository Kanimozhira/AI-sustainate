import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

export default function App() {
  const [productName, setProductName] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchProductData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`http://localhost:5000/api/product?name=${productName}`);
      setResult(res.data);
    } catch (err) {
      alert('Failed to fetch product data');
    }
    setLoading(false);
  };

  // 🆕 Function to hide the result (but keep input & data intact)
  const handleBack = () => {
    setResult(null);
  };

  return (
    <div className="app-container">
      <h1 className="app-title">🌱 Sustainable Shopping Assistant</h1>
      <input
        type="text"
        className="app-input"
        placeholder="Enter product name (e.g., Milk, Chocolate Bar)"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button onClick={fetchProductData} className="app-button">
        {loading ? 'Loading...' : 'Check Sustainability Score'}
      </button>

      {result && (
  <div className="result-section">
    <h2 className="result-title">Result for: {result.product_name}</h2>
    <p className="result-score">
      🌍 Sustainability Score: <strong>{result.score}/10</strong>
    </p>
    <ul className="score-breakdown">
      {Object.entries(result.breakdown).map(([key, value]) => (
        <li key={key}>{key.replace(/_/g, ' ')}: +{value}</li>
      ))}
    </ul>

    {/* ✅ Full-page refresh Back button */}
    <button
      onClick={() => window.location.reload()}
      className="app-button"
      style={{ marginTop: '20px' }}
    >
      ← Back
    </button>
  </div>
)}
      
    </div>
  );
}
