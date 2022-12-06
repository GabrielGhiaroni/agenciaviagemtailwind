import React from "react";
import Booking from "./Components/Booking/Booking";
import Contato from "./Components/Contato/Contato";
import Footer from "./Components/Footer/Footer";
import Galeria from "./Components/Galeria/Galeria";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Pacotes from "./Components/Pacotes/Pacotes";
import TopBar from "./Components/TopBar/TopBar";

function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Pacotes />
      <Booking />
      <Galeria />
      <Contato />
      <Footer />
    </>
  );
}

export default App;
