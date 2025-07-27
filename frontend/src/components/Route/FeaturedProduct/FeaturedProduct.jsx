import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { server } from "../../../server";
//import Pagination from "../Pagination";

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



const FeaturedProduct = () => {

 const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const [productsPerPage] = useState(10);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        // Updated fetch request to use your 'server' variable
        const res = await fetch(
          `${server}/product/get-all-products?page=${currentPage}&limit=${productsPerPage}`
        );
        const data = await res.json();

        if (data.success) {
          setProducts(data.products);
          setTotalProducts(data.totalProducts);
        }
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [currentPage, productsPerPage]); // Dependency array is now correct

  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products</h1>
        </div>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
              {products && products.length > 0 ? (
                products.map((i, index) => <ProductCard data={i} key={index} />)
              ) : (
                <p className="text-center col-span-full">No products found.</p>
              )}
            </div>
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={totalProducts}
              currentPage={currentPage}
              paginate={setCurrentPage}
            />
          </>
        )}
      </div>
    </div>
  );

  {/*
  
const {allProducts} = useSelector((state) => state.products);
   
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          <h1>Featured Products</h1>
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {
            allProducts && allProducts.length !== 0 &&(
              <>
               {allProducts && allProducts.map((i, index) => <ProductCard data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  ); */}
};

export default FeaturedProduct;
