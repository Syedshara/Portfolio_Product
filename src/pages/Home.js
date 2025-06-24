import React from "react";
import Clients from "../components/Clients";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Intro from "../components/Intro";
import Products from "../components/Product";
import Services from "../components/Services";

const Home = () => {
  return (
    <div className="bg-gray-100 p-0 m-0">
      <Main />
      <Intro />
      <Services />
      <Products />
      <Clients />
      <Cta />
      <Footer />
    </div>
  );
};

export default Home;
