{requiredInfo.map((item) => {
  return (
    <div
      className="mx-[4.5rem] my-[3rem] flex flex-col gap-[3rem]"
      style={{ fontFamily: "Nunito Sans" }}
      key={item.name}
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
    </div>
  );
})}
