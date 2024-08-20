import Link from "next/link";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      {/* Upper Section */}
      <div className="max-w-[1280px] mx-auto px-2 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Section 1 */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4 bg-white p-1 max-w-[110px] mx-auto md:mx-0 rounded-sm">
              <img src="/logo.png" alt="logo" width={100} />
            </div>
            <p className="text-gray-400">
            We value trust, transparency, collaboration, and flexibility. 'Customer Success' is our driving philosophy.
            </p>
          </div>
          {/* Section 2 */}
          <div className="flex-1 text-center">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="text-gray-400 hover:underline"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="/whatwedo"
                  className="text-gray-400 hover:underline"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-gray-400 hover:underline"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          {/* Section 3 */}
          <div className="flex-1 text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">123 Street Name, City, State, 12345</p>
            <p className="text-gray-400">Email: consulting@cxeglobal.com</p>
            <p className="text-gray-400">Phone: (408) 658 3571</p>
          </div>
        </div>
      </div>

      <div className="h-[1px] max-w-[1280px] bg-white mx-auto my-4"></div>

      {/* Lower Section */}
      {/* <div className="">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex-1 text-center md:text-left">
              <h4 className="font-semibold">Our Services</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:underline">
                    Service 1
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:underline">
                    Service 2
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 text-center">
              <h4 className="font-semibold">Our Services</h4>
              <ul className="mt-2 space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:underline">
                    Service 3
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-gray-400 hover:underline">
                    Service 4
                  </Link>
                </li>
              </ul>
            </div>
            {/* Newsletter Section */}
            {/* <div className="flex-1 text-center md:text-right px-10 md:px-0">
              <h4 className="font-semibold mb-2">Subscribe to our Newsletter</h4>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-end gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-[10px] text-black md:text-xl"
                />
                <MagicButton
                  title={"Subscribe"}
                  otherClasses={
                    "px-4 py-2 md:text-xl hover:text-black text-white"
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div> */} 

      {/* Copyright Section */}
      <div className="mt-2">
        <div className="max-w-[1280px] mx-auto text-center text-gray-400">
          &copy; {new Date().getFullYear()} CXE-Global. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
