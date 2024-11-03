import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar pr-[1rem] pl-[1rem] pt-[1.2rem] pb-[1.2rem] flex justify-between outline outline-offset-[1px] outline-[#f1ecec]">
      <div
        className="ml-[4rem] font-extrabold text-2xl "
        style={{ fontFamily: "Nunito Sans" }}
      >
        Where in the world?
      </div>
      <div className="mr-[4rem] flex w-[120px] justify-between items-center cursor-pointer">
        {/*Light Mode and Dark Mode image */}
        <div className="w-[25px] h-[25px]">
          <img
            className="w-[100%] h-[100%]"
            src="./assets/moon.svg"
            alt="moon"
          />
        </div>
        <div>
          <p style={{ fontFamily: "Nunito Sans" }} className="font-semibold">
            Dark Mode
          </p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
