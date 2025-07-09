import React, { useState } from "react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
import { getAllAgents } from "../redux/actions/sellers";
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

  
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Agents!</h2>
      
    </div>
  );
};
   

export default AgentsPage;
