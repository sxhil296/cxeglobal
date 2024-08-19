import React from "react";
import { companies } from "@/data";

const Companies = () => {
  return (
    <div className="w-full bg-white flex justify-center items-center sm:py-20 py-10">
      <div className="max-w-[1280px] mx-auto text-center px-4">
        <h1 className="text-4xl font-bold py-8">Our Business Partners</h1>
        <p className="text-gray-600  mb-12 text-xl leading-relaxed text-balance">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae at
          quae consequatur tenetur illo, eligendi eveniet deleniti perferendis,
          inventore quibusdam aut porro tempore.
        </p>
        {/* Company Logos */}
        <div className="flex flex-wrap justify-center gap-6">
          {companies.map((company, index) => (
            <div
              key={index}
              className="border border-black p-6 flex items-center justify-center hover:shadow-lg"
              style={{ height: '140px', width: '250px' }}
            >
              <img
                src={company.img}
                alt={company.name}
                className="object-contain h-full w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
