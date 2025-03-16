import React from 'react';
import logo from "../../../public/Logo.png"

const NavBar = () => {
    return (
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center space-x-2">
          <img src={logo} className="w-28 h-28 " alt="" />
          <p className="text-white text-xl">mehedytouhidurzaman@gmail.com</p>
        </div>
        <div>
          <ul className="flex space-x-3 text-white text-lg items-center">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#works">Works</a>
            </li>
            <li>
              <a href="#resume">Resume</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <button className="transition-all duration-700 ease-in-out bg-gradient-to-r from-[#7746DB]/80 to-[#341A65]/90 px-10 py-3 rounded-full cursor-pointer  hover:from-[#341A65] hover:to-[#7746DB]">
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default NavBar;