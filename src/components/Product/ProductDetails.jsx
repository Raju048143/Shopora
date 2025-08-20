import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import ProductImage from "./ProductImage";
import { CartContext } from "../../Context/CartContext";

function ProductDetails() {
  const location = useLocation();
  const product = location.state?.product;
  const { addToCart } = useContext(CartContext);
  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(product);
  };
  if (!product) {
    return <p className="text-center mt-10">Loading product details...</p>;
  }
  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex items-start justify-center">
        <ProductImage
          src={product.thumbnail}
          alt={product.title}
          className="h-[400px]"
        />
      </div>
      <div className="flex flex-col justify-start">
        <h1 className="text-3xl font-bold mb-3">{product.title}</h1>
        <p className="text-gray-600 mb-2">Brand: {product.brand}</p>
        <p className="text-blue-600 font-semibold text-2xl mb-4">
          ${product.price}
        </p>
        <p className="text-gray-500 mb-6">{product.description}</p>

        <div className="flex gap-4 mt-auto">
          <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition">
            Buy Now
          </button>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
