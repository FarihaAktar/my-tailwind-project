import React from 'react';
import image from '../Images/pexels-nubia-navarro-(nubikini)-386009.jpg';
import Typical from 'react-typical';

const Header = () => {
    const header = {
        typical: [
            'a Team Player',
            2000,
            'Creative',
            2000,
            'a Dreamer',
            2000
        ]
    }
    return (
        <div className='h-screen flex justify-center items-center bg-gray-100'>
            <div>
                
                <div className='font-dosis text-center my-7 font-serif '>
                    <h2 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold'>
                        Hi! <br />
                        It's me Shafiet Ullah</h2>
                    <h1 className=' lg:text-4xl md:text-4xl sm:text-2xl text-2xl font-bold text-yellow-600'>
                        I am{" "}
                        <Typical
                            steps={header.typical}
                            loop={Infinity}
                            className='inline-block'
                        />
                    </h1>
                    <button className='bg-yellow-500 mt-10 py-2 px-10 rounded-full text-xl hover:bg-yellow-300 transition duration-300 ease-in-out animate-bounce'>
                        <a href="https://drive.google.com/uc?export=download&id=1AtkrlxzmB1bK5K1vMIvjYlUZRnhmX_59">DOWNLOAD CV</a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;