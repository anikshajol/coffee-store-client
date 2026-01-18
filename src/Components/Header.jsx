import React from "react";
import bgImage from "../assets/images/more/15.jpg";
import logo from "/logo1.png";
import { Link } from "react-router";
const Header = () => {
  return (
    <header className="py-8" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="flex justify-center gap-3 items-center">
        <img className="w-16" src={logo} alt="" />
        <Link
          to={"/"}
          className="text-2xl md:text-4xl lg:text-5xl text-center font-semibold text-white"
        >
          Espresso Emporium
        </Link>
      </div>
    </header>
  );
};

export default Header;
