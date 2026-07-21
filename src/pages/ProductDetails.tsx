export default function ProductDetails() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10">

        <div>
          <img
            src="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=600&auto=format&fit=crop"
            alt="Product"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-4xl font-bold">
            Premium Comfort Dog Bed
          </h1>

          <p className="text-yellow-500 text-xl mt-3">
            ⭐⭐⭐⭐⭐ (4.8)
          </p>

          <h2 className="text-3xl font-bold text-rose-500 mt-4">
            $49.99
          </h2>

          <p className="mt-6 text-gray-600 leading-7">
            Give your pet the ultimate comfort with our premium memory foam
            dog bed. Designed for durability, support, and luxurious sleep.
          </p>

          <ul className="mt-6 space-y-3">
            <li>✔ Soft Memory Foam</li>
            <li>✔ Machine Washable Cover</li>
            <li>✔ Anti-Slip Bottom</li>
            <li>✔ Available in Multiple Sizes</li>
          </ul>

          <button className="mt-8 bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-xl font-bold">
            Add to Cart
          </button>
        </div>

      </div>
    </div>
  );
}