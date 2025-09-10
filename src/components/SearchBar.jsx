import React, { useState } from "react";

export default function SearchBar({ query,  onSearch }) {
  const [local, setLocal] = useState(query || "");

  function submit(e) {
    e.preventDefault();
    onSearch(local.trim());
  }

  return (
    <form
      onSubmit={submit}
      className="flex items-center gap-2 max-w-md mx-auto"
    >
      <input
        className="flex-1 rounded-xl border px-3 py-2 outline-none bg-white dark:bg-gray-800"
        placeholder="Search products by name..."
        value={local}
        onChange={(e) => setLocal(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700"
      >
        Search
      </button>
    </form>
  );
}
