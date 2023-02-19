
import { useState } from "react";
import AccessSection from "./Components/AccessSection";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import Modal from "./Components/Modal";


function App() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="py-8">
      <Header />
      <HeroSection />
      <AccessSection />
      <Footer />
     {/* { showModal &&  <Modal showModal={showModal} setShowModal={setShowModal}/> } */}
    </div>
  );
}

export default App;
