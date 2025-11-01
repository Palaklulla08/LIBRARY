import React, { useState, useEffect } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
const KEY = "lv_theme";
export default function ThemeToggle() {
  const [t, setT] = useState(() => {
    try {
      return localStorage.getItem(KEY) || "light";
    } catch (e) {
      return "light";
    }
  });
  useEffect(() => {
    try {
      localStorage.setItem(KEY, t);
      if (t === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } catch (e) {}
  }, [t]);
  return (
    <button
      onClick={() => setT((x) => (x === "dark" ? "light" : "dark"))}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-[#7A071A] dark:text-[#7A071A]"
    >
      {t === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}
