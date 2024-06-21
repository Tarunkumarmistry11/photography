import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Components/About/About";
import Gallery from "./Components/Gallery/Gallery";
import Videos from "./Components/Videos/Videos";
import Presets from "./Components/Presets/Presets";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import LandingPage from "./Components/LandingPage/LandingPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/presets" element={<Presets />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
