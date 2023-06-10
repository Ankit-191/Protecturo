import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Standed from "./components/Standed";
import Instantapp from "./components/Instantapp";
import Ourproducts from "./components/Ourproducts";
import Protecturo from "./components/Protecturo";
import Features from "./components/Features";
import Stayconnect from "./components/Stayconnect";
import Howworks from "./components/Howworks";
import Faqs from "./components/Faqs";
import Global from "./components/Global";
import Footer from "./components/Footer";
import Topbtn from "./components/Topbtn";
import Preloder from "./components/Preloder";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="overflow-hidden">
      <Preloder />
      <Hero />
      <Benefits />
      <Standed />
      <Instantapp />
      <Ourproducts />
      <Protecturo />
      <Howworks />
      <Features />
      <Stayconnect />
      <Faqs />
      <Global />
      <Footer />
      <Topbtn />
    </div>
  );
}

export default App;
