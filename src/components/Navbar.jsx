import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Media/ankitsonilogo.png";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white sticky top-0 text-black items-center p-3 px-24 flex justify-between shadow-lg shadow-orange-100">
        <div className="cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
        <div className="space-x-6 font-semibold">
            <NavLink style={({isActive}) => {
            return {
              color: isActive ? '#FF8C00' : 'black'
            }
          }
          } to="/" className="hover:text-orange-500">Home </NavLink>
            <NavLink style={({isActive}) => {
            return {  color: isActive ? '#FF8C00' : 'black' }} } 
            to="/about" className="hover:text-orange-500">About </NavLink>
            <NavLink style={({isActive}) => {
            return {  color: isActive ? '#FF8C00' : 'black' }} }  to="/contact" className="hover:text-orange-500">Contact </NavLink>
        </div>
        <div className="flex justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-10 cursor-pointer font-bold" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
</svg>
          <Link to="/login">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-6 rounded shadow-lg shadow-orange-300"> Login</button></Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
