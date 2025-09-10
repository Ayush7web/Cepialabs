import React from "react";

export default function ProductItem({ product, isFav, toggleFavorite }) {
  const img = product.thumbnail || (product.images && product.images[0]) || "";

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow hover:shadow-md">
      <div className="relative">
        <img
          src={img}
          alt={product.title}
          className="w-full h-44 object-cover rounded-md"
        />
        <button
          onClick={toggleFavorite}
          className="absolute top-2 right-2 bg-white/80 dark:bg-black/40 p-1 rounded-full"
          aria-label="favorite"
        >
          {isFav ? "★" : "☆"}
        </button>
      </div>

      <h3 className="mt-3 font-medium">{product.title}</h3>
      <div className="mt-2 flex items-center justify-between text-sm text-gray-600">
        <div>₹{product.price}</div>
        <div>⭐ {product.rating}</div>
      </div>
    </div>
  );
}
