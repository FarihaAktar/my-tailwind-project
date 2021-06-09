import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center h-16 relative bg-gray-800 text-white font-serif shadow-lg'>
            <Link to="/" className='pl-8 font-bold text-2xl'>S <span className='w-1 h-1 bg-gray-50 inline-block rounded-full'></span> U</Link>
            
            <div className='pr-8 md:block '>
                <Link to='/' className='p-4 hover:text-green-400'>Home</Link>
                <Link to='/contact' className='p-4 hover:text-green-400'>Contact</Link>
            </div>
        </nav>
    );
};

export default Navbar;