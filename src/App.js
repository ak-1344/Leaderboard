// src/App.js
import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Body from './Components/Body';

function App() {
  return (
    <div className='bg-bgMain min-h-screen text-text overflow-hidden p-0 m-0 flex flex-col'>
      <Header />
      <Navbar />
      <div className="md:h-20 h-0"></div>
      <Body />
    </div>
  );
}

export default App;