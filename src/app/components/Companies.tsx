import React from "react";
import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const Companies = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-center items-center sm:py-20 py-10 mb-8">
      <div className="max-w-[1280px] mx-auto text-center px-4">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold py-6">
          Our Business Partners
        </h1>
        <p className="text-gray-600  mb-12 text-xl leading-relaxed text-balance">
        Our business partners are integral to our success, helping us deliver innovative solutions and exceptional value to our clients. Together, we collaborate to achieve shared goals, drive growth, and create meaningful impact across industries.
        </p>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-7 sm:mb-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="border border-black p-4 sm:p-6 w-[130px] h-[90px] sm:w-[230px] sm:h-[130px] flex items-center justify-center hover:shadow-lg"
            >
              <img
                src={company.img}
                alt={company.name}
                className="object-contain h-[60%] w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center max-lg:mt-[60px]">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Companies;
