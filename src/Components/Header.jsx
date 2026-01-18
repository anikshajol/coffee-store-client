import React from "react";
import bgImage from "../assets/images/more/15.jpg";
import logo from "/logo1.png";
const Header = () => {
  return (
    <header className="py-8" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex justify-center gap-3 items-center">
        <img className="w-16" src={logo} alt="" />
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold text-white">
          Espresso Emporium
        </h1>
      </div>
    </header>
  );
};

export default Header;
