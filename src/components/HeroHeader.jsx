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

  const handleChange=(e)=>{
    console.log("Search Country:",e.currentTarget.value)
    value.setsearchCountry(e.target.value)
  }

  return (
    <div className="flex new-sm-4:flex-col  new-sm:justify-between new-sm-3:items-start new-sm-2:items-start new-sm:flex-row  new-lg:mx-[1rem] new-lg:my-[0.5rem] new-xl:mx-[3rem] new-xl:my-[2rem]">
      {/* Search Content */} 
      <div
        className={
          value.themeToggle === "off"
            ? "flex justify-center items-center heroSectionHeader new-sm-4:w-[180px] new-sm-3:w-[280px] new-sm-2:w-[350px]  new-sm:w-[290px] new-md:w-[320px] new-lg:w-[350px] bg-white new-sm-4:m-[1rem]  new-sm-3:m-[1rem] new-sm:mx-[2rem] new-sm:my-[1rem] shadow-new-boxshawod new-sm:px-[1rem] new-sm:py-[0.5rem]  new-lg:p-[0.8rem] rounded-[5px] new-sm-4:px-[0.5rem] new-sm-4:py-0 new-sm-3:p-0"

            // bg-[#2b3945]
            : "flex justify-center items-center heroSectionHeader new-sm-4:w-[180px] new-sm-3:w-[280px] new-sm-2:w-[350px]  new-sm:w-[290px] new-md:w-[320px] new-lg:w-[350px] new-sm-4:m-[1rem]  new-sm-3:m-[1rem] new-sm:mx-[2rem] new-sm:my-[1rem] shadow-new-boxshawod new-sm:px-[1rem] new-sm:py-[0.5rem]  new-lg:p-[0.8rem] rounded-[5px] new-sm-4:px-[0.5rem] new-sm-4:py-0 new-sm-3:p-0 bg-[#2b3945]"
        }
      >
        {/* Search Image and input */}
        <div className="flex justify-between items-center gap-[20px] w-[100%] new-sm-3:px-[1.5rem]  new-sm-3:py-[0.5rem] new-sm-2:py-[1rem] new-sm:py-0 ">
          <div
            className={
              value.themeToggle === "off"
                ? "new-sm-4:w-[50px] new-sm-4:h-[50px] new-sm-3:w-[40px] new-sm-3:h-[40px] new-lg:w-[20px] new-lg:h-[20px] new-xl:w-[30px] new-xl:h-[30px] flex justify-center items-center new-md:ml-0"
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
                : "new-sm-4:w-[50px] new-sm-4:h-[50px] new-sm-3:w-[40px] new-sm-3:h-[40px] new-lg:w-[20px] new-lg:h-[20px] new-xl:w-[30px] new-xl:h-[30px] flex justify-center items-center new-md:ml-0"
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
                  ? "outline-none w-[400px] new-sm-4:text-[12px] new-sm-3:text-[15px] new-lg:text-sm"
                  : "outline-none w-[400px] new-sm-4:text-[12px] new-sm:text-[15px] new-lg:text-sm bg-[#2b3945] text-white placeholder:text-white"
              }
              type="text"
              id="countryname"
              placeholder="Search for a country..."
              style={{ fontFamily: "Nunito Sans" }}
              value={value.searchCountry}
              onChange={(e) => value.setsearchCountry(e.target.value)}
              // onChange={handleChange}
            />
          </form>
        </div>
      </div>

      {/* Filter Content */}
      <div className="new-sm-3:flex  new-sm-3:items-center  new-sm-3:w-[300px]  new-sm-2:w-[380px] new-sm:w-max">
        <div
          className={
            value.themeToggle === "off"
              ? "new-sm-4:w-[150px] new-sm-3:w-[220px] new-sm:w-[200px] new-sm-4:mx-[1.2rem] new-sm-3:mx-[0.8rem] new-sm-2:mx-[17px] new-sm:mx-[2rem] new-xl:mx-[2rem] my-[1rem] cursor-pointer new-sm-4:p-[0.8rem] new-sm-2:p-[1rem] flex justify-between items-center rounded-[5px] shadow-new-boxshawod bg-white" 

              // bg-[#2b3945]
              : "new-sm-4:w-[150px] new-sm-3:w-[220px] new-sm:w-[200px] new-sm-4:mx-[1.2rem] new-sm-3:mx-[0.8rem] new-sm-2:mx-[17px] new-sm:mx-[2rem] new-xl:mx-[2rem] my-[1rem] cursor-pointer new-sm-4:p-[0.8rem] new-sm-2:p-[1rem] flex justify-between items-center rounded-[5px] shadow-new-boxshawod bg-[#2b3945] text-white"
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
