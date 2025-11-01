# LIBRARY
online library 
 # 📚 LibraryVault — Online Library Management System

**LibraryVault** is a React + Redux based online library web application that allows users to browse, add, and explore books interactively.  
It features dark/light theme toggling, responsive UI with Tailwind CSS, and data management using Redux Toolkit.

---

## 🚀 Features

### 🏠 Home / Landing Page
- A welcoming hero section with a warm burgundy-themed design.
- Background image with overlay for elegant appearance.
- Displays total **Books**, **Categories**, and **Average Ratings**.
- Added **“Book Categories” section** listing Fiction, Non-Fiction, Sci-Fi, Mystery, Fantasy, Romance, etc.

### 📖 Browse Books Page
- Displays all books added in the library.
- Dynamically updates through Redux store.
- Supports category-based browsing.

### ➕ Add Book Page
- Fully functional form to add new books to the library.
- Managed using **Redux Toolkit** (`booksSlice`).
- Implements **form validation** for required fields and valid data types.
- Redirects to the “Browse Books” page after successful submission.
- The new book appears **at the beginning** of the list.

### 🌗 Dark / Light Mode
- Implemented a **theme toggle button** to switch between light and dark mode.
- Smooth transition across all pages using Tailwind’s `dark:` classes.

### ❌ 404 Page (Page Not Found)
- Handles undefined routes gracefully.
- Displays the **invalid URL** to the user.
- Provides a button to return to the **Home page**.
- Does **not include Header or Footer**, as per assignment requirements.

---

## 🧩 Tech Stack

| Technology | Purpose |
|-------------|----------|
| **React.js (Vite)** | Component-based front-end framework |
| **Redux Toolkit** | State management for book list |
| **React Router DOM** | Client-side routing for pages |
| **Tailwind CSS** | Modern and responsive styling |
| **Vite** | Fast build and development environment |

---

## ⚙️ Installation & Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Palaklulla08/LIBRARY.git
   
