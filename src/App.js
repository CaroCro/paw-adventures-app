import React, { useState } from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";
import Booking from "./components/Booking";
import Footer from "./components/Footer";

function App() {
  const [selectedTour, setSelectedTour] = useState("");

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours setSelectedTour={setSelectedTour} />
      <Booking selectedTour={selectedTour} />
      <Footer />
    </>
  );
}

export default App;
