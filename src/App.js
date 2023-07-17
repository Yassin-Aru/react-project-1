import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import ImageSection from "./Components/ImageSection";
import DishesSection from "./Components/DishesSection";
import SubscribeSection from "./Components/SubscribeSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
      <HeroSection />
      <ImageSection />
      <DishesSection />
      <SubscribeSection />
      <Footer />
      <div className="order-btn text-center text-light py-3">
        © Copyright 2023 by ui.desk. All right reserved.
      </div>
    </section>
    </div>
  );
}
export default App;
