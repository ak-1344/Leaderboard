// src/components/Body.js
import React from 'react';
import Stage from './Stage.js';
import Table from './Table.js';
import firstImage from '../Media/1st.png';
import secondImage from '../Media/2nd.png';
import thirdImage from '../Media/3rd.png';


const data = [
  { name: "Eiden", score: 2430, image: firstImage },
  { name: "Jackson", score: 1847, image: secondImage },
  { name: "Emma Aria", score: 1674, image: thirdImage },
  { name: "Sebastian", score: 1124, image: thirdImage },
  { name: "Jason", score: 875, image: thirdImage },
  { name: "Netalie", score: 774, image: thirdImage },
  { name: "Serenity", score: 723, image: thirdImage },
  { name: "Hannah", score: 559, image: thirdImage },
];
function Body() {
  return (
    <div className="p-8 h-full w-full overflow-hidden">
      <h2 className="text-2xl font-semibold mb-4">Body Section</h2>
      <div className="w-full overflow-y-hidden flex-row flex justify-around">
      <Stage data={data}  />
      <Table />
      </div>
    </div>
  );
}

export default Body;
