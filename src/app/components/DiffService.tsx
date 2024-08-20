import React from 'react';
import  {servicesData, Service } from '@/data/index';

const DiffService: React.FC = () => {
  return (
    <div className="py-20">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16 px-4 sm:px-6">
        {servicesData.map((service: Service) => (
          <div
            key={service.id}
            className={`flex flex-col ${service.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-between gap-8`}
          >
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
                {service.title}
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
            <div className="lg:w-1/2">
              <img
                src={service.image}
                alt={`${service.title} Image`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiffService;
