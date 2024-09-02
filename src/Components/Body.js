// src/components/Body.js
import React from 'react';
import Stage from './Stage.js';
import Table from './Table.js';
import firstImage from '../Media/1st.png';
import secondImage from '../Media/2nd.png';
import thirdImage from '../Media/3rd.png';

// Data for Stage component
const data = [
  { name: "Eiden", score: 2430, image: firstImage },
  { name: "Jackson", score: 1847, image: secondImage },
  { name: "Emma Aria", score: 1674, image: thirdImage },
];
function Body() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Body Section</h2>
      <Stage data={data} />
      <Table />
    </div>
  );
}

export default Body;
