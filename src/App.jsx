import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { countryContext } from "./context/context";

function App() {

  return (
    <>
      <div className="parentContainer w-[100vw] h-[100vh]">
        <Navbar />
        <main className="w-[100%] min-h-[89.9%] h-max bg-[#fafafa] ">
          <HeroSection />
        </main>
      </div>
    </>
  );
}
export default App;