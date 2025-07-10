import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { server } from "../../server";
import styles from "../../styles/styles";
import Loader from "../Layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsShop } from "../../redux/actions/product";

const ShopInfo = ({ isOwner, data: shopData }) => {
  const [data, setData] = useState(shopData || {});
  const {products} = useSelector((state) => state.products);
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    // If shopData is passed as prop, use it directly
    if (shopData && shopData._id) {
      setData(shopData);
      dispatch(getAllProductsShop(shopData._id));
    } 
    // Otherwise, fetch from URL params (for when component is used standalone)
    else if (id) {
      setIsLoading(true);
      dispatch(getAllProductsShop(id));
      axios.get(`${server}/shop/get-shop-info/${id}`).then((res) => {
        setData(res.data.shop);
        setIsLoading(false);
      }).catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
    }
  }, [shopData, id]);

  const logoutHandler = async () => {
    axios.get(`${server}/shop/logout`, {
      withCredentials: true,
    });
    window.location.reload();
  };

  // Filter products for this specific shop
  const shopProducts = products && products.filter(product => product.shopId === data._id);

  const totalReviewsLength =
    shopProducts &&
    shopProducts.reduce((acc, product) => acc + product.reviews.length, 0);

  const totalRatings = shopProducts && shopProducts.reduce((acc, product) => acc + product.reviews.reduce((sum, review) => sum + review.rating, 0), 0);

  const averageRating = totalRatings / totalReviewsLength || 0;

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <div className="w-full bg-white rounded-lg shadow-sm cursor-pointer py-5">
            <div className="w-full flex item-center justify-center">
              <img
                src={`${data.avatar?.url}`}
                alt=""
                className="w-[150px] h-[150px] object-cover rounded-full"
              />
            </div>
            <h3 className="text-center py-2 text-[20px]">{data.name}</h3>
            <p className="text-[16px] text-[#000000a6] p-[10px] text-center">
              {data.description}
            </p>
          </div>
        
          {isOwner && (
            <div className="py-3 px-4">
              <Link to="/settings">
                <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}>
                  <span className="text-white">Edit Account</span>
                </div>
              </Link>
              <div className={`${styles.button} !w-full !h-[42px] !rounded-[5px]`}
                onClick={logoutHandler}
              >
                <span className="text-white">Log Out</span>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ShopInfo;
