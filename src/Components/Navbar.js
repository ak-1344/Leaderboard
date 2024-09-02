// src/components/Navbar.js
import React from 'react';

function Navbar() {
  return (
    <nav className="bg-bgMain p-4 text-white">
      <ul className="flex space-x-4 justify-center">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
