import React from "react";
import { Link } from "react-router-dom";
import logo from "../Media/ankitsonilogo.png";
import Login from "./Login";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white sticky top-0 text-black items-center p-3 px-24 flex justify-between shadow-lg shadow-orange-100">
        <div className="cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
        <div className="space-x-6 font-semibold">
            <Link to="/" className="hover:text-orange-500">Home </Link>
            <Link to="/about" className="hover:text-orange-500">About </Link>
            <Link to="/contact" className="hover:text-orange-500">Contact </Link>
        </div>
        <div className="">
          <Link to="/login">
            <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-full"> Login</button></Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
