import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { countryContext } from "./context/context";
import { useContext } from "react";

function App() {
  const value = useContext(countryContext);

  return (
    <>
      <div className="parentContainer w-[100vw] h-[100vh]">
        <Navbar />
        <main
          className={
            value.themeToggle === "off"
              ? "w-[100%] min-h-[89.9%] h-max bg-[#fafafa]"
              : "w-[100%] min-h-[89.9%] h-max bg-[#202c37]"
          }
        >
          <HeroSection />
        </main>
      </div>
    </>
  );
}
export default App;
