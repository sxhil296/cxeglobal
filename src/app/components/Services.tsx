// import React from "react";
// import { techServices } from "@/data";

// const Services = () => {
//   return (
//     <div className="w-full bg-gray-100 sm:py-20 py-10">
//       <div className="max-w-[1280px] mx-auto text-center px-4">
//         <h1 className="text-4xl font-bold py-8">Our Best Services</h1>
//         <p className="text-gray-600 mb-12 text-xl leading-relaxed text-balance">
//           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae at
//           quae consequatur tenetur illo, eligendi eveniet deleniti perferendis,
//           inventore quibusdam aut porro tempore. Ea veritatis corrupti
//           praesentium ipsam.
//         </p>
//         {/* Service Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {techServices.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-sm hover:shadow-xl rounded-lg p-6 h-64 sm:h-72 flex flex-col justify-between text-left"
//             >
//               <div className="flex items-start">
//                 <div className="text-blue-400 text-5xl mb-4">
//                   <service.icon />
//                 </div>
//               </div>
//               <div>
//                 <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
//                 <p className="text-gray-600 ">{service.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import { techServices } from "@/data";

const Services = () => {
  return (
    <div className="relative w-full bg-gray-100">
      {/* Parallax Background for larger screens */}
      <div
        className="hidden md:block absolute inset-0 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage: "url('server.jpg')",
          opacity: 0.5, // Adjust opacity to your preference
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay to adjust opacity */}
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>

      {/* Static Background for smaller screens */}
      <div className="block md:hidden absolute inset-0 bg-center bg-cover"
        style={{
          backgroundColor: '#f3f4f6', // You can use a solid color or a static image for mobile
          height: '100%',
        }}
      >
        {/* Optional: you can add a light overlay or gradient here */}
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto text-center px-4 py-10 sm:py-20">
        <h1 className="text-4xl font-bold py-8">Our Best Services</h1>
        <p className="text-gray-600 mb-12 text-xl leading-relaxed text-balance">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae at
          quae consequatur tenetur illo, eligendi eveniet deleniti perferendis,
          inventore quibusdam aut porro tempore. Ea veritatis corrupti
          praesentium ipsam.
        </p>
        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {techServices.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-sm hover:shadow-xl rounded-sm p-6 h-64 sm:h-72 flex flex-col justify-between text-left"
            >
              <div className="flex items-start">
                <div className="text-blue-400 text-5xl mb-4">
                  <service.icon />
                </div>
              </div>
              <div>
                <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

