import React from "react";
import { useNavigate } from "react-router-dom";
import ProductImage from "./ProductImage";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleOpenDetail = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div
      className="bg-white rounded-lg shadow p-4 w-full sm:w-64 transform transition duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
      onClick={handleOpenDetail}
    >
      <ProductImage src={product.thumbnail} alt={product.title} />
      <h2 className="text-lg font-bold mb-2">{product.title}</h2>
      <p className="text-gray-500 text-sm mb-1">Brand: {product.brand}</p>
      <p className="text-blue-600 font-semibold text-lg">${product.price}</p>
    </div>
  );
}

export default ProductCard;
