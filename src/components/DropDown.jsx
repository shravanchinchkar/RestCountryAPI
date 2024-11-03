import React from "react";
import { useContext } from "react";
import { countryContext } from "../context/context";

const DropDown = () => {
  const value = useContext(countryContext);
  const handleContinent = (e) => {
    let id = e.currentTarget.id;
    value.setcontinentName(id);
    value.setdisplayDropDown("none")
  };
  return (
    <div
      className="absolute w-[200px] z-10 top-[110px] right-[80px] rounded-[5px] bg-white px-[1rem] py-[1rem] shadow-new-boxshawod"
      style={{ fontFamily: "Nunito Sans", display: value.displayDropDown }}
    >
      <ul className="flex flex-col gap-[8px]">
        <li className="cursor-pointer" id="Africa" onClick={handleContinent}>
          Africa
        </li>
        <li className="cursor-pointer" id="Americas" onClick={handleContinent}>
          Americas
        </li>
        <li className="cursor-pointer" id="Asia" onClick={handleContinent}>
          Asia
        </li>
        <li className="cursor-pointer" id="Europe" onClick={handleContinent}>
          Europe
        </li>
        <li className="cursor-pointer" id="Oceania" onClick={handleContinent}>
          Oceania
        </li>
        <li className="cursor-pointer" id="default" onClick={handleContinent}>
          Set as Default
        </li>
      </ul>
    </div>
  );
};
export default DropDown;
