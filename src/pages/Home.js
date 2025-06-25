import Clients from "../components/Clients";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Intro from "../components/Intro";
import Products from "../components/Product";
import Services from "../components/Services";
import ScrollTracker from "../components/ScrollTracker";

const Home = () => {
  return (
    <div className="bg-gray-100 p-0 m-0">
      <div id="main">
        <Main />
      </div>
      <div id="intro">
        <Intro />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="clients">
        <Clients />
      </div>
      <div id="cta">
        <Cta />
      </div>
      <div id="footer">
        <Footer />
      </div>
      <ScrollTracker />
    </div>
  );
};

export default Home;
