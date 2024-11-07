import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { countryContext } from "../context/context";
import { useCountry } from "../lib/api";
import { Skeleton } from "./Skeleton";

const HeroMain = () => {
  const value = useContext(countryContext);
  const { data: countryData, isPending } = useCountry(value);

  const displayCountryInformation = (e) => {
    let id = e.currentTarget.id;
    console.log("Targeted Country is:", id);
    value.setcountryName(id);
  };


  console.log("country dataa",countryData)

  return (
    <>
      <div className="grid new-sm-4:gap-y-[2rem] new-sm-2:gap-y-[5rem] new-sm-4:grid-cols-1 new-sm:grid-cols-2 new-lg:grid-cols-4 new-sm:mx-[2rem] new-sm:my-[1rem] new-lg:mx-[3rem] new-lg:my-[1rem] new-xl:mx-[4.5rem] new-xl:my-[2rem] new-xl:px-[0.5rem] new-sm-4:py-[1rem]">
        {countryData &&
        // [0 1 2 3 4]
          countryData.map((item, index) => {
            let justifyClass = "new-lg:justify-self-start";
            if (index % 4 === 1) {
              justifyClass = "new-lg:justify-self-center";
            } else if (index % 4 === 2) {
              justifyClass = "new-lg:justify-self-center";
            } else if (index % 4 === 3) {
              justifyClass = "new-lg:justify-self-end";
            }

            let justifyselfClass = "new-sm:justify-self-start";
            if (index % 2 === 1) {
              justifyselfClass = "new-sm:justify-self-end";
            } else if (index % 2 === 2) {
              justifyselfClass = "new-sm:justify-self-start";
            } else if (index % 2 === 3) {
              justifyselfClass = "new-sm:justify-self-end";
            }
            return (
              <Link
                to="/information"
                className={`shadow-new-boxshawod  ${justifyselfClass} ${justifyClass} cursor-pointer rounded-lg  new-sm-4:w-max new-sm-4:m-auto new-sm:m-0`}
                key={item.name}
              >
                <div
                  className={
                    value.themeToggle === "off"
                      ? "new-sm-4:w-[180px] new-sm-4:h-[290px] new-sm-3:w-[250px] new-sm-3:h-[320px] new-sm-2:w-[300px] new-sm-2:h-[350px] new-sm-4:justify-self-center new-sm:w-[250px] new-sm:h-[328px] new-md:w-[280px] new-md:h-[350px] new-lg:w-[210px] new-lg:h-[290px] new-xl:w-[250px]  new-xl:h-[330px]"

                      : "new-sm-4:w-[150px] new-sm-4:h-[250px] new-sm-3:w-[250px] new-sm-3:h-[320px] new-sm-2:w-[300px] new-sm-2:h-[350px] new-sm-4:justify-self-center new-sm:w-[250px] new-sm:h-[328px] new-md:w-[280px] new-md:h-[350px] new-lg:w-[210px] new-lg:h-[290px] new-xl:w-[250px]  new-xl:h-[330px] bg-[#2b3945] text-white"
                  }
                  style={{ fontFamily: "Nunito Sans" }}
                  id={item.name}
                  onClick={displayCountryInformation}
                >
                  <div className="new-lg:w-[210px] new-md:h-[170px] new-lg:h-[130px] new-xl:w-[250px]  new-xl:h-[165px]">
                    <img
                      className="w-[100%] h-[100%] object-cover object-left"
                      src={item.flags.svg}
                      alt="Country_Flag"
                    />
                  </div>

                  <div className="p-[1rem] flex flex-col gap-[1rem]">
                    <div>
                      <p className="font-bold new-sm-4:text-sm new-sm-3:text-xl new-lg:text-[16px]">
                        {item.name}
                      </p>
                    </div>

                    <div>
                      <p
                        className={
                          value.themeToggle === "off"
                            ? "new-sm-4:text-[13px] new-sm-3:text-sm text-[#858585]"
                            : "new-sm-4:text-[13px] new-sm-3:text-sm text-gray-400"
                        }
                      >
                        <span
                          className={
                            value.themeToggle === "off"
                              ? "font-bold text-black"
                              : "font-bold text-white"
                          }
                        >
                          Population:
                        </span>{" "}
                        {item.population.toLocaleString()}
                      </p>
                      <p
                        className={
                          value.themeToggle === "off"
                            ? "new-sm-4:text-[13px] new-sm-3:text-sm text-[#858585]"
                            : "new-sm-4:text-[13px] new-sm-3:text-sm text-gray-400"
                        }
                      >
                        <span
                          className={
                            value.themeToggle === "off"
                              ? "font-bold text-black"
                              : "font-bold text-white"
                          }
                        >
                          Region:
                        </span>{" "}
                        {item.region}
                      </p>
                      <p
                        className={
                          value.themeToggle === "off"
                            ? "new-sm-4:text-[13px] new-sm-3:text-sm text-[#858585]"
                            : "new-sm-4:text-[13px] new-sm-3:text-sm text-gray-400"
                        }
                      >
                        <span
                          className={
                            value.themeToggle === "off"
                              ? "font-bold text-black"
                              : "font-bold text-white"
                          }
                        >
                          Capital:
                        </span>{" "}
                        {item.capital}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        {isPending &&
          Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="w-[250px] h-[330px]" />
          ))}
        {countryData && !countryData.length > 0 && <p>No country found</p>}
      </div>
    </>
  );
};
export default HeroMain;
