// src/Components/Stage.js
import React from 'react';
import crown from '../Media/crown.png'
 
const Stage = ({ data }) => {
  return (
    <div className="flex space-x-0.5"> {/* Main row container with space between boxes */}

      {/* First Box (Column) */}
      <div className="flex flex-col min-h-96 min-w-36 box-content relative"> {/* Container for first column */}
        <div className="flex flex-col items-center justify-center h-3/5 bg-bgMain p-4"> {/* Upper Box with light color */}
          {/* Empty or other content can go here */}
        </div>

        {/* Overlapping Image */}
        <div className='relative h-0'>
          <img
            src={data[1].image}
            alt={data[1].name}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-2/3 w-20 h-20 rounded-full border-4 border-border2 shadow-lg z-10"
          />

          <div className='relative bottom-0 top-4 left-1/3 transform translate-x-2.5 translate-y-1/5 bg-border2 rounded-lg items-center justify-center z-20 w-6 h-6 rotate-45'>
            <div className='relative transform items-center justify-center bottom-1.5 translate-x-1.5 translate-y-1 -rotate-45 font-inter text-xs'>2</div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center h-2/5 space-y-2 box-content bg-bgBody text-white p-4 rounded-tl-2xl rounded-bl-2xl font-inter"> {/* Lower Box with dark navy color */}
          <p className="text-base">{data[1].name}</p>
          <p className="text-xl font-semibold">{data[1].score}</p>
        </div>

        <div className="flex flex-col bg-bgMain p-4"> {/* Upper Box with light color */}
          {/* Empty or other content can go here */}
        </div>

      </div>





      {/* Second Box (Column) */}
      <div className="flex flex-col min-h-96 min-w-36 box-content relative"> {/* Container for second column */}
        <div className="flex flex-col items-center justify-center h-2/5 bg-bgMain p-4"> {/* Upper Box with light color */}
          {/* Empty or other content can go here */}
        </div>

        <div className='relative h-0'>
          {/* Overlapping Images */}
          <div className="relative">
            {/* Main Overlapping Image */}
            <img
              src={data[0].image}
              alt={data[0].name}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-4 border-border1 shadow-lg z-10"
            />


            {/* Crown Image Positioned on Top */}
            <img
              src={crown}
              alt="Crown"
              className="absolute left-1/2 -translate-x-1/2 top-0 bottom-4 -translate-y-24 w-12 h-9 z-20" // Adjusted position
            />
          </div>

          <div className='relative bottom-0 top-4 left-1/4 transform translate-x-6  translate-y-5  bg-border1 rounded-lg items-center justify-center z-20 w-6 h-6 rotate-45'>
            <div className='relative transform items-center justify-center bottom-1.5 translate-x-1.5 translate-y-1 -rotate-45 font-inter text-xs'>1</div>
          </div>

        </div>

        <div className="flex flex-col items-center justify-center box-content space-y-2 h-3/5 bg-bgBody text-white p-4 rounded-t-5xl font-inter"> {/* Lower Box with dark navy color */}
          <p className="text-base">{data[0].name}</p>
          <p className="text-xl font-semibold">{data[0].score}</p>
        </div>

        <div className="flex flex-col items-center justify-center h-0 bg-bgMain p-4"> {/* Upper Box with light color */}
          {/* Empty or other content can go here */}
        </div>

      </div>





      {/* Third Box (Column) */}
      <div className="flex flex-col min-h-96 min-w-36 box-content relative"> {/* Container for third column */}
        <div className="flex flex-col items-center justify-center h-3/5 bg-bgMain p-4"> {/* Upper Box with light color */}
          {/* Empty or other content can go here */}
        </div>

        <div className='relative h-0'>
          {/* Overlapping Image */}
          <img
            src={data[2].image}
            alt={data[2].name}
            className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-2/3 w-20 h-20 rounded-full border-4 border-border3 shadow-lg z-10"
          />

          <div className='relative bottom-0 top-4 left-1/3 transform translate-x-2.5 translate-y-1/5 bg-border3 rounded-lg items-center justify-center z-20 w-6 h-6 rotate-45'>
            <div className='relative transform items-center justify-center bottom-1.5 translate-x-1.5 translate-y-1 -rotate-45 font-inter text-xs'>3</div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center h-2/5 box-content space-y-2 bg-bgBody text-white p-4 rounded-tr-2xl rounded-br-2xl font-inter"> {/* Lower Box with dark navy color */}
          <p className="text-base">{data[2].name}</p>
          <p className="text-xl font-semibold">{data[2].score}</p>
        </div>

        <div className="flex flex-col items-center justify-center bg-bgMain p-4"> {/* Upper Box with light color */}
          {/* Empty or other content can go here */}
        </div>

      </div>

    </div>
  );
};

export default Stage;