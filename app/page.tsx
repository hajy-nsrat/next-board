import Link from 'next/link';
import React from 'react';

import boards from '@/test-data/data.json';

async function Home() {
  //console.log(boards);

  return (
    <main >
      <br />
      <div className=' grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7'>
        
        {boards.map((board) => (
          <div 
          key={board.id}
          className='flex justify-center items-center bg-blue-500 w-52 h-44 m-3 p-2 rounded shadow-lg'>
            <Link
            href={'./myboard'} 
            className='text-white text-2xl font-bold p-1'> 
              {board.name}
            </Link>
          </div>
        ))}

        <div className='flex justify-center items-center bg-blue-400 w-52 h-44 m-3 p-2 rounded shadow-lg'>
            <button 
            className='text-white text-lg font-bold'> 
              <span className='text-xl'>+</span> New Board
            </button>
        </div>

      </div>
    </main>
  )
}

export default Home