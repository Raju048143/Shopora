import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import ProductImage from "./ProductImage";
import { CartContext } from "../../Context/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const handleOpenDetail = () => {
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
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
      <button
        onClick={handleAddToCart}
        className="w-full bg-blue-600 rounded p-2 text-white hover:bg-blue-900"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
