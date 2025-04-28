import React from 'react';
import NavBar from '../NavBar/NavBar';
// import heroImg1 from "../../assets/images/HeroImage1.png"
import { FiDownload } from "react-icons/fi";
import { FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import CountUp from "react-countup";
import heroimg2 from "../../assets/images/DSC05189-removebg-preview.png"

const HeroSection = () => {
    return (
      <div id='home' className="bg-gradient-to-r from-[#0F0715]  to-[#281745]">
        <div className="container mx-auto">
          <NavBar></NavBar>
        </div>

        <div className=" container mx-auto p-6  flex flex-col lg:flex-row justify-between items-center md:gap-x-36 relative space-y-10">
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
          <div className="md:w-1/2  transition-all duration-700 ease-linear hover:rotate-6 w-[50%] h-[50%]  border-4 border-[#8750F7] flex items-center justify-center  rounded-full shadow-2xl shadow-indigo-900 bg-[#0C1013]">
            <img
              className="rounded-full bg-[#8750F7] scale-95 hover:scale-75 transition-all duration-500 w-full h-full"
              src={heroimg2}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col items-center lg:flex-row justify-center gap-20 py-10">
          <div className="flex items-center text-[#DDDDDD] font-bold space-x-5">
            <CountUp start={0} end={2}>
              {({ countUpRef }) => (
                <div>
                  <span className="text-9xl" ref={countUpRef} />
                </div>
              )}
            </CountUp>
            <div>
              <p className="text-2xl">
                Years of <br /> Experience
              </p>
            </div>
          </div>
          <div className="flex items-center text-[#DDDDDD] font-bold space-x-5">
            <CountUp start={0} end={60}>
              {({ countUpRef }) => (
                <div className="flex justify-center  text-5xl">
                  <h1 ref={countUpRef} className="text-9xl"></h1>+
                </div>
              )}
            </CountUp>
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