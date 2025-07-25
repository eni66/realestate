
import React, { useState, useEffect } from "react";
import styles from "../../styles/pagination-styles";

// You can place this Pagination component in the same file or import it from another file.
const Pagination = ({ productsPerPage, totalProducts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleClick = (e, number) => {
    e.preventDefault();
    paginate(number);
    window.scrollTo(0, 0); // Optional: scroll to top on page change
  };

  if (pageNumbers.length <= 1) return null; // Don't show pagination if there's only one page

  return (
    <nav className="flex justify-center my-8">
      <ul className="flex items-center space-x-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer ${
              currentPage === number
                ? "bg-red-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            <a onClick={(e) => handleClick(e, number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

