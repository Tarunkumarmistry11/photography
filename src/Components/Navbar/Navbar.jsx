import React from "react";

function Navbar() {
  return (
    <div className="fixed z-[999] w-full px-20 py-8 font-['Neue Montreal'] flex justify-between items-center">
      <div className="logo">
        <svg
          width="150"
          height="71.1"
          viewBox="0 0 484.1 71.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="svgGroup"
            strokeLinecap="round"
            fillRule="evenodd"
            fontSize="9pt"
            stroke="#000"
            strokeWidth="0.25mm"
            fill="#000"
            style={{ stroke: "#000", strokeWidth: "0.25mm", fill: "#000" }}
          >
            <path
              d="M 440.6 71.1 L 431.6 71.1 L 431.6 1.1 L 444.2 1.1 L 475.1 59.3 L 475.1 1.1 L 484.1 1.1 L 484.1 71.1 L 471.7 71.1 L 440.6 13.3 L 440.6 71.1 Z M 42 71.1 L 0 71.1 L 0 1.1 L 42 1.1 L 42 9.3 L 9.5 9.3 L 9.5 30.6 L 37.5 30.6 L 37.5 38.6 L 9.5 38.6 L 9.5 62.9 L 42 62.9 L 42 71.1 Z M 208.6 71.1 L 166.6 71.1 L 166.6 1.1 L 208.6 1.1 L 208.6 9.3 L 176.1 9.3 L 176.1 30.6 L 204.1 30.6 L 204.1 38.6 L 176.1 38.6 L 176.1 62.9 L 208.6 62.9 L 208.6 71.1 Z M 388.1 71.1 L 346.1 71.1 L 346.1 1.1 L 388.1 1.1 L 388.1 9.3 L 355.6 9.3 L 355.6 30.6 L 383.6 30.6 L 383.6 38.6 L 355.6 38.6 L 355.6 62.9 L 388.1 62.9 L 388.1 71.1 Z M 280.5 71.1 L 269.8 71.1 L 244.1 3.6 L 253.4 0 L 275.4 60.7 L 297.5 0.3 L 306.1 3.6 L 280.5 71.1 Z M 127.1 71.1 L 85.5 71.1 L 85.5 1.1 L 95 1.1 L 95 62.6 L 127.1 62.6 L 127.1 71.1 Z"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
      </div>
      <div className="links flex gap-10">
        {["About", "Gallery", "Videos", "Presets", "contact"].map(
          (item, index) => (
            <a
              key={index}
              className={`text-lg capitalize font-light ${index === 4 ? "ml-32" : ""}`}
            >
              {item}
            </a>
          )
        )}
      </div>
    </div>
  );
}

export default Navbar;
