import React from "react";

export const Footer = () => {
  return (
    <footer>
      <footer className="text-gray-600 body-font bg-slate-700">
        <div className="container px-1 py-2 mx-auto flex items-center sm:flex-row flex-col">
          <button className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
           
            <span className="ml-3 text-gray-200 text-xl">ABA</span>
          </button>
          <p className="text-sm  text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2022 ABA —
            <span
              href=""
              className="text-gray-200 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              Copyright
            </span>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <button className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </button>
           
            
            <button className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </button>
          </span>
        </div>
      </footer>
    </footer>
  );
};

export default Footer;
