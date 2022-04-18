import React from "react";
import logo from "../Media/ankitsonilogo.png";
const Navbar = () => {
  return (
    <>
      <nav className="bg-white text-black items-center p-3 px-24 flex justify-between shadow-lg shadow-orange-100">
        <div className="cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
        <div className="space-x-6 font-semibold">
            <a href="#" className="hover:text-orange-500">Home </a>
            <a href="#" className="hover:text-orange-500">About </a>
            <a href="#" className="hover:text-orange-500">Contact </a>
        </div>
        <div className="">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full"> Register</button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
