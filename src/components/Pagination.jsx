import React from "react";

export default function Pagination({ skip, limit, total, onPrev, onNext }) {
  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit) || 1;

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        onClick={onPrev}
        disabled={skip === 0}
        className="px-3 py-1 rounded border disabled:opacity-50"
      >
        Prev
      </button>
      <div className="text-sm text-gray-600">
        Page {currentPage} of {totalPages}
      </div>
      <button
        onClick={onNext}
        disabled={skip + limit >= total}
        className="px-3 py-1 rounded border disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
