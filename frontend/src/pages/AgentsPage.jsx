import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Layout/Footer";
import Header from "../components/Layout/Header";
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
  const [activeTab, setActiveTab] = useState(0);

  
  };

  return (
    <div className={`${styles.section} my-8`}>
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Agents!</h2>
      
    </div>
  );
};
   

export default AgentsPage;
