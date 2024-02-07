import React from "react";
import NavBar from "./Compnents/NavBar";
import Hero from "./Compnents/Hero";
import Analytcs from "./Compnents/Analytcs";  
import NewsLetter from "./Compnents/NewsLetter";
import Cards from "./Compnents/Cards";
import Footer from "./Compnents/Footer";

function App() {
  return (
    <div>     
      <NavBar />
      <Hero />
      <Analytcs />
      <NewsLetter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
