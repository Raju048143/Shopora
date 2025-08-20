import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  return (
    <div>
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
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-3">
              <span>{item.title} (x{item.quantity})</span>
              <span>₹{item.price * item.quantity}</span>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            onClick={clearCart}
            className="bg-gray-700 text-white px-4 py-2 rounded mt-4"
          >
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
