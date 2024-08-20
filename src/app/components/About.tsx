import Link from 'next/link';
import React from 'react';
import MagicButton from './ui/MagicButton';

const About = () => {
  return (
    <div className='w-full bg-white py-16'>
      <div className='max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10'>
        {/* Text Content with Vertical Line */}
        <div className='lg:max-w-[50%] px-4 lg:px-0 relative'>
          {/* Vertical Line */}
          <div className='ml-4 sm:ml-0 block absolute top-0 left-0 w-[4px] h-full bg-custom-bg'></div>

          {/* Text Wrapper with Padding to Accommodate Vertical Line */}
          <div className='pl-6 lg:pl-10'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-6'>
              About CXE-Global
            </h1>
            <p className='text-base sm:text-lg lg:text-xl text-gray-600 mb-4'>
            We drive business success through a mix of traditional and innovative methods, rooted in trust, transparency, and collaboration. 'Customer Success' is at the heart of everything we do.
            </p>
            <p className='text-base sm:text-lg lg:text-xl text-gray-600 mb-6'>
            By partnering with both Business and IT teams, we help clients achieve their goals while adding value to their operations and enhancing customer experiences. Our commitment is to be a dependable ally, guiding our clients through challenges and opportunities alike. 
            </p>
            <b className='text-base sm:text-lg lg:text-xl text-gray-800'>
            We focus on delivering tailored solutions that empower our clients to thrive in today’s dynamic business landscape, ensuring sustainable growth and long-term success.
            </b>
            <div className='mt-6'>
              <Link href='/about'>
              <MagicButton title={"Consult Now"} otherClasses={'sm:px-6 px-[28px] py-2 md:px-8 md:py-4 md:text-xl hover:bg-white hover:text-black text-white'}/>
              </Link>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className='w-full lg:w-1/2'>
          <img
            src="/about1.png"
            alt="about"
            className='w-full h-auto'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
