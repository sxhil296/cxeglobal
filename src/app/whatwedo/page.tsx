import React from "react";
import TechStack from "../components/TechStack";
import Companies from "../components/Companies";
import DiffService from "../components/DiffService";

const page = () => {
  return (
    <div>
      <div
        className="w-full mt-[112px] bg-custom-bg bg-cover bg-center relative"
        style={{ backgroundImage: "url('/whatwedo.jpg')" }}
      >
        {/* Overlay to maintain the background color */}
        <div className="absolute inset-0 bg-custom-bg opacity-80"></div>

        {/* section 1 */}
        <div className="max-w-[1280px] mx-auto px-2 sm:px-6 py-20 sm:py-[140px] text-center relative">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white mb-4">
            what we do
          </h1>
          <p className="text-white text-lg sm:text-xl text-balance leading-relaxed">
            We deliver innovative IT solutions that streamline business
            processes, enhance customer experiences, and drive growth. Our
            expertise spans web development, app development, UI/UX design, and
            SEO, ensuring your business thrives in a competitive digital
            landscape.
          </p>
        </div>
      </div>
     <DiffService />
      <Companies />
      <TechStack />
    </div>
  );
};

export default page;
