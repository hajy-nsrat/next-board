import Link from 'next/link';
import React from 'react';

export function Home() {
  return (
    <main>
      <h1 className="m-2 text-3xl font-bold ">
        BOARD
      </h1>
      <br />
      <button className='m-2 p-1 bg-blue-500 text-white rounded'>
        <Link href={'./myboard'}> my Board </Link>
      </button>
    </main>
  )
}

export default Home