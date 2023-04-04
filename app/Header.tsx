import Link from 'next/link'
import React from 'react'


function Header() {
    return (
        <header className='p-5 bg-blue-500'>
            <Link href="/" 
            className='px-2 py-2 text-white text-3xl font-bold'>
                BOARD
            </Link>
        </header>
    )
}

export default Header