// src/Components/Stage.js
import React from 'react';


const Stage = ({ data }) => {
  return (
    <div className="stage">
      <div className="flex flex-row items-center space-x-0">
        <div className="flex flex-col items-center">
          <img src={data[1].image} alt={data[1].name} className="w-20 h-20 rounded-full border-4 border-gray-300 mb-2" />
          <p className="text-lg font-bold">{data[1].name}</p>
          <p className="text-xl font-semibold">{data[1].score}</p>
        </div>
        <div className="flex flex-col items-center">
          <img src={data[0].image} alt={data[0].name} className="w-24 h-24 rounded-full border-4 border-gray-300 mb-2" />
          <p className="text-lg font-bold">{data[0].name}</p>
          <p className="text-xl font-semibold">{data[0].score}</p>
        </div>
        <div className=" flex flex-col items-center">
          <img src={data[2].image} alt={data[2].name} className="w-20 h-20 rounded-full border-4 border-gray-300 mb-2" />
          <p className="text-lg font-bold">{data[2].name}</p>
          <p className="text-xl font-semibold">{data[2].score}</p>
        </div>
      </div>
    </div>
  );
};

export default Stage;
