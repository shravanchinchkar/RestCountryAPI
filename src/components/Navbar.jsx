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
          ? "navbar new-sm-4:p-[0.5rem]  new-sm-3:p-[1.5rem] new-sm:px-[2.5rem] new-lg:px-[1rem] new-sm:py-[1.2rem] flex justify-between outline outline-offset-[1px] outline-[#f1ecec] border-[2px] border-red-500"
          : "navbar new-sm-3:p-[1.5rem] new-sm:px-[2.5rem]  new-lg:px-[1rem] new-sm:py-[1.2rem] flex justify-between text-white bg-[#2b3945]"
      }
    >
      <div
        className="new-lg:ml-[2rem] new-xl:ml-[4rem] font-extrabold new-lg:text-2xl new-sm-2:text-xl new-sm-3:text-sm new-sm-4:text-[10px] border-[2px]"
        style={{ fontFamily: "Nunito Sans" }}
      >
        Where in the world?
      </div>

      <div
        className="new-sm-4:gap-[5px] new-md:gap-0 new-lg:mr-[2rem] new-xl:mr-[4rem] flex new-md:w-[110px] new-lg:w-[120px] justify-between items-center cursor-pointer border-[2px]"
        onClick={handleTheme}
      >
        {/*Light Mode and Dark Mode image */}
        <div
          className={
            value.themeToggle === "off" ? "new-sm-4:w-[15px] new-sm-4:h-[15px] new-sm-3:w-[17px] new-sm-3:h-[17px] new-sm-2:w-[20px] new-sm-2:h-[20px] new-lg:w-[25px] new-lg:h-[25px]" : "hidden"
          }
        >
          <img
            className="w-[100%] h-[100%]"
            src="./assets/moon.svg"
            alt="moon"
          />
        </div>

        <div
          className={
            value.themeToggle === "off" ? "hidden" :"new-sm-4:w-[15px] new-sm-4:h-[15px] new-sm-3:w-[17px] new-sm-3:h-[17px] new-sm-2:w-[20px] new-sm-2:h-[20px] new-lg:w-[25px] new-lg:h-[25px]"
          }
        >
          <img className="w-[100%] h-[100%]" src="./assets/sun.svg" alt="sun" />
        </div>

        <div >
          <p style={{ fontFamily: "Nunito Sans" }} className="new-sm-4:text-[10px] new-sm-3:text-[12px] new-sm-2:text-[15px] new-lg:text-[17px] font-semibold">
            {value.themeToggle === "off" ? "Dark Mode" : "Light Mode"}
          </p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
