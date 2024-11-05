import React from "react";
import { useContext } from "react";
import { countryContext } from "../context/context";
import { useClickAway } from "@uidotdev/usehooks";

const DropDown = () => {
  const value = useContext(countryContext);
  const handleContinent = (e) => {
    let id = e.currentTarget.id;
    value.setcontinentName(id);
    value.setdisplayDropDown("none");
  };

  const ref = useClickAway(() => {
    value.setdisplayDropDown("none");
  });
  return (
    <div
      className={
        value.themeToggle === "off"
          ? "absolute new-sm-2:w-[220px] new-sm:w-[200px] z-10 new-sm-2:top-[170px] new-sm-2:left-[25px] new-sm:top-[80px] new-sm:right-[32px]  new-lg:top-[90px] new-lg:right-[48px] new-xl:top-[110px] new-xl:right-[80px] rounded-[5px] bg-white px-[1rem] py-[1rem] shadow-new-boxshawod"

          // bg-[#2b3945]

          : "absolute new-sm-2:w-[220px] new-sm:w-[200px] z-10 new-sm-2:top-[170px] new-sm-2:left-[25px] new-sm:top-[80px] new-sm:right-[32px]  new-lg:top-[90px] new-lg:right-[48px] new-xl:top-[110px] new-xl:right-[80px] rounded-[5px] bg-[#2b3945] px-[1rem] py-[1rem] shadow-new-boxshawod text-white"
      }
      style={{ fontFamily: "Nunito Sans", display: value.displayDropDown }}
      ref={ref}
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
