import React from 'react';
import { FaClock, FaCogs, FaAws } from 'react-icons/fa';

const WhyCXE = () => {
  return (
    <div className="w-full relative ">
      {/* Colored Background Section with Background Image and Opacity */}
      <div className="relative w-full py-[100px] bg-custom-bg">
        {/* Background Image with Opacity (Hidden on Small Screens) */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 sm:block hidden"
          style={{
            backgroundImage: "url('/hero-bggg.jpg')",
          }}
        ></div>

        {/* Content */}
        <div className="relative max-w-[1280px] mx-auto text-center px-2 sm:px-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">All the reasons to choose CXE-Global</h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
          We&apos;re committed to delivering &apos;Value for Money&apos; by partnering with business and IT, enabling customers to focus on core responsibilities and achieve impactful results for their employees and customers
          </p>
        </div>

        {/* Cards Section for Small Screens */}
        <div className="block sm:hidden space-y-8 mt-8">
          <div className="bg-custom-bg shadow-xl p-8 flex items-start text-left text-white mx-4">
            <FaClock className="text-5xl text-white mr-4" /> {/* Icon aligned top left */}
            <div>
              <h2 className="text-2xl font-semibold ">5+ Years Experience</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ullam!</p>
            </div>
          </div>
          <div className="bg-custom-bg shadow-xl p-8 flex items-start text-left text-white mx-4">
            <FaCogs className="text-5xl text-white mr-4" /> {/* Icon aligned top left */}
            <div>
              <h2 className="text-2xl font-semibold">Process CMMI 3</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, fugit.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section for Small Screens with Last Card Partially Outside */}
      <div className="block sm:hidden mt-4">
        <div className="bg-custom-bg shadow-xl p-8 flex items-start text-left text-white mx-4 transform -translate-y-1/2">
          <FaAws className="text-5xl text-white mr-4" /> {/* Icon aligned top left */}
          <div>
            <h2 className="text-2xl font-semibold">AWS Partner</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dicta?</p>
          </div>
        </div>
      </div>

      {/* Cards Section for Larger Screens */}
      <div className="hidden sm:flex absolute inset-x-0 top-full transform -translate-y-1/2 flex-row justify-center gap-8 max-w-[1280px] mx-auto pt-10">
        <div className="bg-gradient-to-r from-fuchsia-700 to-violet-700 shadow-2xl p-8 w-1/4 flex items-start text-left text-white">
          <FaClock className="text-[80px] text-white mr-[10px]" /> 
          <div>
            <h2 className="text-2xl font-semibold">5+ Years Experience</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, ullam!</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-fuchsia-700 to-violet-700 shadow-2xl p-8 w-1/4 flex items-start text-left text-white">
          <FaCogs className="text-[80px] text-white mr-[10px]" /> 
          <div>
            <h2 className="text-2xl font-semibold">Process CMMI 3</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, fugit.</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-fuchsia-700 to-violet-700 shadow-2xl p-8 w-1/4 flex items-start text-left text-white">
          <FaAws className="text-[80px] text-white mr-[10px]" /> 
          <div>
            <h2 className="text-2xl font-semibold">AWS Partner</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae, dicta?</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyCXE;
