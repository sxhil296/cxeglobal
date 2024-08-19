"use client";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";

const ContactForm = () => {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  return (
    <div className="p-10 sm:p-20 bg-gray-100">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-stretch justify-center gap-10 ">
        {/* Map Section */}
        <div className="w-full sm:w-1/2 p-1 sm:p-8">
          <div className="h-64 sm:h-full">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8400756087766!2d144.95373561592664!3d-37.81628194276857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5776c7d0c9a6c0!2sVictoria%20Harbour!5e0!3m2!1sen!2sau!4v1623588264890!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="w-full sm:w-1/2 p-1 sm:p-8">
          <h2 className="text-3xl font-normal mb-4">Talk to Us!</h2>
          <p className="mb-6 text-gray-600 text-balance">
            We’d love to discuss your project or world-beating idea with you.
            Alternatively, send through a request for a quotation, enquiry.
          </p>

          <form>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-2 w-full border-b shadow-b shadow-md focus:outline-none  "
                  placeholder="Name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 p-2 w-full border-b shadow-b shadow-md focus:outline-none  "
                    placeholder="Email"
                  />
                </div>

                <div className="flex items-center justify-center relative">
                  <ReactFlagsSelect
                    selected={selectedCountry}
                    fullWidth={false}
                    onSelect={(code) => setSelectedCountry(code)}
                    className="absolute left-0 top-0 h-full"
                    customLabels={{
                      US: "+1",
                      GB: "+44",
                      IN: "+91",
                      CA: "+1",
                      AU: "+61",
                    }}
                  />
                  <input
                    type="tel"
                    id="mobile"
                    className="pl-2 p-2 w-full border-b shadow-b shadow-md focus:outline-none "
                    placeholder="Mobile No."
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  id="company"
                  className="mt-1 p-2 w-full border-b shadow-b shadow-md focus:outline-none "
                  placeholder="Company Name"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 p-2 w-full border-b shadow-b shadow-md focus:outline-none "
                  placeholder="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 bg-custom-bg text-white py-3 px-6 transition-colors duration-200 w-full sm:max-w-[30%] text-xl text-center"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
