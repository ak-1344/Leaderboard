// src/components/Table.js
import React from 'react';
import progress from '../Media/promotion.png';
import demotion from '../Media/demotion.png';

const Table = ({ data }) => {
  return (
    <div className='flex w-full'>
      <div className='content bg-bgBody rounded-5xl w-full md:w-fit h-full md:min-w-80 p-5 md:pr-5 flex flex-col space-y-3 items-stretch justify-evenly text-white'>
          <div className='row flex flex-row w-inherit items-center justify-between'>
            <div className='rank border-4 border-white rounded-full p-2 px-2.5 translate-x-3 text-xl font-inter font-bold'>
              <pre className='font-inter'>
                #4
              </pre>
            </div>
            <div className='name font-inter text-sm font-thin'>
              <p className='font-inter'>
                {data[3].name}
              </p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className='score flex flex-col justify-end items-end text-sm space-y-1 -translate-x-5 font-inter font-thin'>
              <p className='text-xs font-inter font-bold'>
                {data[3].score}
              </p>
              <img src={progress} alt="Shows the progress" className='w-2 ' />
            </div>
          </div>
          <hr className='border-white border-1 rounded-lg w-11/12 translate-x-4' />
          
          

          <div className='row flex flex-row w-inherit items-center justify-between'>
            <div className='rank border-4 border-white rounded-full p-2 px-2.5 text-xl translate-x-3 font-inter font-bold'>
              <pre className='font-inter'>
                #5
              </pre>
            </div>
            <div className='name font-inter text-sm font-thin'>
              <p className='font-inter'>
                {data[4].name}
              </p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className='score flex flex-col justify-end -translate-x-5 items-end text-sm space-y-1 font-inter font-thin'>
              <p className='text-xs font-inter font-bold'>
                {data[4].score}
              </p>
              <img src={demotion} alt="Shows the progress" className='w-2 ' />
            </div>
          </div>
          <hr className='border-white border-1 rounded-lg w-11/12 translate-x-4' />
          


          <div className='row flex flex-row w-inherit items-center justify-between'>
            <div className='rank border-4 border-white rounded-full p-2 px-2.5 text-xl translate-x-3 font-inter font-bold'>
              <pre className='font-inter'>
                #6
              </pre>
            </div>
            <div className='name font-inter text-sm font-thin'>
              <p className='font-inter'>
                {data[5].name}
              </p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className='score flex flex-col justify-end -translate-x-5 items-end text-sm space-y-1 font-inter font-thin'>
              <p className='text-xs font-inter font-bold'>
                {data[5].score}
              </p>
              <img src={progress} alt="Shows the progress" className='w-2 ' />
            </div>
          </div>
          <hr className='border-white border-1 rounded-lg w-11/12 translate-x-4' />
          



          <div className='row flex flex-row w-inherit items-center justify-between'>
            <div className='rank border-4 border-white rounded-full p-2 px-2.5 text-xl translate-x-3 font-inter font-bold'>
              <pre className='font-inter'>
                #7
              </pre>
            </div>
            <div className='name font-inter text-sm font-thin'>
              <p className='font-inter'>
                {data[6].name}
              </p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className='score flex flex-col justify-end -translate-x-5 items-end text-sm space-y-1 font-inter font-thin'>
              <p className='text-xs font-inter font-bold'>
                {data[6].score}
              </p>
              <img src={progress} alt="Shows the progress" className='w-2 ' />
            </div>
          </div>
          <hr className='border-white border-1 rounded-lg w-11/12 translate-x-4' />



          <div className='row flex flex-row w-inherit items-center justify-between'>
            <div className='rank border-4 border-white rounded-full p-2 px-2.5 text-xl translate-x-3 font-inter font-bold'>
              <pre className='font-inter'>
                #8
              </pre>
            </div>
            <div className='name font-inter text-sm font-thin'>
              <p className='font-inter'>
                {data[7].name}
              </p>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div className='score flex flex-col justify-end -translate-x-5 items-end text-sm space-y-1 font-inter font-thin'>
              <p className='text-xs font-inter font-bold'>
                {data[7].score}
              </p>
              <img src={demotion} alt="Shows the progress" className='w-2 ' />
            </div>
          </div>
          





      </div>
    </div>

  );
}

export default Table;
