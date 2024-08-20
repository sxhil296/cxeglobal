import React from 'react'
import MagicButton from './ui/MagicButton'
import About from './About'

const AboutPage1 = () => {
  return (
    <div>
        <div
      className='w-full mt-[112px] bg-custom-bg bg-cover bg-center relative'
      style={{ backgroundImage: "url('/aboutPage1.png')" }}
    >
        {/* Overlay to maintain the background color */}
        <div className="absolute inset-0 bg-custom-bg opacity-80"></div>

        {/* section 1 */}
        <div className='max-w-[1280px] mx-auto px-2 sm:px-6 py-20 sm:py-[100px] text-center sm:text-left relative'>
            <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white mb-4'>About CXE Global</h1>
            <p className='sm:text-balance text-white text-lg sm:text-xl leading-relaxed mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo asperiores omnis harum eum iure eos, sunt voluptatem impedit consectetur quos.</p>
            <button className='border-2 border-white px-4 py-2 sm:px-6 sm:py-3 text-white hover:bg-white hover:text-black'>Consult Now</button>
        </div>
    </div>
    <About />
    <div className="w-full bg-custom-bg">
  {/* Container for text and image */}
  <div className="max-w-[1280px] mx-auto px-2 sm:px-6 py-10 sm:py-[100px] flex flex-col-reverse lg:flex-row items-center lg:items-center justify-center gap-14">
    
    {/* Image Content */}
    <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
      <img src="/visionmission.png" alt="Our Mission" className="w-full h-auto object-cover max-w-[90%] lg:max-w-[80%]" />
    </div>

    {/* Text Content */}
    <div className="w-full lg:w-[55%] text-center sm:text-left flex flex-col justify-center">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase text-white mb-4">Our Mission</h2>
      <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">Draw your growth path with us!</h3>
      <p className="text-lg sm:text-xl leading-relaxed text-white mb-5">
        We provide valuable insight into the fastest-growing business with the best technological solutions and fault-tolerant architecture. Our unique customer-centric approach helps turn any data into a readable form, influencing critical decisions.
      </p>
    </div>
    
  </div>
</div>



    </div>
  )
}

export default AboutPage1
