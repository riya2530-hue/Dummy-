import { Link } from "react-router-dom";

export default function OrderSuccess() {
  const orderId = "PP" + Math.floor(100000 + Math.random() * 900000);

  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-center">
      <div className="bg-white rounded-2xl shadow-lg p-10">

        <div className="text-6xl mb-6">✅</div>

        <h1 className="text-4xl font-bold text-green-600 mb-4">
          Order Placed Successfully!
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          Thank you for shopping at <strong>PetParadise</strong>.
        </p>

        <div className="bg-gray-100 rounded-xl p-6 mb-8">
          <p className="text-lg">
            <strong>Order ID:</strong> {orderId}
          </p>

          <p className="mt-3">
            🚚 Estimated Delivery:
            <strong> 3–5 Business Days</strong>
          </p>
        </div>

        <Link
          to="/products"
          className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}