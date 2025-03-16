import React from 'react';
import NavBar from '../NavBar/NavBar';
import heroImg1 from "../../assets/images/HeroImage1.png"
import { FiDownload } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";

const HeroSection = () => {
    return (
      <div className="bg-gradient-to-r from-[#0F0715]  to-[#281745]">
        <div className="container mx-auto">
          <NavBar></NavBar>
        </div>

        <div className=" container mx-auto p-6 flex justify-between items-center gap-x-36 relative">
          <div className="md:w-1/2 space-y-5 ">
            <h3 className="text-[#DDDDDD] text-4xl font-bold">
              I&apos;m Md Touhidur Zaman,
            </h3>
            <h1 className="bg-gradient-to-r from-[#8A54F7] to-[#E1D3FD] bg-clip-text text-transparent text-7xl">
              MERN Stack Web Developer.
            </h1>
            <p className="text-[#DDDDDD] text-2xl">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>

            <div className="flex space-x-5">
              <div>
                <a
                  href="https://drive.google.com/file/d/1rHxLUXTKJ37GX95Sdm2lZCjtGMhcfQyb/view?usp=sharing"
                  target="blank"
                >
                  <button className="flex gap-x-2 items-center text-[#8750F7] text-xl px-6 py-2 border-2 border-[#8750F7] rounded-3xl cursor-pointer hover:bg-[#8750F7] hover:text-[#DDDDDD]">
                    Download CV <FiDownload className=""></FiDownload>
                  </button>
                </a>
              </div>
              <div className="flex items-center space-x-3 text-[#8750F7] text-xl">
                <div className="p-2 border-2 border-[#8750F7] rounded-full cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#8750F7] hover:text-[#DDDDDD]">
                  <FaTwitter></FaTwitter>
                </div>
                <div className="p-2 border-2 border-[#8750F7] rounded-full cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#8750F7] hover:text-[#DDDDDD]">
                  <a href="https://www.facebook.com/tz.mehedy" target="blank">
                    <FaFacebookF></FaFacebookF>
                  </a>
                </div>
                <div className="p-2 border-2 border-[#8750F7] rounded-full cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#8750F7] hover:text-[#DDDDDD]">
                  <a
                    href="https://www.linkedin.com/in/md-touhidur-zaman/"
                    target="blank"
                  >
                    <FaLinkedinIn></FaLinkedinIn>
                  </a>
                </div>
                <div className="p-2 border-2 border-[#8750F7] rounded-full cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#8750F7] hover:text-[#DDDDDD]">
                  <a href="https://github.com/tzmehedy" target="blank">
                    <FaGithub></FaGithub>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 ">
            <img
              className="transition-all duration-700 ease-in-out hover:rotate-6 w-full h-[600px] border-4 border-[#8750F7] border-dashed p-16 rounded-xl shadow-2xl bg-[#0C1013]"
              src={heroImg1}
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center gap-20 py-10">
          <div className="flex items-center text-[#DDDDDD] font-bold space-x-5">
            <div>
              <h1 className="text-9xl">02</h1>
            </div>
            <div>
              <p className="text-2xl">
                Years of <br /> Experience
              </p>
            </div>
          </div>
          <div className="flex items-center text-[#DDDDDD] font-bold space-x-5">
            <div>
              <h1 className="text-9xl">60+</h1>
            </div>
            <div>
              <p className="text-2xl">
                Projects <br /> Completed
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HeroSection;