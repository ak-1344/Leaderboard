// src/components/Navbar.js
import React, { useState } from 'react';

function Navbar() {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
  };

  return (
    <nav className="p-4 font-inter text-text flex flex-row justify-around">
      <div></div>
      <ul className="flex flex-row space-x-28 bg-white border-none rounded-md px-8 py-3 text-sm font-bold-500 justify-center">
        <li
          className={`relative cursor-pointer ${selected === 0 ? 'text-text' : ''}`}
          onClick={() => handleClick(0)}
        >
          Organisation
          {selected === 0 && (
            <span className="absolute cursor-default bottom-0 top-7 left-0 w-11/12 translate-x-1 h-[2px] bg-underline"></span>
          )}
        </li>
        <li
          className={`relative cursor-pointer ${selected === 1 ? 'text-text' : ''}`}
          onClick={() => handleClick(1)}
        >
          Department
          {selected === 1 && (
            <span className="absolute bottom-0 top-7  left-0 w-11/12 translate-x-1 h-[2px] bg-underline"></span>
          )}
        </li>
      </ul>
      <div></div>
    </nav>
  );
}

export default Navbar;
