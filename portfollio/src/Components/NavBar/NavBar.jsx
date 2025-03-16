import React from 'react';
import logo from "../../../public/Logo.png"

const NavBar = () => {
    return (
      <div className="flex items-center justify-between ">
        <div className="flex items-center">
          <img src={logo} className="w-28 h-28  " alt="" />
          <p className="text-white text-xl">mehedytouhidurzaman@gmail.com</p>
        </div>
        <div>
          <ul className="flex space-x-3 text-white text-lg items-center">
            <li>
              <a
                href="#services"
                className="relative px-0 py-2  after:absolute
              after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#6B3EC6] after:transition-x after:duration-300 hover:after:w-full"
              >
                Services
              </a>
            </li>
            <li>
              <a
                className="relative px-0 py-2  after:absolute
              after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#6B3EC6] after:transition-x after:duration-300 hover:after:w-full"
                href="#works"
              >
                Works
              </a>
            </li>
            <li>
              <a
                className="relative px-0 py-2  after:absolute
              after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#6B3EC6] after:transition-x after:duration-300 hover:after:w-full"
                href="#resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                className="relative px-0 py-2  after:absolute
              after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#6B3EC6] after:transition-x after:duration-300 hover:after:w-full"
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                className="relative px-0 py-2  after:absolute
              after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#6B3EC6] after:transition-x after:duration-300 hover:after:w-full"
                href="#testimonials"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                className="relative px-0 py-2  after:absolute
              after:left-0 after:bottom-0 after:w-0 after:h-0.5 after:bg-[#6B3EC6] after:transition-x after:duration-300 hover:after:w-full"
                href="#contact"
              >
                Contact
              </a>
            </li>
            <li>
              <button className="transition-all duration-700 bg-gradient-to-r from-[#7746DB]/80 to-[#341A65]/90 px-10 py-3 rounded-full cursor-pointer  hover:from-[#341A65] hover:to-[#7746DB] ml-7">
                Hire Me
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
};

export default NavBar;