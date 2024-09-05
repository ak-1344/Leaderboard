// src/App.js
import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Body from './Components/Body';

function App() {
  return (
    <div className='bg-bgMain min-h-screen text-text overflow-hidden flex flex-col'>
      <Header />
      <Navbar />
      <main className='flex-1'>
        <Body />
      </main>
    </div>
  );
}

export default App;

