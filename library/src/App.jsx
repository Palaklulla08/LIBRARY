
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Browse from "./pages/Browse";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

function AppContent() {
  const location = useLocation();

  // Hide Header & Footer for 404 route
  const isNotFoundPage =
    location.pathname === "/404" ||
    (!["/", "/books", "/book", "/add"].some((p) =>
      location.pathname.startsWith(p)
    ) &&
      location.pathname !== "/");

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-[#0b0706] transition-colors duration-300">
      {!isNotFoundPage && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Browse />} />
          <Route path="/books/:category" element={<Browse />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />

          {/* 404 Page */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isNotFoundPage && <Footer />}
    </div>
  );
}

export default function App() {
  return <AppContent />;
}
