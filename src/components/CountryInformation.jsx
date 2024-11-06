import React, { useState, useEffect, useContext } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import data from "../../public/originalData.json";
import { countryContext } from "../context/context";

const CountryInformation = () => {
  const value = useContext(countryContext);
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
      {/* mx-[4.5rem] my-[3rem] flex flex-col gap-[3rem] */}
      {/* bg-[#202c37] text-white */}
      <div
        className={
          value.themeToggle === "off"
            ?  "new-sm-4:p-[1rem] new-sm-1:p-[2rem] new-xl:px-[4.5rem] new-xl:py-[3rem] flex flex-col gap-[3rem]"
            :  "new-sm-4:p-[1rem] new-sm-1:p-[2rem] new-xl:px-[4.5rem] new-xl:py-[3rem] flex flex-col gap-[3rem] bg-[#202c37] text-white"
        }
        style={{ fontFamily: "Nunito Sans" }}
      >
        {/* Back button */}
        <Link
          to="/"
          className={
            value.themeToggle === "off"
              ? "mx-[0.5rem] my-[0.5rem] w-[130px] rounded-[5px] px-[1.5rem] py-[0.5rem] shadow-back-button"
              : "mx-[0.5rem] my-[0.5rem] w-[130px] rounded-[5px] px-[1.5rem] py-[0.5rem] bg-[#2b3945]"
          }
          onClick={handleBackButton}
        >
          <div className="flex gap-[10px]">
            <div
              className={
                value.themeToggle === "off" ? "w-[25px] h-[25px]" : "hidden"
              }
            >
              <img
                className="w-[100%] h-[100%]"
                src="./assets/back-arrow.svg"
                alt="back"
              />
            </div>

            <div
              className={
                value.themeToggle === "off" ? "hidden" : "w-[25px] h-[25px]"
              }
            >
              <img
                className="w-[100%] h-[100%]"
                src="./assets/back-arrowDark.svg"
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
            // new-sm-2:w-[90vw]
            <div className="flex new-sm-1:items-center new-sm-4:flex-col new-lg:flex-row new-sm-1:gap-0 new-xl:gap-[10rem]  new-sm-3:w-[300px] new-sm-2:w-[350px] new-sm-2-5:w-[450px] new-sm-1:w-auto new-lg:w-[90vw] new-xl:w-auto new-sm-2:m-auto new-lg:m-0 new-xl:m-auto new-sm-3:m-auto" key={item.name}>

              {/* Country Flag */}
              <div className="new-sm-3:w-[300px] new-sm-3:h-[200px] new-sm-2:w-[350px] new-sm-2:h-[280px] new-sm-1:w-[600px] new-sm-1:h-[400px] new-sm-2-5:w-[500px] new-lg:w-[600px] new-lg:h-[350px] new-xl:h-auto new-xl:w-[500px]">
                <img
                  className="w-[100%] h-[100%] new-sm-3:object-cover new-xl:object-cover"
                  src={item.flags.svg}
                  alt="country Falg"
                />
              </div>

              {/* Country Information */}
              <div className="new-sm-3:w-[300px] new-sm-2:w-[600px] flex flex-col justify-start gap-[2rem] py-[3rem] new-lg:ml-[5em] new-xl:ml-0 ">

                <div className="w-max h-[43px]">
                  <p className="h-[100%] font-bold new-sm-3:text-2xl new-sm-2:text-3xl">{item.name}</p>
                </div>

                <div className="new-sm-3:w-[300px] new-sm-2:w-max new-sm-2-5:w-auto flex flex-col gap-[4rem]">

                  <div className=" flex new-sm-3:w-max new-sm-2-5:w-[445px] new-sm-1:w-auto new-sm-4:flex-col new-sm-4:gap-[3rem] new-sm-2:gap-[2rem] new-sm-1:gap-0 new-lg:gap-[2rem] new-sm-2-5:flex-row justify-between">

                    {/* Left Info */}
                    <div className="flex new-sm-3:w-max new-sm-2-5:w-auto flex-col gap-[5px]">
                      <div
                        className={
                          value.themeToggle === "off"
                            ? "text-[#858585] "
                            : "text-gray-400 "
                        }
                      >
                        <span
                          className={
                            value.themeToggle === "off"
                              ? "text-black font-semibold"
                              : "text-white font-semibold"
                          }
                        >
                          Native Name:
                        </span>{" "}
                        {item.nativeName}
                      </div>
                      <div
                        className={
                          value.themeToggle === "off"
                            ? "text-[#858585]"
                            : "text-gray-400"
                        }
                      >
                        <span
                          className={
                            value.themeToggle === "off"
                              ? "text-black font-semibold"
                              : "text-white font-semibold"
                          }
                        >
                          Population:
                        </span>{" "}
                        {item.population.toLocaleString()}
                      </div>
                      <div
                        className={
                          value.themeToggle === "off"
                            ? "text-[#858585]"
                            : "text-gray-400"
                        }
                      >
                        <span
                          className={
                            value.themeToggle === "off"
                              ? "text-black font-semibold"
                              : "text-white font-semibold"
                          }
                        >
                          Region:
                        </span>{" "}
                        {item.region}
                      </div>
                      <div
                        className={
                          value.themeToggle === "off"
                            ? "text-[#858585]"
                            : "text-gray-400"
                        }
                      >
                        <span
                          className={
                            value.themeToggle === "off"
                              ? "text-black font-semibold"
                              : "text-white font-semibold"
                          }
                        >
                          Sub Region:
                        </span>{" "}
                        {item.subregion}
                      </div>
                      <div
                        className={
                          value.themeToggle === "off"
                            ? "text-[#858585]"
                            : "text-gray-400"
                        }
                      >
                        <span
                          className={
                            value.themeToggle === "off"
                              ? "text-black font-semibold"
                              : "text-white font-semibold"
                          }
                        >
                          Capital:
                        </span>{" "}
                        {item.capital}
                      </div>
                    </div>

                    {/* Right Info */}
                    <div className="flex new-sm-3:w-max new-sm-2-5:w-auto flex-col gap-[5px]">
                      <div
                        className={
                          value.themeToggle === "off"
                            ? "text-[#858585]"
                            : "text-gray-400"
                        }
                      >
                        <span
                          className={
                            value.themeToggle === "off"
                              ? "text-black font-semibold"
                              : "text-white font-semibold"
                          }
                        >
                          Top Level Domain
                        </span>{" "}
                        {item.topLevelDomain}
                      </div>
                      <div
                        className={
                          value.themeToggle === "off"
                            ? "text-[#858585]"
                            : "text-gray-400"
                        }
                      >
                        <span
                          className={
                            value.themeToggle === "off"
                              ? "text-black font-semibold"
                              : "text-white font-semibold"
                          }
                        >
                          Currencies:
                        </span>{" "}
                        {item.currencies[0].code}
                      </div>
                      <div
                        className={
                          value.themeToggle === "off"
                            ? "text-[#858585]"
                            : "text-gray-400"
                        }
                      >
                        <span
                          className={
                            value.themeToggle === "off"
                              ? "text-black font-semibold"
                              : "text-white font-semibold"
                          }
                        >
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
                  

                  {/* Borders start from here */}
                  <div className="new-sm-3:w-[300px] new-sm-2:w-max new-sm-2-5:w-auto flex new-sm-4:flex-col new-sm-1:flex-row gap-[10px]">
                    <div className="flex items-center">
                      <p className="font-semibold">Border Countries:</p>
                    </div>

                    <div className="flex flex-wrap gap-[10px] new-sm-3:w-[300px]  new-sm-2:w-[400px] text-[12px] p-[10px]">
                      {countryFullName.length > 0 ? (
                        countryFullName.map((item, index) => {
                          return (
                            <p
                              className={
                                value.themeToggle === "off"
                                  ? "text-[#858585] font-semibold flex items-center justify-center text-center w-[100px] h-[25px] shadow-back-button border-[2px] rounded-sm"
                                  : "text-gray-400 font-semibold flex items-center justify-center text-center w-[100px] h-[25px]  rounded-sm bg-[#2b3945]"
                              }
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
