// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { addBook } from '../store/slices/booksSlice';
// import { useNavigate } from 'react-router-dom';

// export default function AddBook() {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const books = useSelector((s) => s.books.list);
//   const categories = Array.from(new Set(books.map((b) => b.category)));

//   const [form, setForm] = useState({
//     title: '',
//     author: '',
//     category: categories[0] || '',
//     year: '',
//     pages: '',
//     rating: '',
//     description: '',
//     isbn: '',
//     publisher: '',
//     language: '',
//     tags: '',
//   });

//   const [err, setErr] = useState({});

//   const onChange = (e) =>
//     setForm((s) => ({
//       ...s,
//       [e.target.name]: e.target.value,
//     }));

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const errors = {};
//     if (!form.title) errors.title = 'required';
//     if (!form.author) errors.author = 'required';
//     if (!form.rating) errors.rating = 'required';

//     if (Object.keys(errors).length) {
//       setErr(errors);
//       return;
//     }

//     const book = {
//       title: form.title,
//       author: form.author,
//       category: form.category,
//       year: form.year ? Number(form.year) : undefined,
//       pages: form.pages ? Number(form.pages) : undefined,
//       rating: Number(form.rating),
//       description: form.description,
//       isbn: form.isbn,
//       publisher: form.publisher,
//       language: form.language || 'English',
//       tags: form.tags.split(',').map((t) => t.trim()).filter(Boolean),
//       cover: '/src/assets/placeholder.svg',
//     };

//     dispatch(addBook(book));
//     navigate('/books');
//   };

//   return (
//     <div className="container-lg mx-auto py-12">
//       <div className="card-glass rounded-xl p-8 max-w-3xl mx-auto">
//         <h2 className="text-3xl font-display text-white mb-4">
//           Add New Book
//         </h2>

