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

  return (
    <>
      <div className="grid gap-y-[5rem] grid-cols-4 mx-[4.5rem] my-[2rem] px-[0.5rem] py-[1rem]">
        {countryData &&
          countryData.map((item, index) => {
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
                        <span className="font-bold text-black">
                          Population:
                        </span>{" "}
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
        {isPending &&
          Array.from({ length: 8 }).map((_, index) => (
            <Skeleton key={index} className="w-[250px] h-[330px]" />
          ))}
      </div>
    </>
  );
};
export default HeroMain;
