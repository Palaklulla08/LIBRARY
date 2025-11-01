import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
export default function Header() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("lv_theme") || "light";
    } catch (e) {
      return "light";
    }
  });
  useEffect(() => {
    try {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (e) {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  const Nav = ({ to, children }) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `px-4 py-2 rounded-md text-sm ${
          isActive
            ? "bg-brand-deep text-white"
            : "text-[7A071A] dark:text-[7A071A]"
        }`
      }
    >
      {children}
    </NavLink>
  );
  return (
    <header className="bg-white dark:bg-[#0b0706] sticky top-0 z-40 border-b border-gray-200 dark:border-white/5">
      <div className="container-lg mx-auto flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl" style={{ color: "var(--accent)" }}>
            📚
          </div>
          <div>
            <div className="text-lg font-display text-brand-deep dark:text-brand-beige">
              LibraryVault
            </div>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <Nav to="/">Home</Nav>
          <Nav to="/books">Browse Books</Nav>
          <Nav to="/add">+ Add Book</Nav>
          <button
            onClick={toggle}
            className="ml-3 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#7A071A] dark:text-[#FEFCE8]"
          >
            <span className="sr-only">toggle theme</span>
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </nav>
      </div>
    </header>
  );
}
