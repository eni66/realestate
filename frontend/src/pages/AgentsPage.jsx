import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { getAllAgents } from "../redux/actions/sellers";
import ShopInfo from "../components/Shop/ShopInfo";
import styles from "../styles/styles";


const AgentsPage = () => {
  return (
    <div>
      <Header activeHeading={4} />
      <Agents />
      <Footer />
    </div>
  );
};


const Agents = () => {
  const { sellers } = useSelector((state) => state.seller);

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Agents</h2>

       <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {
            sellers && sellers.length !== 0 &&(
              <>
               {sellers && sellers.map((i, index) => <ShopInfo data={i} key={index} />)}
              </>
            )
           }
        </div>
      
    </div>
  );
};
   

export default AgentsPage;
