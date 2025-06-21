import React, { useState } from 'react';
import axios from 'axios';

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

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🌱 Sustainable Shopping Assistant</h1>
      <input
        type="text"
        className="border rounded px-3 py-2 w-full mb-2"
        placeholder="Enter product name (e.g., Milk, Chocolate Bar)"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <button
        onClick={fetchProductData}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {loading ? 'Loading...' : 'Check Sustainability Score'}
      </button>

      {result && (
        <div className="mt-6 border-t pt-4">
          <h2 className="text-xl font-semibold mb-2">Result for: {result.product_name}</h2>
          <p>🌍 Sustainability Score: <strong>{result.score}/10</strong></p>
          <ul className="mt-2 list-disc pl-6">
            {Object.entries(result.breakdown).map(([key, value]) => (
              <li key={key}>{key.replace(/_/g, ' ')}: +{value}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
