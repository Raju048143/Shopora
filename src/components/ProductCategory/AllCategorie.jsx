import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AllCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/categories`);
        setCategories(res.data||[]);
      } catch (err) {
        setError("Failed to fetch categories", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, [API_BASE_URL]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this category?")) return;

    try {
      await axios.delete(`${API_BASE_URL}/api/categories/${id}`);
      setCategories(categories.filter((cat) => cat._id !== id));
    } catch (err) {
      alert("Failed to delete category", err);
    }finally{
        setLoading(false)
    }
  };

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">All Categories</h2>
      {categories.length === 0 ? (
        <p>No categories found.</p>
      ) : (
        <table className="w-full border border-gray-300 rounded-lg shadow-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat) => (
              <tr key={cat._id} className="border-t">
                <td className="p-3">{cat.name}</td>
                <td className="p-3">{cat.description || "—"}</td>
                <td className="p-3">
                  <button
                    onClick={() => handleDelete(cat._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
