// import React, { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { FiSun, FiMoon } from "react-icons/fi";
// export default function Header() {
//   const [theme, setTheme] = useState(() => {
//     try {
//       return localStorage.getItem("lv_theme") || "light";
//     } catch (e) {
//       return "light";
//     }
//   });
//   useEffect(() => {
//     try {
//       if (theme === "dark") {
//         document.documentElement.classList.add("dark");
//       } else {
//         document.documentElement.classList.remove("dark");
//       }
//     } catch (e) {}
//   }, [theme]);

//   const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
//   const Nav = ({ to, children }) => (
//     <NavLink
//       to={to}
//       className={({ isActive }) =>
//         `px-4 py-2 rounded-md text-sm ${
//           isActive
//             ? "bg-brand-deep text-white"
//             : "text-[7A071A] dark:text-[7A071A]"
//         }`
//       }
//     >
//       {children}
//     </NavLink>
//   );
//   return (
//     <header className="bg-white dark:bg-[#0b0706] sticky top-0 z-40 border-b border-gray-200 dark:border-white/5">
//       <div className="container-lg mx-auto flex items-center justify-between py-4">
//         <div className="flex items-center gap-3">
//           <div className="text-2xl" style={{ color: "var(--accent)" }}>
//             📚
//           </div>
//           <div>
//             <div className="text-lg font-display text-brand-deep dark:text-brand-beige">
//               LibraryVault
//             </div>
//           </div>
//         </div>
//         <nav className="flex items-center gap-3">
//           <Nav to="/">Home</Nav>
//           <Nav to="/books">Browse Books</Nav>
//           <Nav to="/add">+ Add Book</Nav>
//           <button
//             onClick={toggle}
//             className="ml-3 p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#7A071A] dark:text-[#FEFCE8]"
//           >
//             <span className="sr-only">toggle theme</span>
//             {theme === "dark" ? <FiSun /> : <FiMoon />}
//           </button>
//         </nav>
//       </div>
//     </header>
//   );
// }
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

export default function Header() {
  const [dark, setDark] = useState(false);

  // Sync dark mode with localStorage
  useEffect(() => {
    if (localStorage.theme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDark = () => {
    const newMode = !dark;
    setDark(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  };

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-300 font-medium text-lg ${
      isActive
        ? "text-[#7A071A] dark:text-[#ef5b61]" // active link (burgundy)
        : "text-gray-800 hover:text-[#7A071A] dark:text-gray-200 dark:hover:text-[#ef5b61]" // inactive links
    }`;

  return (
    <header className="sticky top-0 z-50 bg-[#fff1e6]/90 dark:bg-[#0f0f0f]/90 backdrop-blur-md shadow-sm border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-display font-bold text-[#7A071A] dark:text-[#ef5b61]"
        >
          LibraryVault
        </NavLink>

        {/* Navigation Links */}
        <nav className="flex items-center gap-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/books" className={navLinkClass}>
            Browse
          </NavLink>
          <NavLink to="/add" className={navLinkClass}>
            Add Book
          </NavLink>
        </nav>

        {/* Dark mode toggle */}
        <button
          onClick={toggleDark}
          className="ml-4 p-2 rounded-full border border-[#7A071A]/40 hover:bg-[#7A071A]/10 dark:border-gray-600 transition-all"
          aria-label="Toggle theme"
        >
          {dark ? (
            <FiSun className="text-[#ef5b61] text-xl" />
          ) : (
            <FiMoon className="text-[#7A071A] text-xl" />
          )}
        </button>
      </div>
    </header>
  );
}
