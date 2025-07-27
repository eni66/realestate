import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../../styles/styles";
import ProductCard from "../ProductCard/ProductCard";
import { server } from "../../../server";
//import Pagination from "../Pagination";

const FeaturedProduct = () => {

 {/* const [products, setProducts] = useState([]);
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
          <h1>Featured Properties</h1>
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

  */}
  
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
  );
};

export default FeaturedProduct;
