import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-3xl font-bold mb-4">
            🛒 Your cart is empty
          </h2>

          <p className="text-gray-600 mb-8">
            Looks like you haven't added any products yet.
          </p>

          <Link
            to="/products"
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {cart.map((item) => (
              <div
                key={item.name}
                className="flex justify-between items-center border rounded-xl p-5 shadow-sm"
              >
                {/* Left Side */}
                <div className="flex items-center gap-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-28 h-28 object-cover rounded-lg"
                  />

                  <div>
                    <h2 className="text-xl font-bold text-slate-800">
                      {item.name}
                    </h2>

                    <p className="text-lg text-gray-600 mt-2">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                      <button
                        onClick={() => decreaseQuantity(item.name)}
                        className="w-10 h-10 rounded-lg bg-gray-200 hover:bg-gray-300 font-bold"
                      >
                        -
                      </button>

                      <span className="font-bold text-lg">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQuantity(item.name)}
                        className="w-10 h-10 rounded-lg bg-rose-500 text-white hover:bg-rose-600 font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.name)}
                      className="mt-4 text-red-500 hover:text-red-700 font-semibold"
                    >
                      🗑 Remove
                    </button>
                  </div>
                </div>

                {/* Right Side */}
                <div className="text-2xl font-bold text-slate-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="mt-10 flex justify-between items-center border-t pt-6">
            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              🧹 Clear Cart
            </button>

            <div className="text-right">
              <p className="text-gray-600">Shipping: FREE</p>

              <h2 className="text-3xl font-bold mt-2">
                Total: ${total.toFixed(2)}
              </h2>

              <Link
                to="/products"
                className="inline-block mt-4 mr-3 bg-gray-200 hover:bg-gray-300 px-5 py-3 rounded-lg font-semibold"
              >
                Continue Shopping
              </Link>

             <Link
  to="/checkout"
  className="inline-block bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg font-semibold"
>
  Checkout
</Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
}