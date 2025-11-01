// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// export default function NotFound() {
//   const loc = useLocation();
//   return (
//     <div className="container-lg mx-auto py-24 text-center">
//       <h2 className="text-3xl font-display text-white mb-4">
//         404 — Page Not Found
//       </h2>
//       <p className="text-[#7A071A]-300 mb-6">
//         No route found for{" "}
//         <code className="px-2 py-1 bg-black/20 rounded">{loc.pathname}</code>
//       </p>
//       <Link to="/" className="btn-primary">
//         Go Home
//       </Link>
//     </div>
//   );
// }


// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';

// export default function NotFound() {
//   const location = useLocation();

//   return (
//     <div className="min-h-screen flex flex-col justify-center items-center bg-[#fff1e6] dark:bg-[#0f0f0f] text-center px-6">
//       <h1 className="text-8xl font-bold text-[#7A071A] mb-4">404</h1>

//       <h2 className="text-3xl font-semibold text-[#7A071A] mb-2">
//         Page Not Found
//       </h2>

//       <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
//         The requested page{' '}
//         <span className="font-semibold text-[#7A071A]">
//           {location.pathname}
//         </span>{' '}
//         does not exist.
//       </p>

//       <Link
//         to="/"
//         className="bg-[#7A071A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5a0015] transition-all"
//       >
//         Go Back to Home
//       </Link>
//     </div>
//   );
// }


import React from "react";
import { useLocation, Link } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#fff1e6] dark:bg-[#0f0f0f] text-center px-6">
      <h1 className="text-8xl font-bold text-[#7A071A] mb-4">404</h1>

      <h2 className="text-3xl font-semibold text-[#7A071A] mb-2">
        Page Not Found
      </h2>

      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        The requested page{" "}
        <span className="font-semibold text-[#7A071A]">
          {location.pathname}
        </span>{" "}
        does not exist.
      </p>

      <Link
        to="/"
        className="bg-[#7A071A] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5a0015] transition-all"
      >
        Go Back to Home
      </Link>
    </div>
  );
}
