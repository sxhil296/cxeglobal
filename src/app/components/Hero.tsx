import React from "react";

const Hero = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row-reverse items-center lg:mt-20 lg:py-40 py-10 lg:px-8 gap-10">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/hero-bg.jpg"
            alt="hero"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="text-center lg:text-left lg:max-w-[50%] px-4 lg:px-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-2 leading-tight">
            CXE-Global
          </h1>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Digital Transformation Services for All Business Sizes
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600">
            Empowering Your Business with Technology and Innovation, Turning
            Challenges into Opportunities!
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2 mt-6 items-center">
            <button className="px-6 py-2 border text-white border-blue-400 hover:bg-white bg-blue-400 hover:text-blue-400 font-medium">
              Consult Now
            </button>
            <button className="px-6 py-2 border border-black hover:bg-black hover:text-white font-medium">
              View Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
