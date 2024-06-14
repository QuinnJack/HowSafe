// Header.js
import React, { useRef, useEffect } from "react";

const Header = ({
  selectedWard,
  toggleDropdown,
  dropdownOpen,
  wards,
  selectWard,
  closeDropdown,
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef, closeDropdown]);

  return (
    <div className="flex flex-col items-center mt-20 text-5xl font-custom-serif tracking-wide">
      <div className="flex items-center">
        <h1 className="font-bold" style={{ color: "#052E41" }}>
          How Safe is
        </h1>
        <div className="relative ml-2" ref={dropdownRef}>
          <div
            className="flex items-center cursor-pointer border-b-2 border-[#015F6F]"
            onClick={toggleDropdown}
          >
            <h1
              id="selected-Ward"
              className="font-bold transition-colors duration-500"
              style={{ color: "#052E41" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#00606F")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#052E41")}
            >
              {selectedWard}
            </h1>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#015F6F"
              viewBox="0 0 256 256"
              className="ml-2"
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </div>
          {dropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-[#fffefc] border shadow-lg max-h-56 overflow-y-auto">
              {wards.map((Ward) => (
                <div
                  key={Ward}
                  className="px-4 py-2 text-lg cursor-pointer hover:bg-gray-200 ward-text"
                  onClick={() => selectWard(Ward)}
                >
                  {Ward}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <style jsx>{`
        #selected-Ward:hover {
          color: #015f6f;
        }
      `}</style>
    </div>
  );
};

export default Header;
