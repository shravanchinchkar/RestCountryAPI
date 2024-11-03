import React from "react";
import { useContext } from "react";
import { countryContext } from "../context/context";

const HeroHeader = () => {
  const value = useContext(countryContext);

  const displayDropDown = () => {
    if (value.displayDropDown === "none") {
      value.setdisplayDropDown("block");
    } else {
      value.setdisplayDropDown("none");
    }
  };

  const handleSearchCountry = (e) => {
    value.setsearchCountry(e.target.value);
  };

  const handlerequiredCountry = (e) => {
    // if (e.key === "Enter") {
    //   value.setsearchCountry("");
    // }
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

          <div className="">
            <input
              className="outline-none w-[400px] text-sm"
              type="text"
              name=""
              id="countryname"
              placeholder="Search for a country..."
              style={{ fontFamily: "Nunito Sans" }}
              value={value.searchCountry}
              onChange={handleSearchCountry}
              onKeyDown={handlerequiredCountry}
            />
          </div>
        </div>
      </div>

      {/* Filter Content */}
      <div className=" w-[200px] mx-[2rem] my-[1rem]  p-[1rem] flex justify-between items-center rounded-[5px] shadow-new-boxshawod bg-white">
        <div className="">
          <p
            className="text-sm rounded-lg"
            style={{ fontFamily: "Nunito Sans" }}
          >
            Filter by Region
          </p>
        </div>

        <div className="cursor-pointer" onClick={displayDropDown}>
          <img src="./assets/arrow.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
