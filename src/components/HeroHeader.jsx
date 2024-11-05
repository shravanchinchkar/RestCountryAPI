import React from "react";
import { useContext } from "react";
import { countryContext } from "../context/context";
import { useCountry } from "../lib/api";
import { useQueryClient } from "@tanstack/react-query";

const HeroHeader = () => {
  const value = useContext(countryContext);

  const displayDropDown = () => {
    if (value.displayDropDown === "none") {
      value.setdisplayDropDown("block");
    } else {
      value.setdisplayDropDown("none");
    }
  };

  return (
    <div className="flex new-sm-2:flex-col new-sm-2:items-center new-sm:flex-row justify-between new-lg:mx-[1rem] new-lg:my-[0.5rem] new-xl:mx-[3rem] new-xl:my-[2rem]">
      {/* Search Content */}
      <div
        className={
          value.themeToggle === "off"
            ? "flex justify-center items-center heroSectionHeader new-sm-2:w-[370px]  new-sm:w-[250px] new-md:w-[300px] new-lg:w-[450px] bg-white mx-[2rem] my-[1rem] shadow-new-boxshawod new-md:p-[0.2rem] new-lg:p-[1rem] rounded-[5px] "
            // bg-[#2b3945]
            : "flex justify-center items-center heroSectionHeader new-sm-2:w-[370px]  new-sm:w-[250px] new-md:w-[300px] new-lg:w-[450px] bg-[#2b3945] mx-[2rem] my-[1rem] shadow-new-boxshawod new-md:p-[0.2rem] new-lg:p-[1rem] rounded-[5px] "
        }
      >
        {/* Search Image and input */}
        <div className="flex justify-between items-center gap-[20px] w-[100%] new-sm-2:px-[1.5rem] new-sm-2:py-[1rem] new-sm:py-0  new-sm:px-[0.5rem] ">
          <div
            className={
              value.themeToggle === "off"
                ? "new-sm:w-[40px] new-sm:h-[40px] new-md:w-[30px] new-md:h-[30px] new-lg:w-[20px]  new-lg:h-[20px] flex justify-center items-center new-sm:ml-[1rem] new-md:ml-0"
                : "hidden"
            }
          >
            <img
              className="w-[100%] h-[100%]"
              src="./assets/search.svg"
              alt="search"
            />
          </div>

          <div
            className={
              value.themeToggle === "off"
                ? "hidden"
                : "new-sm:w-[40px] new-sm:h-[40px] new-md:w-[30px] new-md:h-[30px] new-lg:w-[20px]  new-lg:h-[20px] flex justify-center items-center new-sm:ml-[1rem] new-md:ml-0"
            }
          >
            <img
              className="w-[100%] h-[100%]"
              src="./assets/searchDark.svg"
              alt="search"
            />
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <input
              className={
                value.themeToggle === "off"
                  ? "outline-none w-[400px] new-md:text-[15px] new-lg:text-sm "
                  : "outline-none w-[400px] new-md:text-[15pxnew-md:w-] 5ew-lg:text-sm bg-[#2b3945] text-white placeholder:text-white"
              }
              type="text"
              name=""
              id="countryname"
              placeholder="Search for a country..."
              style={{ fontFamily: "Nunito Sans" }}
              value={value.searchCountry}
              onChange={(e) => value.setsearchCountry(e.target.value)}
            />
          </form>
        </div>
      </div>

      {/* Filter Content */}
      <div className="new-sm-2:flex new-sm-2:justify-start new-sm-2:items-center  new-sm-2:w-[380px] new-sm:w-max">
        <div
          className={
            value.themeToggle === "off"
              ? "new-sm-2:w-[220px] new-sm:w-[200px] new-sm-2:mx-[7px] new-sm:mx-[2rem] new-xl:mx-[2rem] my-[1rem] cursor-pointer p-[1rem] flex justify-between items-center rounded-[5px] shadow-new-boxshawod bg-white"

              // bg-[#2b3945]
              : "new-sm-2:w-[220px] new-sm:w-[200px] new-sm-2:mx-[7px] new-sm:mx-[2rem] new-xl:mx-[2rem] my-[1rem] cursor-pointer p-[1rem] flex justify-between items-center rounded-[5px] shadow-new-boxshawod bg-[#2b3945] text-white"
          }
          onClick={displayDropDown}
        >
          <div className="">
            <p
              className="text-sm rounded-lg"
              style={{ fontFamily: "Nunito Sans" }}
            >
              {value.continentName
                ? value.continentName === "default"
                  ? "Filter by region"
                  : value.continentName
                : "Filter by region"}
            </p>
          </div>

          <div className={value.themeToggle === "off" ? "block" : "hidden"}>
            <img src="./assets/arrow.svg" alt="arrow" />
          </div>

          <div className={value.themeToggle === "off" ? "hidden" : "block"}>
            <img src="./assets/arrowDark.svg" alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
