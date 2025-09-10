import React from "react";
import ProductItem from "./ProductItem";

export default function ProductList({
  products = [],
  favorites = [],
  toggleFavorite,
}) {
  if (!products.length) {
    return (
      <div className="text-center text-gray-500 py-8">No products found.</div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductItem
          key={p.id}
          product={p}
          isFav={favorites.includes(p.id)}
          toggleFavorite={() => toggleFavorite(p.id)}
        />
      ))}
    </div>
  );
}