//         <form onSubmit={onSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm text-[#7A071A]">Title *</label>
//             <input
//               name="title"
//               value={form.title}
//               onChange={onChange}
//               className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
//               placeholder="Book title..."
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-[#7A071A]">Author *</label>
//             <input
//               name="author"
//               value={form.author}
//               onChange={onChange}
//               className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
//               placeholder="Author name..."
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm text-[#7A071A]">Category</label>
//               <input
//                 name="category"
//                 value={form.category}
//                 onChange={onChange}
//                 className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
//                 placeholder="Category..."
//               />
//             </div>

//             <div>
//               <label className="block text-sm text-[#7A071A]">
//                 Rating (0-5) *
//               </label>
//               <input
//                 name="rating"
//                 type="number"
//                 step="0.1"
//                 value={form.rating}
//                 onChange={onChange}
//                 className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
//                 placeholder="4.5"
//               />
//             </div>
//           </div>

//           <div>
//             <label className="block text-sm text-[#7A071A]">
//               Description *
//             </label>
//             <textarea
//               name="description"
//               value={form.description}
//               onChange={onChange}
//               className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
//               rows="4"
//               placeholder="Write a short description..."
//             />
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm text-[#7A071A]">
//                 Published Year
//               </label>
//               <input
//                 name="year"
//                 value={form.year}
//                 onChange={onChange}
//                 className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-[#7A071A]">Pages</label>
//               <input
//                 name="pages"
//                 value={form.pages}
//                 onChange={onChange}
//                 className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm text-[#7A071A]">ISBN</label>
//               <input
//                 name="isbn"
//                 value={form.isbn}
//                 onChange={onChange}
//                 className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-[#7A071A]">Publisher</label>
//               <input
//                 name="publisher"
//                 value={form.publisher}
//                 onChange={onChange}
//                 className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm text-[#7A071A]">Language</label>
//               <input
//                 name="language"
//                 value={form.language}
//                 onChange={onChange}
//                 className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
//               />
//             </div>
//             <div>
//               <label className="block text-sm text-[#7A071A]">
//                 Tags (comma separated)
//               </label>
//               <input
//                 name="tags"
//                 value={form.tags}
//                 onChange={onChange}
//                 className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
//                 placeholder="e.g. Classic, Mystery"
//               />
//             </div>
//           </div>

//           <div>
//             <button
//               type="submit"
//               className="btn-glow w-full bg-gradient-to-r from-[#7A071A] to-[#ef5b61] [text-white font-semibold py-3 rounded-lg hover:scale-[1.02] transition-all"
//             >
//               Add Book to Library
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../store/slices/booksSlice';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((s) => s.books.list);
  const categories = Array.from(new Set(books.map((b) => b.category)));

  const [form, setForm] = useState({
    title: '',
    author: '',
    category: categories[0] || '',
    year: '',
    pages: '',
    rating: '',
    description: '',
    isbn: '',
    publisher: '',
    language: '',
    tags: '',
  });

  const [err, setErr] = useState({});

  // handle input
  const onChange = (e) =>
    setForm((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));

  const validate = () => {
    const errors = {};
    if (!form.title.trim()) errors.title = 'Title is required';
    if (!form.author.trim()) errors.author = 'Author is required';
    if (!form.category.trim()) errors.category = 'Category is required';
    if (!form.description.trim()) errors.description = 'Description is required';
    if (!form.rating || form.rating < 0 || form.rating > 5)
      errors.rating = 'Rating must be between 0 and 5';
    if (form.year && (isNaN(form.year) || form.year.length !== 4))
      errors.year = 'Enter a valid year';
    if (form.pages && isNaN(form.pages))
      errors.pages = 'Pages must be a number';
    return errors;
  };

  // handle submit
  const onSubmit = (e) => {
    e.preventDefault();
    const errors = validate();

    if (Object.keys(errors).length) {
      setErr(errors);
      return;
    }

    const book = {
      title: form.title.trim(),
      author: form.author.trim(),
      category: form.category.trim(),
      year: form.year ? Number(form.year) : undefined,
      pages: form.pages ? Number(form.pages) : undefined,
      rating: Number(form.rating),
      description: form.description.trim(),
      isbn: form.isbn.trim(),
      publisher: form.publisher.trim(),
      language: form.language.trim() || 'English',
      tags: form.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
      cover: '/src/assets/placeholder.svg',
      id: Date.now(),
    };

    dispatch(addBook(book));
    navigate('/books');
  };

  return (
    <div className="container-lg mx-auto py-12">
      <div className="card-glass rounded-xl p-8 max-w-3xl mx-auto">
        <h2 className="text-3xl font-display text-white mb-4">
          Add New Book
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm text-[#7A071A]">Title *</label>
            <input
              name="title"
              value={form.title}
              onChange={onChange}
              className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
              placeholder="Book title..."
            />
            {err.title && <p className="text-red-500 text-sm">{err.title}</p>}
          </div>

          {/* Author */}
          <div>
            <label className="block text-sm text-[#7A071A]">Author *</label>
            <input
              name="author"
              value={form.author}
              onChange={onChange}
              className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
              placeholder="Author name..."
            />
            {err.author && <p className="text-red-500 text-sm">{err.author}</p>}
          </div>

          {/* Category + Rating */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#7A071A]">Category *</label>
              <input
                name="category"
                value={form.category}
                onChange={onChange}
                className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
                placeholder="Category..."
              />
              {err.category && (
                <p className="text-red-500 text-sm">{err.category}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-[#7A071A]">
                Rating (0-5) *
              </label>
              <input
                name="rating"
                type="number"
                step="0.1"
                value={form.rating}
                onChange={onChange}
                className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
                placeholder="4.5"
              />
              {err.rating && (
                <p className="text-red-500 text-sm">{err.rating}</p>
              )}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm text-[#7A071A]">
              Description *
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={onChange}
              className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
              rows="4"
              placeholder="Write a short description..."
            />
            {err.description && (
              <p className="text-red-500 text-sm">{err.description}</p>
            )}
          </div>

          {/* Year + Pages */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#7A071A]">
                Published Year
              </label>
              <input
                name="year"
                value={form.year}
                onChange={onChange}
                className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
              />
              {err.year && <p className="text-red-500 text-sm">{err.year}</p>}
            </div>
            <div>
              <label className="block text-sm text-[#7A071A]">Pages</label>
              <input
                name="pages"
                value={form.pages}
                onChange={onChange}
                className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
              />
              {err.pages && <p className="text-red-500 text-sm">{err.pages}</p>}
            </div>
          </div>

          {/* ISBN + Publisher */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#7A071A]">ISBN</label>
              <input
                name="isbn"
                value={form.isbn}
                onChange={onChange}
                className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
              />
            </div>
            <div>
              <label className="block text-sm text-[#7A071A]">Publisher</label>
              <input
                name="publisher"
                value={form.publisher}
                onChange={onChange}
                className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
              />
            </div>
          </div>

          {/* Language + Tags */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-[#7A071A]">Language</label>
              <input
                name="language"
                value={form.language}
                onChange={onChange}
                className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
              />
            </div>
            <div>
              <label className="block text-sm text-[#7A071A]">
                Tags (comma separated)
              </label>
              <input
                name="tags"
                value={form.tags}
                onChange={onChange}
                className="w-full p-3 rounded bg-transparent border border-white/10 text-[#7A071A]"
                placeholder="e.g. Classic, Mystery"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="btn-glow w-full bg-gradient-to-r from-[#7A071A] to-[#ef5b61] text-white font-semibold py-3 rounded-lg hover:scale-[1.02] transition-all"
            >
              Add Book to Library
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
