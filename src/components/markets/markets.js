import React from "react";
import Marketlist from "../markets/marketslist";
import Footer from "../homepage/footer";
import Header from "../homepage/header";

const Markets = () => {
  return (
    <div className="bg-gray-300">
      <Header />
      <Marketlist />
      <Footer />
    </div>
  );
};
export default Markets;
