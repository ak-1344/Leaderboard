// src/App.js
import React from 'react';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Body from './Components/Body';


function App() {
  return (
    <div className='bg-bgMain h-screen max-h-screen overflow-hidden'>
      <Header />
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
