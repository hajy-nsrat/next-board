import Link from 'next/link';
import React from 'react';

import boards from '@/test-data/data.json';

async function Home() {
  //console.log(boards);

  return (
    <main className='flex justify-center '>
      <br />
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 m-6'>
        
        <div className='flex justify-center items-center bg-blue-400 w-52 h-44 m-3 
        rounded shadow-md hover:shadow-2xl'>
          <button 
          className='text-white text-lg font-bold'> 
            <span className='text-xl'>+</span> New Board
          </button>
        </div>

        {boards.map((board) => (
          <div 
          key={board.id}
          className='flex justify-center items-center bg-blue-500 w-52 h-44 m-3 
          rounded shadow-md hover:shadow-2xl hover:underline'>
            <Link
            href={`./${board.id}`} 
            className='text-white text-2xl font-bold p-1'> 
              {board.name}
            </Link>
          </div>
        ))}

      </div>
    </main>
  )
}

export default Home