"use client"
import React, { useEffect, useRef } from "react";
import { techStack } from "@/data";

const TechStack = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      const slideWidth = slider.children[0].clientWidth + 22; // 22px is the gap between images
      let position = 0;

      const scroll = () => {
        position -= 1; // Move the slider to the left by 1px
        if (position <= -slideWidth) {
          position = 0; // Reset the position to create an infinite loop effect
          slider.appendChild(slider.children[0]); // Move the first slide to the end
        }
        slider.style.transform = `translateX(${position}px)`;
      };

      const interval = setInterval(scroll, 15); // Adjust the speed of scrolling by changing the interval time

      return () => clearInterval(interval); // Clean up the interval on component unmount
    }
  }, []);

  return (
    <div className=" sm:py-20">
      <div className="max-w-[1280px] mx-auto text-center  sm:py-0 overflow-hidden px-2 sm:px-0">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold capitalize mb-4">
          We work on different platforms & tools
        </h2>
        <p className="text-lg sm:text-xl text-balance capitalize">
        Our diverse tech stack powers innovative solutions, tailored to meet your unique business needs. From front-end to back-end, we leverage cutting-edge tools to drive efficiency and growth.
        </p>
        <div className="relative flex justify-center items-center mt-4 sm:mt-8">
          <div className="flex gap-6" ref={sliderRef}>
            {techStack.concat(techStack).map((tech, index) => (
              <div
                key={index}
                className="p-4 flex items-center justify-center"
                style={{ height: "140px", width: "220px" }}
              >
                <img
                  src={tech.img}
                  alt={tech.name}
                  className="object-contain h-full w-full bg-blend-*"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
