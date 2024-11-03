import React, { useState, useContext, useEffect } from "react";
import data from "../../public/landingPageData.json";
import originalData from "../../public/originalData.json";
import { Link } from "react-router-dom";
import { countryContext } from "../context/context";

const HeroMain = () => {
  const value = useContext(countryContext);
  const [countryData, setcountryData] = useState(data);

  console.log("Initial Country Name:", value.countryName);
  const displayCountryInformation = (e) => {
    let id = e.currentTarget.id;
    console.log("Targeted Country is:", id);
    value.setcountryName(id);
  };

  console.log("Updated Country Name:", value.countryName);

  useEffect(() => {
    if (value.continentName === "" || value.continentName === "default") {
      setcountryData(data);
    } else {
      const continentData = originalData.filter((item) => {
        return item.region === value.continentName;
      });
      setcountryData(continentData);
    }
  }, [value.continentName]);

  useEffect(() => {
    if (value.searchCountry === "") {
      setcountryData(data);
    } else {
      let searchCountryName = value.searchCountry;
      const country = originalData.filter((item) => {
        return (
          item.name ===
          value.searchCountry.charAt(0).toUpperCase() +
            value.searchCountry.slice(1).toLowerCase()
        );
      });
      setcountryData(country);
    }
  }, [value.searchCountry]);

  const handleBackButton=()=>{
    
  }

  return (
    <>
    {/* <div className="flex mx-[4.5rem] border-[2px] w-[150px]">
      <div>
        <img src="./assets/back-arrow.svg" alt="back" />
      </div>
      <button>back</button>
    </div> */}
      <div className="grid gap-y-[5rem] grid-cols-4  mx-[4.5rem] my-[2rem] px-[0.5rem] py-[1rem]">
        {countryData.map((item, index) => {
          let justifyClass = "justify-self-start";
          if (index % 4 === 1) {
            justifyClass = "justify-self-center";
          } else if (index % 4 === 2) {
            justifyClass = "justify-self-center";
          } else if (index % 4 === 3) {
            justifyClass = "justify-self-end";
          }
          return (
            <Link
              to="/information"
              className={`shadow-new-boxshawod ${justifyClass} cursor-pointer rounded-lg`}
              key={item.name}
            >
              <div
                className="w-[250px] h-[330px]"
                style={{ fontFamily: "Nunito Sans" }}
                id={item.name}
                onClick={displayCountryInformation}
              >
                <div className="w-[250px] h-[165px]">
                  <img
                    className="w-[100%] h-[100%]"
                    src={item.flags.png}
                    alt="Country_Flag"
                  />
                </div>

                <div className="p-[1rem] flex flex-col gap-[1rem]">
                  <div>
                    <p className="font-bold ">{item.name}</p>
                  </div>

                  <div>
                    <p className="text-sm text-[#858585]">
                      <span className="font-bold text-black">Population:</span>{" "}
                      {item.population.toLocaleString()}
                    </p>
                    <p className="text-sm text-[#858585]">
                      <span className="font-bold text-black">Region:</span>{" "}
                      {item.region}
                    </p>
                    <p className="text-sm text-[#858585]">
                      <span className="font-bold text-black">Capital:</span>{" "}
                      {item.capital}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default HeroMain;
