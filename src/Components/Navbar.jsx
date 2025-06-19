import React from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "px-4 py-2 bg-blue-500 text-white rounded-full transition-all duration-300 ease-out transform scale-105 shadow-md shadow-blue-300"
      : "px-4 py-2 text-gray-700 hover:text-blue-500 transition-all duration-300 ease-in";

  return (
    <Container>
      <div className="flex justify-between items-center py-4 border-b border-gray-300 ">
        <div className="flex gap-5 items-center">
          <h1>For Clinics</h1>
          <button className="py-2 px-3 bg-blue-300 rounded-full text-white">
            Download the app
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex justify-center gap-2 items-center pr-2 border-r border-gray-300">
            <img src="./img/en.png" alt="en" className="h-5 w-5" />
            <h1>En</h1>
          </div>
          <div className="flex items-center gap-1 pl-2">
            <img src="/img/location.svg" alt="" className="h-8 w-8" />
            Tashkent
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-3 pb-3 items-end border-b border-gray-300">
        <div className="flex items-center justify-center">
          <img src="/img/Logo.png" alt="" className="h-20 w-20" />
          <Link to="/Home">
            <h1 className="font-bold text-[20px] text-green-500">
              Doctor
              <span className="font-bold text-[20px] text-blue-500">
                Modern
              </span>
            </h1>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-5">
            <li>
              <NavLink to="home" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="doctor" className={linkClass}>
                Doctors
              </NavLink>
            </li>
            <li>
              <NavLink to="clinics" className={linkClass}>
                Clinics
              </NavLink>
            </li>

            <li>
              <NavLink to="aboutus" className={linkClass}>
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="aiasistent" className={linkClass}>
                AI Assistant
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  );
}

export default Navbar;
