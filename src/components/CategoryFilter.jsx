import React from "react";

export default function CategoryFilter({
  categories = [],
  selected,
  onSelect,
}) {
  return (
    <div className="flex gap-2 overflow-x-auto">
      <button
        onClick={() => onSelect("")}
        className={`px-3 py-1 rounded-lg border ${
          selected === ""
            ? "bg-indigo-50 border-indigo-400"
            : "bg-white dark:bg-gray-800"
        }`}
      >
        All
      </button>

      {categories.map((c) => (
        <button
          key={c.slug}
          onClick={() => onSelect(c.slug)}
          className={`px-3 py-1 rounded-lg border ${
            selected === c
              ? "bg-indigo-50 border-indigo-400"
              : "bg-white dark:bg-gray-800"
          }`}
        >
          {c.name}
        </button>
      ))}
    </div>
  );
}
