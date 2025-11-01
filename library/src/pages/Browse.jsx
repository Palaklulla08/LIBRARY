import React from "react";
import { useParams, useSearchParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";
import useFilteredBooks from "../hooks/useFilteredBooks";

export default function Browse() {
  const { category } = useParams();
  const [sp, setSp] = useSearchParams();
  const q = sp.get("q") || "";
  const books = useSelector((s) => s.books.list);
  const cats = Array.from(new Set(books.map((b) => b.category)));
  const filtered = useFilteredBooks(books, { q, category: category || "all" });
  return (
    <section className="container-lg mx-auto py-12">
      <h1 className="text-4xl font-display text-white mb-2">
        Browse Our Collection
      </h1>
      <p className="text-[#7A071A]mb-6">
        Discover your next favorite book from our carefully curated library.
      </p>
      <div className="card-glass p-6 rounded-xl mb-6">
        <input
          value={q}
          onChange={(e) => setSp({ q: e.target.value })}
          placeholder="Search by title or author..."
          className="w-full p-3 rounded bg-transparent border"
        />
        <div className="mt-4 flex gap-3 flex-wrap">
          {["All", ...cats].map((c) => (
            <Link
              key={c}
              to={c === "All" ? "/books" : `/books/${encodeURIComponent(c)}`}
              className="px-4 py-2 rounded bg-black/30 text-[#7A071A]"
            >
              {c}
            </Link>
          ))}
        </div>
      </div>
      <p className="text-[#7A071A] mb-4">Found {filtered.length} books</p>
      <div className="grid md:grid-cols-3 gap-6">
        {filtered.map((b) => (
          <BookCard key={b.id} book={b} />
        ))}
      </div>
    </section>
  );
}
