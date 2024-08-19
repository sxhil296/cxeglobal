const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      {/* Upper Section */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {/* Section 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          {/* Section 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:underline">
                  About
                </a>
              </li>
            </ul>
          </div>
          {/* Section 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Street Name, City, State, 12345</p>
            <p className="text-gray-400">Email: contact@company.com</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
      <div className="h-[1px] max-w-[1280px] bg-white mx-auto my-4"></div>
      {/* Lower Section */}
      <div className="">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4 ">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold">Section 1</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Link 2
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Section 2</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Section 3</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Link 5
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Link 6
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold">Section 4</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="hover:underline">
                    Link 7
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Link 8
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
