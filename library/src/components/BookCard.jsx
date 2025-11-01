import React from "react";
import { Link } from "react-router-dom";
export default function BookCard({ book }) {
  return (
    <article className="card-glass rounded-xl p-6 shadow-md border border-white/5 card-hover flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs px-3 py-1 rounded-full bg-yellow-50 text-[#7A071A] font-semibold  ">
          {book.category}
        </span>
        <div className="text-sm text-yellow-400">
          ★ {book.rating.toFixed(1)}
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-display font-bold mb-1 text-brand-deep dark:text-brand-beige">
          {book.title}
        </h3>
        <p className="text-sm text-[#7A071A] dark:text-[#FEFCE8] mb-3">
          by {book.author}
        </p>
        <p className="text-sm text-[#7A071A] dark:text-[#FEFCE8]  c mb-4 line-clamp-4">
          {book.description}
        </p>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="text-xs text-[#7A071A] dark:text-[#FEFCE8]  ">
          📅 {book.year} • 📖 {book.pages}
        </div>
        <Link to={`/book/${book.id}`} className="btn-glow">
          View Details
        </Link>
      </div>
    </article>
  );
}
