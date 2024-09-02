// src/App.js
import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Body from './Components/Body';


function App() {
  return (
    <div className='bg-bgMain min-h-screen'>
      <Header />
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
