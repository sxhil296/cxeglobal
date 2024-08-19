import Link from 'next/link';
import React from 'react';

const About = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ex quam est aspernatur corrupti in provident ut dicta ad. Consequatur rerum quos sequi voluptatem debitis sed consectetur illo a fuga?
            </p>
            <p className='text-base sm:text-lg lg:text-xl text-gray-600 mb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas beatae facilis, impedit molestias sint error! Iste porro mollitia vitae quia et sunt, sit voluptate delectus magnam veritatis, pariatur voluptas tenetur sequi optio possimus laudantium libero repellat quasi dolor asperiores atque.
            </p>
            <b className='text-base sm:text-lg lg:text-xl text-gray-800'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, doloribus!
            </b>
            <div className='mt-6'>
              <Link href='/about'>
                <button className="sm:px-6 px-[28px] py-3 md:px-8 md:py-4 md:text-xl border text-white border-blue-400 hover:bg-white bg-blue-400 hover:text-blue-400 font-medium">
                  More About Us
                </button>
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
