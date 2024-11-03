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
    <div className="flex justify-between mx-[3rem] my-[2rem] ">
      {/* Search Content */}
      <div className="flex justify-center items-center heroSectionHeader w-[450px] bg-white mx-[2rem] my-[1rem] shadow-new-boxshawod p-[1rem] rounded-[5px]">
        {/* Search Image and input */}
        <div className="flex justify-between items-center gap-[20px] w-[100%] px-[0.5rem]">
          <div className="w-[20px] h-[20px] flex justify-center items-center">
            <img
              className="w-[100%] h-[100%]"
              src="./assets/search.svg"
              alt="search"
            />
          </div>

          <form>
            <input
              className="outline-none w-[400px] text-sm"
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
      <div
        className=" w-[200px] mx-[2rem] my-[1rem] cursor-pointer p-[1rem] flex justify-between items-center rounded-[5px] shadow-new-boxshawod bg-white"
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

        <div>
          <img src="./assets/arrow.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
