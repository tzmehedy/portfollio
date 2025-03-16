import React from 'react';
import { IoMdArrowDown } from "react-icons/io";

const Services = () => {
    return (
      <div id='services' className="bg-[#050709] p-10">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h1 className="bg-gradient-to-r from-[#8A54F7] to-[#FBF9FF] bg-clip-text text-transparent text-6xl font-bold">
            My Quality Services
          </h1>
          <p className="text-[#DDDDDD] text-xl text-center">
            I put your ideas and thus your wishes to develop of a unique website{" "}
            <br />
            that inspires you and you customers.
          </p>
        </div>

        <div className="container mx-auto my-10 ">
          <div className="flex flex-col lg:flex-row justify-between items-center border-b-2 border-[#8A55F7] px-3 py-10 group text-[#8A55F7] transition-all duration-500 hover:bg-[#8A55F7] hover:text-[#DDDDDD] rounded-lg">
            <p className="text-3xl font-bold">01</p>
            <h1 className="text-4xl font-bold">Web Development</h1>
            <p className="font-bold text-xl">
              Ensure your website looks great on any device, with layouts that{" "}
              <br />
              adapt to different screen sizes seamlessly.
            </p>
            <p className=" text-3xl font-bold -rotate-45">
              <IoMdArrowDown></IoMdArrowDown>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center border-b-2 border-[#8A55F7] px-3 py-10 group text-[#8A55F7] transition-all duration-500 hover:bg-[#8A55F7] hover:text-[#DDDDDD] rounded-lg">
            <p className="text-3xl font-bold">02</p>
            <h1 className="text-4xl font-bold">Front End Development</h1>
            <p className="font-bold text-xl text-justify">
              Ensure you that I will develop your website pixel perfect as per
              your reference.
              <br />
              For frontend I am using React js or Next js
            </p>
            <p className=" text-3xl font-bold -rotate-45">
              <IoMdArrowDown></IoMdArrowDown>
            </p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center border-b-2 border-[#8A55F7] px-3 py-10 group text-[#8A55F7] transition-all duration-500 hover:bg-[#8A55F7] hover:text-[#DDDDDD] rounded-lg">
            <p className="text-3xl font-bold">03</p>
            <h1 className="text-4xl font-bold">Back End Development</h1>
            <p className="font-bold text-xl text-justify">
              Ensure you that I will develop your website fully functional as
              per your requirements.
              <br />
              For frontend I am using Node js or Express js
            </p>
            <p className=" text-3xl font-bold -rotate-45">
              <IoMdArrowDown></IoMdArrowDown>
            </p>
          </div>
        </div>
      </div>
    );
};

export default Services;