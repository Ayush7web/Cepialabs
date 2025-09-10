// import React from 'react'
// import Description from './components/Description'
// import Todo from './components/Todo/todo'

// const App = () => {
//   return (
//     <div>
//       {/* <Description/> */}
//       {/* <Todo/> */}
//     </div>
//   );
// }

// export default App

import React, { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import ProductList from "./components/ProductList";
import Pagination from "./components/Pagination";
// import button from "./pages/button";

const LIMIT = 10;

export default function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(""); // '' means all
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [favorites, setFavorites] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorites") || "[]");
    } catch {
      return [];
    }
  });
  const [dark, setDark] = useState(
    () =>{
       try {
    return JSON.parse(localStorage.getItem("dark")) || false;
  } catch {
    return false;
  }
});
  // apply dark class to html
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [query, category, skip]);

  async function fetchCategories() {
    try {
      const res = await fetch("https://dummyjson.com/products/categories");
      const data = await res.json();
      setCategories(data);
    } catch (e) {
      console.error(e);
    }
  }

  async function fetchProducts() {
    setLoading(true);
    setError("");
    try {
      let url = "";
      if (query) {
        url = `https://dummyjson.com/products/search?q=${encodeURIComponent(
          query
        )}&limit=${LIMIT}&skip=${skip}`;
      } else if (category) {
        url = `https://dummyjson.com/products/category/${encodeURIComponent(
          category
        )}?limit=${LIMIT}&skip=${skip}`;
      } else {
        url = `https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`;
      }
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network error");
      const data = await res.json();
      setProducts(data.products || []);
      setTotal(data.total ?? 0);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products. Please try again.");
      setProducts([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }

  function handleSearch(submittedQuery) {
    setQuery(submittedQuery);
    setSkip(0);
  }

  function handleCategorySelect(cat) {
    setCategory(cat);
    setQuery(""); // clear text search when switching category (optional)
    setSkip(0);
  }

  function toggleFavorite(id) {
    setFavorites((prev) => {
      const has = prev.includes(id);
      const next = has ? prev.filter((x) => x !== id) : [id, ...prev];
      localStorage.setItem("favorites", JSON.stringify(next));
      return next;
    });
  }

  return (
    <div className="min-h-screen  p-6">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Product Explorer</h1>
          <div className="flex items-center gap-3">
            {/* ==================================================================================== */}

            <button
              onClick={() => setDark((r) => !r)}
              className="px-3 py-1 rounded-lg border bg-white dark:bg-gray-800"
            >
              {dark ? "light" : "dark"}
            </button>

            <div className="text-sm text-gray-500">
              Favorites: {favorites.length}
            </div>
          </div>
        </header>

        <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />

        <div className="mt-4">
          <CategoryFilter
            categories={categories}
            selected={category}
            onSelect={handleCategorySelect}
          />
        </div>

        <div className="mt-6">
          {loading && <div className="text-center py-8">Loading...</div>}
          {error && (
            <div className="text-center text-red-500 py-4">{error}</div>
          )}

          {!loading && !error && (
            <>
              <ProductList
                products={products}
                favorites={favorites}
                toggleFavorite={toggleFavorite}
              />

              <div className="mt-6">
                <Pagination
                  skip={skip}
                  limit={LIMIT}
                  total={total}
                  onPrev={() => setSkip((s) => Math.max(0, s - LIMIT))}
                  onNext={() => setSkip((s) => s + LIMIT)}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
