import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AllProduct() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(`${API_BASE_URL}/api/products`);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-500">Loading products...</p>;
  }

  if (products.length === 0) {
    return <p className="text-center text-gray-400">No products found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-gray-400 text-white p-4 rounded-lg shadow-md"
          >
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-300 mb-2">{product.description}</p>
            <p className="text-yellow-400 font-bold mb-2">₹{product.price}</p>
            {product.category && (
              <p className="text-sm text-gray-400">
                Category: <span className="font-medium">{product.category.name}</span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
