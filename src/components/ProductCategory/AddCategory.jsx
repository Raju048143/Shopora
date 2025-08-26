import React, { useState } from "react";
import axios from "axios";

export default function AddCategory() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
       const { data } = await axios.post(`${API_BASE_URL}/api/categories/create`,{
        title,
        description,
      });

      setMessage(data.message);
      setTitle("");
      setDescription("");
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-gray-500 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Add New Category</h2>

      {message && (
        <p className={`mb-3 text-sm ${message.includes("success") ? "text-green-400" : "text-red-400"}`}>
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Category Name</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 p-2 rounded-lg font-semibold"
        >
          Add Category
        </button>
      </form>
    </div>
  );
}
