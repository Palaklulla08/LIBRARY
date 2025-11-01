import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/slices/booksSlice";
export default function BookDetails() {
  const { id } = useParams();
  const nav = useNavigate();
  const dispatch = useDispatch();
  const book = useSelector((s) => s.books.list.find((b) => b.id === id));
  if (!book)
    return <div className="container-lg mx-auto py-12">Book not found</div>;
  const more = useSelector((s) =>
    s.books.list
      .filter((b) => b.category === book.category && b.id !== book.id)
      .slice(0, 2)
  );
  return (
    <div className="container-lg mx-auto py-12 grid grid-cols-12 gap-6">
      <section className="col-span-8">
        <a
          className="text-[#7A071A] dark:text-[#FEFCE8]  mb-4 inline-block"
          onClick={() => nav("/books")}
        >
          ← Back to Browse
        </a>
        <div className="card-glass rounded-xl p-6">
          <div className="flex gap-6">
            <div className="flex-1">
              <div className="mb-3">
                <span className="px-3 py-1 rounded-full bg-black/30 text-[#7A071A] text-sm">
                  {book.category}
                </span>
              </div>
              <h1 className="text-4xl font-display text-white mb-2">
                {book.title}
              </h1>
              <p className="text-[#7A071A] dark:text-[#FEFCE8]  mb-4">by {book.author}</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="text-yellow-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>
                      {i < Math.round(book.rating) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <div className="text-[#7A071A] dark:text-[#FEFCE8] ">{book.rating} / 5</div>
              </div>
              <div className="border-t border-white/5 pt-4 grid grid-cols-3 gap-4 text-[#7A071A] dark:text-[#FEFCE8] ">
                <div>
                  <div className="text-sm">Published</div>
                  <div className="text-lg">{book.year}</div>
                </div>
                <div>
                  <div className="text-sm">Pages</div>
                  <div className="text-lg">{book.pages}</div>
                </div>
                <div>
                  <div className="text-sm">ISBN</div>
                  <div className="text-lg">{book.isbn}</div>
                </div>
              </div>
              <div className="mt-6 border-t border-white/5 pt-6">
                <h3 className="text-xl mb-2">About This Book</h3>
                <p className="text-[#7A071A] dark:text-[#FEFCE8] ">{book.description}</p>
              </div>
            </div>
            <aside style={{ width: 320 }}>
              <div className="card-glass rounded-lg p-4 mb-6">
                <h3 className="mb-3">Quick Actions</h3>
                <button
                  onClick={() => dispatch(toggleFavorite(book.id))}
                  className="w-full mb-3 px-3 py-2 rounded bg-gradient-to-r from-[#ef5b61] to-[#7a071a] text-white"
                >
                  {book.favorite ? "♥ Favorited" : "♡ Add to Favorites"}
                </button>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(window.location.href)
                  }
                  className="w-full mb-3 px-3 py-2 rounded border"
                >
                  Share Book
                </button>
                <div className="text-center text-sm text-[#7A071A] dark:text-[#FEFCE8] ">
                  More in {book.category}
                </div>
              </div>
              <div className="card-glass rounded-lg p-4">
                <h3 className="mb-3">More in {book.category}</h3>
                {more.map((m) => (
                  <div
                    key={m.id}
                    className="border border-white/5 rounded p-3 mb-3"
                  >
                    <div className="font-semibold">{m.title}</div>
                    <div className="text-sm text-[#7A071A] dark:text-[#FEFCE8] ">
                      by {m.author} • ⭐ {m.rating}
                    </div>
                  </div>
                ))}
                {more.length === 0 && (
                  <div className="text-sm text-[#7A071A] dark:text-[#FEFCE8] ">No more books</div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="col-span-4">
        <div className="card-glass rounded-lg p-6 mb-6">
          <h3 className="mb-3">Details</h3>
          <div className="text-[#7A071A] dark:text-[#FEFCE8] ">
            <strong>Publisher:</strong> {book.publisher}
          </div>
          <div className="text-[#7A071A] dark:text-[#FEFCE8] ">
            <strong>Language:</strong> {book.language}
          </div>
          <div className="text-[#7A071A] dark:text-[#FEFCE8] ">
            <strong>Tags:</strong> {book.tags.join(", ")}
          </div>
        </div>
        <div className="card-glass rounded-lg p-6">
          <h3 className="mb-3">Reader Reviews</h3>
          <div className="text-[#7A071A] dark:text-[#FEFCE8] ">“A must read.” — ⭐⭐⭐⭐</div>
        </div>
      </section>
    </div>
  );
}
