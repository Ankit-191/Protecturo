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
function App() {
  return (
    <>
      <Hero />
      <Benefits />
      <Standed />
      <Instantapp />
      <Ourproducts/>
      <Protecturo/>
      {/* <Howworks/> */}
      <Features/>
      <Stayconnect/>
      <Faqs/>
      <Global/>
      <Footer/>
    </>
  );
}

export default App;
