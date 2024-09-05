// src/components/Header.js
import React from 'react';
import back from '../Media/Back.png'
import Menu from '../Media/Menu.png'

function Header() {
  return (

    <div className="bg-bgMain flex p-4 justify-between text-text items-center">
      <button href='/' className='cursor-pointer'>
        <img src={back} alt='Back to the previous page' className='scale-50' />
      </button>

      <div className="text-2xl font-bold text-center font-inter">
        Leaderboard
      </div>

      <button href='/' className='cursor-pointer'>
        <img src={Menu} alt='Open Menu' className='scale-50' />
      </button>
    </div>
  );
}

export default Header;
