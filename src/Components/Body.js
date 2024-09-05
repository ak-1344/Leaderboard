// src/components/Body.js
import React from 'react';
import Stage from './Stage.js';
import Table from './Table.js';
import firstImage from '../Media/1st.png';
import secondImage from '../Media/2nd.png';
import thirdImage from '../Media/3rd.png';


const non_sorted_data = [
  { name: "Eiden", score: 2430, image: firstImage },
  { name: "Jason", score: 875, image: thirdImage },
  { name: "Netalie", score: 774, image: thirdImage },
  { name: "Emma Aria", score: 1674, image: thirdImage },
  { name: "Sebastian", score: 1124, image: thirdImage },
  { name: "Jackson", score: 1847, image: secondImage },
  { name: "Hannah", score: 559, image: thirdImage },
  { name: "Serenity", score: 723, image: thirdImage },
];

const data = non_sorted_data.sort((a, b) => b.score - a.score);

function Body() {
  return (
    <div className="md:p-8 md:h-full min-w-screen lg:overflow-x-hidden md:overflow-auto md:scrollbar-hide ">
      <div className="w-full flex md:flex-row flex-col items-center md:space-x-8 md:px-2 md:justify-evenly justify-center">
        <div className='min-w-fit'>
          <Stage data={data} />
        </div>
        <div className='w-full md:w-fit'>
          <Table data={data} />
        </div>
      </div>
    </div>
  );
}

export default Body;
