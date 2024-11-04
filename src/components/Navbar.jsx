import React, { useContext } from "react";
import { countryContext } from "../context/context";

const Navbar = () => {
  const value = useContext(countryContext);
  const handleTheme = () => {
    if (value.themeToggle === "off") {
      console.log("heeyy");
      value.setthemeToggle("on");
    } else {
      value.setthemeToggle("off");
    }
    console.log("helllo", value.themeToggle);
  };
  return (
    <nav
      className={
        value.themeToggle === "off"
          ? "navbar pr-[1rem] pl-[1rem] pt-[1.2rem] pb-[1.2rem] flex justify-between outline outline-offset-[1px] outline-[#f1ecec]"
          : "navbar pr-[1rem] pl-[1rem] pt-[1.2rem] pb-[1.2rem] flex justify-between text-white bg-[#2b3945]"
      }
    >
      <div
        className="ml-[4rem] font-extrabold text-2xl "
        style={{ fontFamily: "Nunito Sans" }}
      >
        Where in the world?
      </div>

      <div
        className="mr-[4rem] flex w-[120px] justify-between items-center cursor-pointer"
        onClick={handleTheme}
      >
        {/*Light Mode and Dark Mode image */}
        <div className={value.themeToggle==="off"?"w-[25px] h-[25px]":"hidden"}>
          <img
            className="w-[100%] h-[100%]"
            src="./assets/moon.svg"
            alt="moon"
          />
        </div>

        <div
          className={
            value.themeToggle === "off" ? "hidden" : "w-[25px] h-[25px]"
          }
        >
          <img className="w-[100%] h-[100%]" src="./assets/sun.svg" alt="sun" />
        </div>

        <div>
          <p style={{ fontFamily: "Nunito Sans" }} className="font-semibold">
            {value.themeToggle==="off"?"Dark Mode":"Light Mode"}
          </p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
