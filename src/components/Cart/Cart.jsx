import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import ProductImage from "../Product/ProductImage";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
  <div className="mx-auto p-4">
    {cart.length === 0 ? (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <p className="text-2xl font-semibold text-gray-600 mb-4">
          🛒 Your cart is empty!
        </p>
        <button
          onClick={() => navigate("/")}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-800 transition"
        >
          Continue Shopping
        </button>
      </div>
    ) : (
      <div className="overflow-x-auto">
        <div className="hidden text-center md:grid grid-cols-6 gap-4 bg-gray-200 p-2 rounded-t-lg font-semibold text-gray-700">
          <div className="text-center">Product</div>
          <div className="col-span-2 ">Details</div>
          <div className="text-center">Quantity</div>
          <div className="text-center">Price</div>
          <div className="text-center">Action</div>
        </div>
        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-1 md:grid-cols-6 gap-4 bg-white p-4 rounded-lg shadow mb-4 items-center"
          >
            <ProductImage
              src={item.thumbnail}
              alt={item.title}
              className="w-24 h-24 object-cover mx-auto md:mx-0"
            />
            <div className="col-span-2 text-center md:text-left">
              <p className="font-semibold text-center">{item.title}</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-center">{item.quantity}</p>
            </div>
            <div className="text-center md:text-left font-semibold text-blue-600">
             <p className="text-center"> ₹{item.price * item.quantity}</p>
            </div>
            <div className="text-center mx-auto md:text-left">
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </div>
        ))}

        {/* Cart Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-6">
          <button
            onClick={clearCart}
            className="bg-gray-700 text-white px-4 py-2 rounded mb-2 md:mb-0 md:mr-2"
          >
            Clear Cart
          </button>
          <button
            onClick={() => navigate("/checkout")}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    )}
  </div>
);

}

export default Cart;
