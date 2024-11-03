import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import data from "../../public/originalData.json";
import { countryContext } from "../context/context";

const CountryInformation = () => {
  const [requiredInfo, setrequiredInfo] = useState([]);

  const [countryFullName, setcountryFullName] = useState([]); //use to print the fullname of the country from its abbreviation

  const { countryName: targetInfo } = useContext(countryContext); //Name of country whose info we want to see

  const bordersSharingWith = requiredInfo.map((item) => {
    return item.borders;
  });

  const borders = bordersSharingWith[0];

  // REST Countries API:-
  // Following useEffect gets triggered when the borders array get changed
  // Its an API that gets the fullName of the country from its abbreviation passed to the function
  useEffect(() => {
    if (borders !== undefined) {
      console.log("border present");
      const getFullCountryNames = async (codes) => {
        try {
          const responses = await Promise.all(
            codes.map((code) =>
              fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            )
          );
          const countries = await Promise.all(
            responses.map((res) => res.json())
          );
          return countries.map((country) => country[0].name.common);
        } catch (error) {
          console.error("Error fetching country names:", error);
        }
      };
      getFullCountryNames(borders).then((names) => {
        setcountryFullName(names); // Update state with fetched names
      });
    } else {
      console.log("no border");
      setcountryFullName([]);
    }
  }, [borders]);

  // Following useEffect get's triggered when the value of targetInfo changes

  useEffect(() => {
    // Check if there’s data in localStorage
    const savedData = localStorage.getItem("requiredInfo");
    if (savedData) {
      setrequiredInfo(JSON.parse(savedData)); // Set requiredInfo from localStorage
    } else if (targetInfo) {
      // If no data in localStorage, filter from original data
      const selectedInformation = data.filter(
        (item) => item.name === targetInfo
      );
      setrequiredInfo(selectedInformation);
    }
  }, [targetInfo]);

  useEffect(() => {
    // Store the requiredInfo array in localStorage when it changes
    if (requiredInfo.length > 0) {
      localStorage.setItem("requiredInfo", JSON.stringify(requiredInfo));
    }
  }, [requiredInfo]);

  // Clears the local storage when the back button is pressed
  const handleBackButton = () => {
    localStorage.clear();
  };

  return (
    <>
      <Navbar />
      {/* The content div start from here */}
      <div
        className="mx-[4.5rem] my-[3rem] flex flex-col gap-[3rem]"
        style={{ fontFamily: "Nunito Sans" }}
      >
        {/* Back button */}
        <Link
          to="/"
          className="mx-[0.5rem] my-[0.5rem] w-[130px] rounded-[5px] px-[1.5rem] py-[0.5rem] shadow-back-button"
          onClick={handleBackButton}
        >
          <div className="flex gap-[10px]">
            <div className="w-[25px] h-[25px]">
              <img
                className="w-[100%] h-[100%]"
                src="./assets/back-arrow.svg"
                alt="back"
              />
            </div>

            <div>
              <p>Back</p>
            </div>
          </div>
        </Link>

        {/* Country Content div */}
        {requiredInfo.map((item) => {
          return (
            <div className="flex gap-[10rem]">
              {/* Country Flag */}
              <div className="w-[500px] h-[400px]">
                <img
                  className="w-[100%] h-[100%]"
                  src={item.flags.svg}
                  alt="country Falg"
                />
              </div>

              {/* Country Information */}
              <div className=" w-[600px] flex flex-col justify-start gap-[2rem] py-[3rem]">
                <div className="w-max h-[43px]">
                  <p className="h-[100%] font-bold text-3xl">{item.name}</p>
                </div>

                <div className="flex flex-col gap-[4rem]">
                  <div className="flex justify-between">
                    {/* Left Info */}

                    <div className="flex flex-col gap-[5px]">
                      <div className="text-[#858585]">
                        <span className="text-black font-semibold">
                          Native Name:
                        </span>{" "}
                        {item.nativeName}
                      </div>
                      <div className="text-[#858585]">
                        <span className="text-black font-semibold">
                          Population:
                        </span>{" "}
                        {item.population.toLocaleString()}
                      </div>
                      <div className="text-[#858585]">
                        <span className="text-black font-semibold">
                          Region:
                        </span>{" "}
                        {item.region}
                      </div>
                      <div className="text-[#858585]">
                        <span className="text-black font-semibold">
                          Sub Region:
                        </span>{" "}
                        {item.subregion}
                      </div>
                      <div className="text-[#858585]">
                        <span className="text-black font-semibold">
                          Capital:
                        </span>{" "}
                        {item.capital}
                      </div>
                    </div>

                    {/* Right Info */}
                    <div className="flex flex-col gap-[5px]">
                      <div className="text-[#858585]">
                        <span className="text-black font-semibold">
                          Top Level Domain
                        </span>{" "}
                        {item.topLevelDomain}
                      </div>
                      <div className="text-[#858585]">
                        <span className="text-black font-semibold">
                          Currencies:
                        </span>{" "}
                        {item.currencies[0].code}
                      </div>
                      <div className="text-[#858585]">
                        <span className="text-black font-semibold">
                          Languages:
                        </span>{" "}
                        {item.languages
                          .map((item) => {
                            return item.name;
                          })
                          .toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-[10px]">
                    <div className="flex items-center">
                      <p className="font-semibold">Border Countries:</p>
                    </div>

                    <div className="flex flex-wrap gap-[10px] w-[400px] text-[12px] p-[10px]">
                      {countryFullName.length > 0 ? (
                        countryFullName.map((item, index) => {
                          return (
                            <p
                              className="text-[#858585] font-semibold flex items-center justify-center text-center w-[100px] h-[25px] shadow-back-button border-[2px] rounded-sm"
                              key={index}
                            >
                              {item}
                            </p>
                          );
                        })
                      ) : (
                        <p className="text-[#858585] font-semibold flex items-center justify-center text-center w-[200px] h-[25px] shadow-back-button border-[2px] rounded-sm">
                          No Boundries shared
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default CountryInformation;
