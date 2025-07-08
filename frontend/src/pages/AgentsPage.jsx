import React, { useState } from "react";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { getAllAgents } from "../../redux/actions/sellers";
import ShopInfo from "../../components/Shop/ShopInfo";
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
  const {allAgents} = useSelector((state) => state.seller);
   
  return (
    <div>
      <div className={`${styles.section}`}>
        <div className={`${styles.heading}`}>
          {/* <h1>Featured Products</h1> */}
        </div>
        <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-4 lg:gap-[25px] xl:grid-cols-5 xl:gap-[30px] mb-12 border-0">
        {
            allAgents && allAgents.length !== 0 &&(
              <>
               {allAgents && allAgents.map((i, index) => <ShopInfo data={i} key={index} />)}
              </>
            )
           }
        </div>
      </div>
    </div>
  );
};

export default AgentsPage;
