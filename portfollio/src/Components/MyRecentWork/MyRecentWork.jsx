import React, { useState } from 'react';
import img1 from "../../assets/images/2025-04-21_000332.png"
import img2 from "../../assets/images/2025-04-21_000442.png"
import img3 from "../../assets/images/2025-04-21_000737.png"
import img4 from "../../assets/images/2025-04-21_001307.png"
import { FaArrowUp } from "react-icons/fa";

const MyRecentWork = () => {
    const [open, setOpen] = useState(0)
    console.log(open)
    return (
      <div className="bg-[#0F0715] py-10">
        <div className="flex flex-col items-center justify-center space-y-5 ">
          <h1 className="bg-gradient-to-r from-[#8A54F7] to-[#FBF9FF] bg-clip-text text-transparent text-6xl font-bold">
            My Recent Work
          </h1>
          <p className="text-[#DDDDDD] text-xl text-center">
            I put your ideas and thus your wishes to develop of a unique website{" "}
            <br />
            that inspires you and you customers.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-10 container mx-auto mt-10 ">
          <div
            onMouseLeave={() => setOpen(0)}
            onMouseEnter={() => setOpen(1)}
            className="w-full h-[550px]   overflow-auto p-10 bg-[#2C184D] shadow-2xl rounded-2xl border-3 border-[#8A55F7] relative "
          >
            <div>
              <img className="rounded-2xl w-full" src={img1} alt="" />
            </div>

            <div className="sticky bottom-0">
              {open === 1 && (
                <div className="w-full flex justify-center items-center ">
                  <a
                    href="https://aimentor-a5f3e.web.app/"
                    target="_blank"
                    className="bg-[#3B1F71] w-full text-center h-20 text-white font-bold text-4xl  flex justify-evenly items-center rounded-2xl"
                  >
                    Ai Mentor
                    <FaArrowUp className="text-white rotate-45"></FaArrowUp>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div
            onMouseLeave={() => setOpen(0)}
            onMouseEnter={() => setOpen(2)}
            className="w-full h-[550px]   overflow-auto p-10 bg-[#2C184D] shadow-2xl rounded-2xl border-3 border-[#8A55F7] relative "
          >
            <div>
              <img className="rounded-2xl w-full" src={img2} alt="" />
            </div>

            <div className="sticky bottom-0">
              {open === 2 && (
                <div className="w-full flex justify-center items-center ">
                  <a
                    href="https://musical-snickerdoodle-209e72.netlify.app/"
                    target="_blank"
                    className="bg-[#3B1F71] w-full text-center h-20 text-white font-bold text-4xl  flex justify-evenly items-center rounded-2xl"
                  >
                    Sena Insurance PLC
                    <FaArrowUp className="text-white rotate-45"></FaArrowUp>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center gap-10 container mx-auto mt-10 ">
          <div
            onMouseLeave={() => setOpen(0)}
            onMouseEnter={() => setOpen(3)}
            className="w-full h-[550px]   overflow-auto p-10 bg-[#2C184D] shadow-2xl rounded-2xl border-3 border-[#8A55F7] relative "
          >
            <div>
              <img className="rounded-2xl w-full" src={img3} alt="" />
            </div>

            <div className="sticky bottom-0">
              {open === 3 && (
                <div className="w-full flex justify-center items-center ">
                  <a
                    href="https://luxury-panda-cb53b8.netlify.app/"
                    target="_blank"
                    className="bg-[#3B1F71] w-full text-center h-20 text-white font-bold text-4xl  flex justify-evenly items-center rounded-2xl"
                  >
                    Edge Cut
                    <FaArrowUp className="text-white rotate-45"></FaArrowUp>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div
            onMouseLeave={() => setOpen(0)}
            onMouseEnter={() => setOpen(4)}
            className="w-full h-[550px]   overflow-auto p-10 bg-[#2C184D] shadow-2xl rounded-2xl border-3 border-[#8A55F7] relative "
          >
            <div>
              <img className="rounded-2xl w-full" src={img4} alt="" />
            </div>

            <div className="sticky bottom-0">
              {open === 4 && (
                <div className="w-full flex justify-center items-center ">
                  <a
                    href="https://famous-sherbet-554d6d.netlify.app/"
                    target="_blank"
                    className="bg-[#3B1F71] w-full text-center h-20 text-white font-bold text-4xl  flex justify-evenly items-center rounded-2xl"
                  >
                    Byte Blaze Blog
                    <FaArrowUp className="text-white rotate-45"></FaArrowUp>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyRecentWork;