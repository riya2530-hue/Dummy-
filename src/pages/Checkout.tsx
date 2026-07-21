import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
export default function Checkout() {
   const { cart, clearCart } = useCart();
    const navigate = useNavigate();

const total = cart.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0
);
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  clearCart();

  navigate("/order-success");
};
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-10">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border rounded-lg p-3"
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border rounded-lg p-3"
        />

        <textarea
          placeholder="Full Address"
          rows={4}
          className="w-full border rounded-lg p-3"
        ></textarea>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="City"
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="State"
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            placeholder="PIN Code"
            className="border rounded-lg p-3"
          />
        </div>
        <div className="border rounded-xl p-5 bg-gray-50">
  <h2 className="text-2xl font-bold mb-4">Order Summary</h2>

  {cart.map((item) => (
    <div
      key={item.name}
      className="flex justify-between py-2 border-b"
    >
      <span>
        {item.name} × {item.quantity}
      </span>

      <span>
        ${(item.price * item.quantity).toFixed(2)}
      </span>
    </div>
  ))}

  <div className="flex justify-between mt-4 text-xl font-bold">
    <span>Total</span>
    <span>${total.toFixed(2)}</span>
    
  </div>
</div>

        <button
          type="submit"
          className="w-full bg-rose-500 hover:bg-rose-600 text-white py-4 rounded-lg font-bold text-lg"
        >
          Place Order
        </button>
      </form>
    </div>
  );
}