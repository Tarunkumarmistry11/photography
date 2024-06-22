import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-50 w-full px-4 lg:px-20 py-4 lg:py-8 font-['neue-montreal'] flex justify-between items-center">
      <div className="logo">
      <svg
          width="120"
          height="57"
          viewBox="0 0 484.1 71.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="svgGroup"
            strokeLinecap="round"
            fillRule="evenodd"
            fontSize="9pt"
            stroke="#fff"
            strokeWidth="0.25mm"
            fill="#fff"
            style={{ stroke: "#fff", strokeWidth: "0.25mm", fill: "#fff" }}
          >
            <path
              d="M 440.6 71.1 L 431.6 71.1 L 431.6 1.1 L 444.2 1.1 L 475.1 59.3 L 475.1 1.1 L 484.1 1.1 L 484.1 71.1 L 471.7 71.1 L 440.6 13.3 L 440.6 71.1 Z M 42 71.1 L 0 71.1 L 0 1.1 L 42 1.1 L 42 9.3 L 9.5 9.3 L 9.5 30.6 L 37.5 30.6 L 37.5 38.6 L 9.5 38.6 L 9.5 62.9 L 42 62.9 L 42 71.1 Z M 208.6 71.1 L 166.6 71.1 L 166.6 1.1 L 208.6 1.1 L 208.6 9.3 L 176.1 9.3 L 176.1 30.6 L 204.1 30.6 L 204.1 38.6 L 176.1 38.6 L 176.1 62.9 L 208.6 62.9 L 208.6 71.1 Z M 388.1 71.1 L 346.1 71.1 L 346.1 1.1 L 388.1 1.1 L 388.1 9.3 L 355.6 9.3 L 355.6 30.6 L 383.6 30.6 L 383.6 38.6 L 355.6 38.6 L 355.6 62.9 L 388.1 62.9 L 388.1 71.1 Z M 280.5 71.1 L 269.8 71.1 L 244.1 3.6 L 253.4 0 L 275.4 60.7 L 297.5 0.3 L 306.1 3.6 L 280.5 71.1 Z M 127.1 71.1 L 85.5 71.1 L 85.5 1.1 L 95 1.1 L 95 62.6 L 127.1 62.6 L 127.1 71.1 Z"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
      </div>
      <div className="hidden lg:block">
        <div className="links flex gap-10">
          {[
            { name: "About", path: "/about" },
            { name: "Gallery", path: "/gallery" },
            { name: "Videos", path: "/videos" },
            { name: "Presets", path: "/presets" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-lg capitalize font-regular ${
                index === 4 ? "ml-6 lg:ml-32" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      {/* Mobile Menu Button (Hidden on Desktop) */}
      <div>
        <button
          className="block lg:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {/* Hamburger Icon */}
          {!isOpen ? (
            <svg
              className="w-6 h-6 transition duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            // Close Icon (X)
            <svg
              className="w-6 h-6 transform rotate-45 transition duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
      </div>
      {/* Mobile Menu */}
       {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-20 left-0 w-full h-screen border-[2px] border-zinc-700 bg-zinc-900  transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center pt-20 pb-4">
          {[
            { name: "About", path: "/about" },
            { name: "Gallery", path: "/gallery" },
            { name: "Videos", path: "/videos" },
            { name: "Presets", path: "/presets" },
            { name: "Contact", path: "/contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`text-lg capitalize font-light py-2 w-full text-center transition duration-300 delay-75 ${
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
              }`}
              style={{ transitionDelay: `${index * 75 + 75}ms` }}
              onClick={toggleMenu}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
