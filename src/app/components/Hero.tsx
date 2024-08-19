// "use client";
// import Link from "next/link";
// import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";

// const Hero = () => {
//   const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);
//   return (
//     <>
//       <div className="w-full bg-gray-100">
//         <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row-reverse items-center lg:mt-[126px] mt-[72px] lg:py-40 py-10 lg:px-8 gap-10">
//           {/* Image */}
//           <div className="w-full lg:w-1/2 embla" ref={emblaRef}>
//             {/* <img
//             src="/hero-bg.jpg"
//             alt="hero"
//             className="w-full h-auto rounded-lg shadow-lg"
//           /> */}
//             <div className="embla__container w-full h-auto rounded-lg shadow-lg">
//               <div className="embla__slide">
//                 <img src="/hero2.png" alt="hero" />
//               </div>
//               <div className="embla__slide w-full h-auto rounded-lg shadow-lg">
//                 <img src="/hero2.png" alt="hero" />
//               </div>
//               <div className="embla__slide w-full h-auto rounded-lg shadow-lg">
//                 <img src="/hero2.png" alt="hero" />
//               </div>
//             </div>
//           </div>

//           {/* Text Content */}
//           <div className="text-center lg:text-left lg:max-w-[50%] px-4 lg:px-0">
//             <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-400 mb-2 leading-tight">
//               CXE-Global
//             </h1>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
//               Digital Transformation Services for All Business Sizes
//             </h2>
//             <p className="text-base sm:text-lg lg:text-xl text-gray-600">
//               Empowering Your Business with Technology and Innovation, Turning
//               Challenges into Opportunities!
//             </p>
//             <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2 mt-6 items-center">
//               <Link href="/contact">
//                 <button className="sm:px-6 px-[28px] py-3 md:px-8 md:py-4 md:text-xl border text-white border-blue-400 hover:bg-white bg-blue-400 hover:text-blue-400 font-medium">
//                   Consult Now
//                 </button>
//               </Link>

//               <Link href="/services">
//                 <button className="px-6 py-3 md:px-8 md:py-4 md:text-xl border border-black hover:bg-black hover:text-white font-medium">
//                   View Services
//                 </button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default Hero;

"use client";
import Link from "next/link";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Hero = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="relative w-full bg-gray-100 overflow-hidden">
      {/* Parallax Background for larger screens */}
      <div
        className="hidden md:block absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('/hero-bggg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div className="absolute inset-0"></div>
      </div>

      {/* Static Background for smaller screens */}
      <div
        className="block md:hidden absolute inset-0 bg-center bg-cover"
        style={{
          backgroundColor: '#f3f4f6',
          height: "100vh",
        }}
      >
        <div className="absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto flex flex-col lg:flex-row-reverse items-center lg:mt-[126px] mt-[72px] lg:py-40 py-10 lg:px-8 gap-10">
        {/* Image Carousel */}
        <div className="w-full lg:w-1/2 embla" ref={emblaRef}>
          <div className="embla__container w-full h-auto rounded-lg shadow-lg">
            <div className="embla__slide">
              <img src="/hero2.png" alt="hero" className="w-full h-auto rounded-lg" />
            </div>
            <div className="embla__slide">
              <img src="/hero2.png" alt="hero" className="w-full h-auto rounded-lg" />
            </div>
            <div className="embla__slide">
              <img src="/hero2.png" alt="hero" className="w-full h-auto rounded-lg" />
            </div>
          </div>
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
            <Link href="/contact">
              <button className="sm:px-6 px-[28px] py-3 md:px-8 md:py-4 md:text-xl border text-white border-blue-400 hover:bg-white bg-blue-400 hover:text-blue-400 font-medium">
                Consult Now
              </button>
            </Link>
            <Link href="/services">
              <button className="px-6 py-3 md:px-8 md:py-4 md:text-xl border border-black hover:bg-black hover:text-white font-medium">
                View Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


