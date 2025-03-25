import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-gray-200 pt-8 pb-6 rounded-t-2xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold text-gray-700">Let's keep in touch!</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-600">
              Find us on any of these platforms, we respond within 1-2 business days.
            </h5>
            <div className="mt-6 flex space-x-3">
              <button className="bg-white text-blue-400 shadow-lg h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100">
                <i className="fab fa-twitter"></i>
              </button>
              <button className="bg-white text-blue-600 shadow-lg h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100">
                <i className="fab fa-facebook"></i>
              </button>
              <button className="bg-white text-pink-500 shadow-lg h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100">
                <i className="fab fa-dribbble"></i>
              </button>
              <button className="bg-white text-gray-800 shadow-lg h-10 w-10 flex items-center justify-center rounded-full hover:bg-gray-100">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4 mt-6 lg:mt-0">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">Useful Links</span>
                <ul className="list-none space-y-2">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-sm" href="#">About Us</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-sm" href="#">Blog</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-sm" href="#">Github</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-sm" href="#">Free Products</a>
                  </li>
                </ul>
              </div>

              <div className="w-full lg:w-4/12 px-4 mt-4 lg:mt-0">
                <span className="block uppercase text-gray-500 text-sm font-semibold mb-2">Other Resources</span>
                <ul className="list-none space-y-2">
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-sm" href="#">MIT License</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-sm" href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-sm" href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a className="text-gray-600 hover:text-gray-800 text-sm" href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-300" />

        <div className="flex flex-wrap items-center md:justify-between justify-center text-center">
          <div className="w-full md:w-4/12 px-4 mx-auto">
            <p className="text-sm text-gray-500 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Billpoint. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
