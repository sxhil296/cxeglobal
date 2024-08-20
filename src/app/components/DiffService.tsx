import React from 'react'

const DiffService = () => {
  return (
    <div className='py-20'>
         <div className="max-w-[1280px] mx-auto flex flex-col gap-16 px-4 sm:px-6">
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Consulting
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              CXE has spearheaded and overseen numerous digital transformation
              endeavors for organizations of all sizes. In today's technology
              landscape, every platform and software should be meticulously
              crafted to seamlessly align with industry best practices. However,
              making the right choice among available solutions based on
              business requirements, priorities, processes, and budget is a
              crucial decision.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/consulting.jpeg"
              alt="Section One Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Section 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Application Transformation
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              With our deep expertise in leading business platforms like
              NetSuite, Odoo, and SAP, we seamlessly support your organization
              and its customers. Project Planning and Management Design,
              Implementation, Development and Test Application Management
              Upgrade
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/aaptrans.jpeg"
              alt="Section Two Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Section 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Experience Transformation
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            Our customer experience strategy is comprehensive and tailored for success. Embrace agility and drive profitability through our digital commerce solutions, crafted to deliver a seamless omnichannel experience leveraging premier business platforms such as Adobe Magento, Hybris/CX, and Shopify.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="/exptrans.jpg"
              alt="Section Three Image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiffService